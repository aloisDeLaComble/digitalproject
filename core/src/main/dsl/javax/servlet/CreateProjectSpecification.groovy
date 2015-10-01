package javax.servlet

import digitalproject.BaseTest
import digitalproject.model.Project
import digitalproject.model.Student
import org.jspresso.contrib.tmar.core.Tmar4JUnit
import org.jspresso.framework.model.entity.IEntityFactory
import org.junit.Before;
import org.junit.Test;
//import digitalproject.BaseTest

class CreateProjectSpecification extends BaseTest {

	@Test
	void createProjectTest() {
		eachIteration('test') { tmar ->
			IEntityFactory entityFactory = getBackendController().getEntityFactory()
			Project project = entityFactory.createEntityInstance(Project.class)
			
			//Student student1 = entityFactory.createEntityInstance(student.class)
			//student1.firstName = "Neil"
			//student1.lastName = "Amstrong"
			
			//Set<Student> students = new HashSet<Student>(student1)
			//project.setStudents(students)
			
			tmar.student1Firstname = "Neil"
            }
	  }

}
