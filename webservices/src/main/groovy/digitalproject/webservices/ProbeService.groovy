package digitalproject.webservices;

import groovy.transform.TypeChecked

import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.PathParam
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import javax.ws.rs.core.Response.Status
import javax.ws.rs.ext.Provider

import org.jspresso.framework.application.backend.BackendControllerHolder
import org.jspresso.framework.application.backend.persistence.hibernate.HibernateBackendController
import groovy.util.logging.Slf4j

/**
 * An application health probe.
 */
@Provider
@Path("/probe")
@TypeChecked
@Slf4j
public class ProbeService extends AbstractService {

	/**
	 * 
	 * @return all env variables
	 */
	@GET
	@Path("/env/{password}")
	@Produces([MediaType.TEXT_PLAIN])
	public String getEnv(@PathParam("password") String password) {
		StringBuilder s = new StringBuilder()
		if (password == 'EZGEZ5GFQsdf$-RR') {
			System.getProperties().sort { it.key } .each { k,v ->
				s << "$k:$v\n"
			}
		}
		return s.toString()
	}
	/**
	 * Tests that the application backend controller can be instanciated and
	 * that a connection can be taken from the datasource backing up the
	 * Hibernate session.
	 * 
	 * @return &quot;SUCCESS&quot; if the test is successful.
	 */
	@GET
	@Path("/alive")
	@Produces([MediaType.TEXT_PLAIN])
	public Response probeHealth() {
        Throwable lastThrowable
    	doInTransactionWithoutResult {
        for (String query : ['select 1', 'select 1 from dual', 'select 1 from INFORMATION_SCHEMA.SYSTEM_USERS']) {
    		try {
    				HibernateBackendController hbc = BackendControllerHolder.currentBackendController as HibernateBackendController
    				assert hbc.hibernateSession.createSQLQuery(query).uniqueResult() == 1
                    lastThrowable = null
    		}
    		catch (Throwable t) {
    			lastThrowable = t
    		}
        }
        }
        if (lastThrowable) {
    		return Response.status(Status.SERVICE_UNAVAILABLE).entity(lastThrowable.message).build()
        }

        return Response.ok().entity('SUCCESS').build()
	}
}
