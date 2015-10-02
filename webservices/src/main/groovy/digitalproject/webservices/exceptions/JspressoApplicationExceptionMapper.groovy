package digitalproject.webservices.exceptions

import java.util.regex.Matcher

import javax.ws.rs.core.Response
import javax.ws.rs.core.Response.Status
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider

import org.jboss.resteasy.spi.ApplicationException
import org.jspresso.framework.model.component.ComponentException

import groovy.transform.TypeChecked
import groovy.transform.TypeCheckingMode
import groovy.util.logging.Slf4j


@Provider
@Slf4j
@TypeChecked
class JspressoApplicationExceptionMapper implements ExceptionMapper<Exception> {
	
	Response toResponse(ApplicationException exception) {
		return toResponse(exception.cause)
	}
	
	Response toResponse(Error e) {
		log.debug('', e)
		return toResponseBadRequest (e.message)
	}
	
	Response toResponse(ComponentException e) {
		return toResponse(e.cause)
	}
	
	@Override
	Response toResponse(Exception e) {
		return toResponseThrowable (e)
	}
	
	Response toResponse(Throwable t) {
		return toResponseThrowable (t)
	}
	
	@TypeChecked(TypeCheckingMode.SKIP)
	private Response toResponseThrowable(Throwable t) {
		log.debug('', t)
		Matcher matcher = ( t.message =~ /\[(.+)\] value.*/ )
		if (matcher.matches()) {
			String field = matcher[0][1]
			return toResponseBadRequest("bad $field")
		}
		log.debug('', t)
		return toResponseBadRequest(t.message)
	}
	
	Response toResponseBadRequest(String s) {
		return Response.status(Status.BAD_REQUEST).entity(s).build()
	}
}
