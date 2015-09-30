package digitalproject.development;

import org.jspresso.framework.application.startup.development.AbstractHibernateTestDataPersister;
import org.springframework.beans.factory.BeanFactory;

/**
 * Persists some test data for the application.
 */
public class TestDataPersister extends AbstractHibernateTestDataPersister {

  /**
   * Constructs a new <code>TestDataPersister</code> instance.
   * 
   * @param beanFactory
   *            the spring bean factory to use.
   */
  public TestDataPersister(BeanFactory beanFactory) {
    super(beanFactory);
  }

  /**
   * Creates some test data using the passed in Spring application context.
   */
  @Override
  public void createAndPersistTestData() {
    
    // Create some entities...
    // MyEntity myEntity = createEntityInstance(MyEntity.class);
    
    // ...and save them.
    //saveOrUpdate(myEntity);
  }
}
