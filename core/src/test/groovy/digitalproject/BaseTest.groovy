package digitalproject

import org.apache.commons.httpclient.HttpClient
import org.apache.commons.httpclient.HttpMethod
import org.apache.commons.httpclient.methods.GetMethod
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.jspresso.framework.util.exception.NestedRuntimeException



class BaseTest extends JspressoSpecification {

  final static int PORT = 9999

  @Override
  protected String getApplicationContextKey() {
    return 'digitalproject-backend-context'
  }

  @Override
  protected String getBeanFactorySelector() {
    return 'digitalproject/beanRefFactory.xml'
  }

  protected Object setup() {
    //getController().applicationSession.locale = Locale.ENGLISH
    // return super.setup() implicit by spock
  }
  protected Object cleanup() {
    getController().cleanupRequestResources()
    stopServer()
  }

  private  Server server
  protected void startServer (List<Class> clazz) {
    if(!server) {
      int port = PORT
      server = new Server(port)

      ServletContextHandler context = new ServletContextHandler(ServletContextHandler.NO_SESSIONS)
      context.setContextPath("/digitalproject-webapp")
      context.setInitParameter("resteasy.scanned.resources", clazz.findResults { Class it -> it.name }.join(','))
      context.setInitParameter("resteasy.servlet.mapping.prefix", "/rest")
      context.setInitParameter("resteasy.media.type.mappings", "html : text/html, json : application/json, xml : application/xml")
      context.setInitParameter("resteasy.language.mappings", " en : en-US, es : es, fr : fr")
      server.setHandler(context)

      ServletHolder holder = new ServletHolder(new org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher())

      context.addServlet(holder, "/rest/*")
      context.addEventListener(new org.jboss.resteasy.plugins.server.servlet.ResteasyBootstrap())

      try {
        log.debug("#### start server on port=$port")
        long time = System.currentTimeMillis ()
        server.start()
        log.debug("server start = " + (System.currentTimeMillis () - time) + " ms")
      } catch (Exception ex) {
        throw new NestedRuntimeException(ex)
      }
    }
  }

  protected void stopServer () {
    if(server) {
      try {
        server.stop();
      } catch (Exception ex) {
        ex.printStackTrace();
        throw new NestedRuntimeException(ex)
      }
    }
  }

  HttpClient client = new HttpClient()
  protected String postRest (String uri, List<Class> clazz) {
    return postRest(uri, clazz, 200).responseBodyAsString
  }
  
  protected Map postRest (String uri, List<Class> clazz, int expectedStatusCode) {
    startServer(clazz ?: [])

    // Send the message
    log.debug("interrogate server with uri=$uri")
    log.debug("interrogate server with complete uri=http://localhost:${PORT}/stcv-webapp/rest${(uri[0] != '/' ? '/' : '') + uri}")

    HttpMethod method = new GetMethod("http://localhost:${PORT}/stcv-webapp/rest${(uri[0] != '/' ? '/' : '') + uri}")
    int statusCode = client.executeMethod(method)
    Map results = [:]
    results.responseBodyAsString = method.responseBodyAsString
    results.responseHeaders = method.responseHeaders
    results.responseFooters = method.responseFooters
    //log.debug results.inspect()
    method.releaseConnection()
    //assert 0 == expectedStatusCode || statusCode == expectedStatusCode
    return results
  }
}
