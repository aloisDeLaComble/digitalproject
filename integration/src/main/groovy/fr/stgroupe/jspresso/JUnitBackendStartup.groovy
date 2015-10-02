package fr.stgroupe.jspresso
import org.jspresso.framework.application.backend.IBackendController;
import org.jspresso.framework.application.startup.AbstractBackendStartup;
import org.springframework.beans.factory.BeanFactory;
 
/**
 * Implementation of the BackendStartup that delegates the initialization
 * parameter to a GefcoSpecification. It also turns public some methods the
 * GefcoSpecification will need to access.
 */
class JUnitBackendStartup extends AbstractBackendStartup {
 
  private AbstractJUnitJspressoBackendStartup spec;
 
  public JUnitBackendStartup(AbstractJUnitJspressoBackendStartup spec) {
    this.spec = spec;
  }
 
  @Override
  protected String getApplicationContextKey() {
    return spec.getApplicationContextKey();
  }
 
  @Override
  protected String getBeanFactorySelector() {
    return spec.getBeanFactorySelector();
  }
 
  /**
   * Public version of {@link AbstractBackendStartup#getApplicationContext()}
   */
  @Override
  public BeanFactory getApplicationContext() {
    return super.getApplicationContext();
  }
 
  /**
   * Public version of {@link AbstractBackendStartup#getBackendController()}
   */
  @Override
  public IBackendController getBackendController() {
    return super.getBackendController();
  }
}
