package digitalproject.startup.remote;

import org.jspresso.framework.application.startup.remote.RemoteStartup;

/**
 * Remote application startup class.
 */
public class RemoteApplicationStartup extends RemoteStartup {

  /**
   * Returns the "digitalproject-remote-context" value.
   * <p>
   * {@inheritDoc}
   */
  @Override
  protected String getApplicationContextKey() {
    return "digitalproject-remote-context";
  }

  /**
   * Overrides default bean ref locator.
   * <p>
   * {@inheritDoc}
   */
  @Override
  protected String getBeanFactorySelector() {
    return "digitalproject/beanRefFactory.xml";
  }
}
