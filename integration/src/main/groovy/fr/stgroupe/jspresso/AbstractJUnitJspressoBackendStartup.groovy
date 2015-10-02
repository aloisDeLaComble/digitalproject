package fr.stgroupe.jspresso;

import java.security.acl.Group

import javax.security.auth.Subject
import javax.sql.DataSource

import org.apache.commons.dbcp2.BasicDataSource
import org.hsqldb.util.DatabaseManagerSwing
import org.jboss.security.SimpleGroup
import org.jboss.security.SimplePrincipal
import org.jspresso.contrib.tmar.core.Tmar4JUnit
import org.jspresso.framework.application.backend.persistence.hibernate.HibernateBackendController
import org.jspresso.framework.application.backend.session.IApplicationSession
import org.jspresso.framework.model.descriptor.IComponentDescriptor
import org.jspresso.framework.model.entity.IEntity
import org.jspresso.framework.security.SecurityHelper
import org.jspresso.framework.security.UserPrincipal
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.BeanFactory
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.SingleConnectionDataSource
import org.springframework.transaction.support.TransactionCallbackWithoutResult
import org.junit.Before
import org.junit.After

/**
 * Implementation of the JUnit specification but loading the JSpresso spring
 * context and initializing the database with reference data
 * 
 * @author Henri Tremblay
 */
public abstract class AbstractJUnitJspressoBackendStartup extends Tmar4JUnit {

  /** Tell if the database reference data were already inserted or not */
  private static boolean            initialized        = false

  /** Jspresso startup used underneath */
  private JUnitBackendStartup startup;

  /** logger for the test */
  private final Logger              log                = LoggerFactory.getLogger(getClass())

  /** Jdbc template offered to extending classes to use in their assertion */
  private JdbcTemplate              template

//  /** Perform database type specific operations */
//  private IDbHelper                 dbHelper

  //-----------------------------------------------------------
  // Section containing methods to initialize the test
  //-----------------------------------------------------------

  /**
   * This method should return the application context key that will be passed
   * to the backend startup in order to create the Spring bean factory
   * 
   * @return name of the application context key
   */
  protected abstract String getApplicationContextKey();

  /**
   * This method should return the bean factory selector that will be passed to
   * the backend startup in order to create the Spring bean factory
   * 
   * @return url to the beanRefFactory file
   */
  protected abstract String getBeanFactorySelector();

  void loadReferenceData (DataSource datasource) {
    
  }

  /**
   * Special method called by JUnit before every test method call. If does the
   * following:
   * <ul>
   * <li>Start the Jspresso backend controller by calling {@link #initBackendStartup()}</li>
   * <li>Initialize the JdbcTemplate and the DbHelper</li>
   * <li>Initialize the database will reference data. Only once at the beginning
   * of the test suite</li>
   * <li>Initialize the database so that each test starts with a deterministic
   * state</li>
   * </ul>
   * The reference data initialization is only done if
   * {@link #shouldLoadReferenceData()}. The pseudo code is this:
   * 
   * <pre>
   * {@link #doBeforeReferenceData()};
   * 
   * if ({@link #shouldLoadReferenceData()}) {
   *   {@link #loadReferenceData(DataSource)};
   * }
   * 
   * {@link #doAfterReferenceData()};
   * </pre>
   */
  @Before
  public void setup() {
    startup = initBackendStartup();

    BeanFactory factory = startup.getApplicationContext();

    DataSource datasource = factory.getBean('dataSource');
    template = new JdbcTemplate(datasource);

    String url;
    if(datasource instanceof SingleConnectionDataSource) {
      url = ((SingleConnectionDataSource) datasource).url
    }
    else if(datasource instanceof BasicDataSource) {
      BasicDataSource dbcp = ((BasicDataSource) datasource)
      url = dbcp.url
    }
    else {
      BasicDataSource dbcp = (BasicDataSource) datasource.unwrap(BasicDataSource)
      url = dbcp.url
    }

    if(!initialized) {
      doBeforeReferenceData();

      if(shouldLoadReferenceData()) {
        loadReferenceData(datasource);
      }

      doAfterReferenceData();

      initialized = true;
    }

    initDatabase();
  }

  /**
   * Special method called by JUnit after every test method call. If does the
   * following:
   * <ul>
   * <li>Clean the backend controller (<code>cleanupRequestResources</code>)</li>
   * <li>Stop the backend controller (<code>stop</code>)</li>
   * </ul>
   * You should usually call the superclass method if you override it. Not cleaning up the
   * backend controller causes connections leaks.
   */
  @After
  public void cleanup() {
    controller.cleanupRequestResources()
    controller.stop()
  }



  /**
   * Constructs and starts the backend startup
   */
  protected JUnitBackendStartup initBackendStartup() {
    startup = new JUnitBackendStartup(this);
    startup.start();
    configureApplicationSession(createTestSubject(), getStartupLocale())
    return startup;
  }
  
  protected Subject createTestSubject() {
    Subject testSubject = new Subject()

    UserPrincipal p = new UserPrincipal("test_user")
    testSubject.getPrincipals().add(p)
    p.putCustomProperty(UserPrincipal.LANGUAGE_PROPERTY, "en")

    Group rolesGroup = new SimpleGroup(SecurityHelper.ROLES_GROUP_NAME)
    rolesGroup.addMember(new SimplePrincipal("administrator"))
    testSubject.getPrincipals().add(rolesGroup)

    return testSubject
  }

  protected void configureApplicationSession(Subject subject, Locale locale) {
    IApplicationSession session = controller.getApplicationSession();
    session.setSubject(subject);
    session.setLocale(locale);
  }

  protected Locale getStartupLocale() {
    return Locale.getDefault();
  }

  /**
   * Disable all referential integrity, calls doInitDatabase and put back the
   * referential integrity
   */
  private void initDatabase() {
    disableReferentialIntegrity();
    doInitDatabase();
    enableReferentialIntegrity();
  }

  /**
   * @return if the reference data should be loaded or not
   */
  protected boolean shouldLoadReferenceData() {
    return true;
  }

  /**
   * Called right before {@link #loadReferenceData(DataSource)}. However, it is
   * always called even if {@link #shouldLoadReferenceData()} returns false
   */
  protected void doBeforeReferenceData() {
  }

  /**
   * Called after before {@link #loadReferenceData(DataSource)}. However, it is
   * always called even if {@link #shouldLoadReferenceData()} returns false
   */
  protected void doAfterReferenceData() {
  }

  /**
   * Deletes any table, reset any sequence, do whatever need to put the database
   * in a stable state before the test. Normally contains a list of
   * {@link #deleteTable(String)} plus one or two updates using
   * {@link #getTemplate()}
   */
  protected void doInitDatabase() {

  }


  /**
   * Delete table content from database
   * 
   * @param tableName
   *          the table to delete
   */
  protected void deleteTable(String tableName) {
    template.execute("delete from " + tableName);
  }

  private void disableReferentialIntegrity() {
    //dbHelper.disableReferentialIntegrity(template);
  }

  private void enableReferentialIntegrity() {
    //dbHelper.enableReferentialIntegrity(template);
  }

  protected save(IEntity entity) {
    saveAll(Collections.singletonList(entity));
  }

  protected <T extends IEntity> void saveAll(List<T> entities) {
    for (T entity : entities) {
      getController().getHibernateSession().saveOrUpdate(entity);
    }
    getController().getHibernateSession().flush();
  }




  //-----------------------------------------------------------
  // Helper methods
  //-----------------------------------------------------------

  /**
   * @return a logger of the category of the test class package
   */
  protected Logger getLog() {
    return log;
  }

  /**
   * @return a jdbc template using the current jdbc connection
   */
  protected JdbcTemplate getTemplate() {
    return template;
  }

  /**
   * @return the backend controller used by this test
   */
  protected HibernateBackendController getController() {
    return (HibernateBackendController) startup.getBackendController();
  }

  /**
   * Instantiate an empty Jspresso instance
   * 
   * @param clazz
   *          Entity to instantiate
   * @return newly created entity
   */
  protected <T extends IEntity> T createEntityInstance(Class<T> clazz) {
    return getController().getEntityFactory().createEntityInstance(clazz);
  }

  /**
   * Update an entity in database. The entity must be returned
   * by the closure which is in charge of doing the update.
   *
   * <p>Example:
   * <pre>
   * Message message = ...
   * updateEntity {
   *   message.status = RD
   *   return message
   * }
   * </pre>
   *
   * @param closure the closure creating the entity
   * @return the newly created entity
   */
  protected void updateEntity(Closure closure) {
    controller.transactionTemplate.execute( {
      IEntity entity = closure.call() as IEntity
      controller.registerForUpdate(entity)
      controller.getHibernateSession().flush()
    } as TransactionCallbackWithoutResult)
  }

  /**
   * Insert an entity in database. The entity must be returned
   * by the closure which is in charge of initializing it.
   *
   * <p>Example:
   * <pre>
   * return insertEntity {
   *   Message message = createEntityInstance(Message.class)
   *   message.status = status
   *   message.way = I
   *   return message
   * } as Message
   * </pre>
   *
   * @param closure the closure creating the entity
   * @return the newly created entity
   */
  protected IEntity insertEntity(Closure closure) {
    IEntity entity = closure.call() as IEntity;
    controller.transactionTemplate.execute( {
      IEntity entityClone = controller.cloneInUnitOfWork(entity);
      controller.registerForUpdate(entityClone)
      controller.getHibernateSession().flush()
    } as TransactionCallbackWithoutResult)
    return entity;
  }

  /**
   * get component descriptor from model type
   * @param model
   * @return
   */
  protected <T extends IEntity> IComponentDescriptor<T> getComponentDescriptor(Class<?> model) {
    return (IComponentDescriptor<T>)getApplicationContext().getBean(model.getSimpleName());
  }

  /**
   * @return Return the current application context
   */
  protected BeanFactory getApplicationContext() {
    return startup.getApplicationContext();
  }

  //-----------------------------------------------------------
  // Debugging methods. So not be committed but are useful to debug a test
  //-----------------------------------------------------------

//  /**
//   * Dump the database to a file. The tables will be ordered per FK dependencies
//   * 
//   * @param filename
//   *          The file were the DB will be saved
//   * @param format
//   *          The format of the file (one of the constants in the
//   *          org.dbunit.ant.Export class)
//   */
//  protected void dumpDatabase(String filename, String format) {
//    Connection con = DataSourceUtils.getConnection(template.getDataSource());
//    IDatabaseConnection conn = dbHelper.getDbUnitConnection(con);
//
//    Export export = new Export();
//    export.setOrdered(true);
//    export.setFormat(format);
//    export.setDest(new File(filename));
//    try {
//      export.execute(conn);
//    } catch (DatabaseUnitException e) {
//      throw new RuntimeException(e);
//    }
//  }

  /**
   * Launch the HSQLDB Database manager on the in-memory database. Useful when
   * launch during debugging to check what's in the DB
   */
  protected void launchDbExplorer() {
    String url = ((BasicDataSource) template.getDataSource()).getUrl();
    DatabaseManagerSwing.main("--url", url);
  }

  /**
   * create entities using tmar table (do not save)
   * @param model
   * @param table
   */
  protected <T extends IEntity> List<T> createEntities(Class<?> model, Map<String, List<Object>> table) {
    IComponentDescriptor<T> type = getComponentDescriptor(model)
    return TmarUtil.createEntities(type, table, false, true, getController());
  }

  /**
   * merge Entities using tmar table and save
   * @param model
   * @param table
   * @param mergeFields
   * @return list of entities
   */
  protected <T extends IEntity> List<T> mergeEntities(Class<T> model, Map<String, List<Object>> table) {
    IComponentDescriptor<T> type = getComponentDescriptor(model)
    return TmarUtil.createEntities(type, table, true, true, getController());
  }

  /**
   * delete Entities using tmar table
   * @param model
   * @param table
   * @param mergeFields
   */
  protected <T extends IEntity> void deleteEntities(Class<T> model, Map<String, List<Object>> table) {
    IComponentDescriptor<T> type = getComponentDescriptor(model)
    TmarUtil.deleteEntities(type, table, getController());
  }

  /**
   * delete Entity
   * @param entity
   */
  protected <T extends IEntity> void deleteEntity(T entity) {
    if (entity == null) {
      return;
    }
    TmarUtil.deleteEntity(entity, getController());
  }

}
