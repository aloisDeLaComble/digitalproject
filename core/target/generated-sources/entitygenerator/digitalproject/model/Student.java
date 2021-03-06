
/*
 * Generated by Jspresso. All rights reserved.
 */
package digitalproject.model;
/**
 * Student entity.
 * <p>
 * Generated by Jspresso. All rights reserved.
 * <p>
 *
 * @hibernate.mapping
 *           default-access = "org.jspresso.framework.model.persistence.hibernate.property.EntityPropertyAccessor"
 *           default-cascade="persist,merge,save-update"
 * @hibernate.class
 *           table = "STUDENT"
 *           dynamic-insert = "true"
 *           dynamic-update = "true"
 *           persister =
 *            "org.jspresso.framework.model.persistence.hibernate.entity.persister.EntityProxyJoinedSubclassEntityPersister"
 * @author Generated by Jspresso
 */
@SuppressWarnings("all")
public interface Student extends
  org.jspresso.framework.model.entity.IEntity,
  digitalproject.model.Person {
  /**
   * Gets the id.
   *
   * @hibernate.id
   *           generator-class = "assigned"
   *           type = "string"
   * @hibernate.column
   *           name = "ID"
   *           length = "36"
   * @return the id.
   */
  java.io.Serializable getId();

  /**
   * Gets the version.
   *
   * @hibernate.version
   *           unsaved-value = "null"
   *           column = "VERSION"
   *           type = "integer"
   * @hibernate.column
   *           name = "VERSION"
   *           precision = "11"
   * @return the version.
   */
  @org.springframework.data.annotation.Version
  java.lang.Integer getVersion();


  /**
   * Constant value for technologies.
   */
  String TECHNOLOGIES = "technologies";

  /**
   * Gets the technologies.
   *
   * @hibernate.set
   *           cascade = "persist,merge,save-update,delete"
   *           table = "TECHNOLOGY_STUDENTS_ABLE_TO_USE_IT"
   *           inverse = "true"
   * @hibernate.key
   *           column = "STUDENT_ID"
   *           foreign-key = "TECHNOLOGY_STUDENTS_ABLE_TO_USE_IT_STUDENT_FK"
   * @hibernate.many-to-many
   *           class = "digitalproject.model.Technology"
   *           column = "TECHNOLOGY_ID"
   *           foreign-key = "TECHNOLOGY_STUDENTS_ABLE_TO_USE_IT_TECHNOLOG2_FK"
   * @return the technologies.
   */
  java.util.Set<digitalproject.model.Technology> getTechnologies();

  /**
   * Sets the technologies.
   *
   * @param technologies
   *          the technologies to set.
   */
  void setTechnologies(java.util.Set<digitalproject.model.Technology> technologies);

  /**
   * Adds an element to the technologies.
   *
   * @param technologiesElement
   *          the technologies element to add.
   */
  void addToTechnologies(digitalproject.model.Technology technologiesElement);

  /**
   * Removes an element from the technologies.
   *
   * @param technologiesElement
   *          the technologies element to remove.
   */
  void removeFromTechnologies(digitalproject.model.Technology technologiesElement);



  /**
   * Constant value for projects.
   */
  String PROJECTS = "projects";

  /**
   * Gets the projects.
   *
   * @hibernate.set
   *           table = "STUDENT_PROJECTS"
   * @hibernate.key
   *           column = "STUDENT_ID"
   *           foreign-key = "STUDENT_PROJECTS_STUDEN1_FK"
   * @hibernate.many-to-many
   *           class = "digitalproject.model.Project"
   *           column = "PROJECT_ID"
   *           foreign-key = "STUDENT_PROJECTS_PROJEC1_FK"
   * @return the projects.
   */
  java.util.Set<digitalproject.model.Project> getProjects();

  /**
   * Sets the projects.
   *
   * @param projects
   *          the projects to set.
   */
  void setProjects(java.util.Set<digitalproject.model.Project> projects);

  /**
   * Adds an element to the projects.
   *
   * @param projectsElement
   *          the projects element to add.
   */
  void addToProjects(digitalproject.model.Project projectsElement);

  /**
   * Removes an element from the projects.
   *
   * @param projectsElement
   *          the projects element to remove.
   */
  void removeFromProjects(digitalproject.model.Project projectsElement);



  /**
   * Constant value for createTimestamp.
   */
  String CREATE_TIMESTAMP = "createTimestamp";

  /**
   * Gets the createTimestamp.
   *
   * @hibernate.property
   *           type = "timestamp"
   * @hibernate.column
   *           name = "CREATE_TIMESTAMP"
   * @return the createTimestamp.
   */
  java.util.Date getCreateTimestamp();

  /**
   * Sets the createTimestamp.
   *
   * @param createTimestamp
   *          the createTimestamp to set.
   */
  void setCreateTimestamp(java.util.Date createTimestamp);



  /**
   * Constant value for lastUpdateTimestamp.
   */
  String LAST_UPDATE_TIMESTAMP = "lastUpdateTimestamp";

  /**
   * Gets the lastUpdateTimestamp.
   *
   * @hibernate.property
   *           type = "timestamp"
   * @hibernate.column
   *           name = "LAST_UPDATE_TIMESTAMP"
   * @return the lastUpdateTimestamp.
   */
  java.util.Date getLastUpdateTimestamp();

  /**
   * Sets the lastUpdateTimestamp.
   *
   * @param lastUpdateTimestamp
   *          the lastUpdateTimestamp to set.
   */
  void setLastUpdateTimestamp(java.util.Date lastUpdateTimestamp);




}
