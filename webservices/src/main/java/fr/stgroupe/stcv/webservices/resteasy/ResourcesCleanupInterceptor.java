package fr.stgroupe.stcv.webservices.resteasy;


import java.io.PrintWriter;
import java.io.StringWriter;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import org.jboss.resteasy.annotations.interception.ServerInterceptor;
import org.jboss.resteasy.core.ServerResponse;
import org.jboss.resteasy.spi.interception.PostProcessInterceptor;
import org.jspresso.framework.application.backend.BackendControllerHolder;
import org.jspresso.framework.application.backend.IBackendController;

@Provider
@ServerInterceptor
public class ResourcesCleanupInterceptor
  implements PostProcessInterceptor, ExceptionMapper<Throwable>
{
  public void postProcess(ServerResponse response)
  {
    cleanupThreadBackendController();
  }

  public Response toResponse(Throwable exception)
  {
    cleanupThreadBackendController();

    StringWriter stack = new StringWriter();
    PrintWriter pw = new PrintWriter(stack);
    exception.printStackTrace(pw);

    return Response.serverError().entity(stack.toString()).type(MediaType.TEXT_PLAIN_TYPE).build();
  }

  private void cleanupThreadBackendController()
  {
    IBackendController bc = BackendControllerHolder.getCurrentBackendController();

    if (bc != null) {
      bc.cleanupRequestResources();
    }
    BackendControllerHolder.setThreadBackendController(null);
  }
}