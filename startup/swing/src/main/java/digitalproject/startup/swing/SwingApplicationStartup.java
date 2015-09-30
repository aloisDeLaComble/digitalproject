package digitalproject.startup.swing;

import org.jspresso.framework.application.startup.swing.SwingStartup;

/**
 * Swing application startup class.
 */
public class SwingApplicationStartup extends SwingStartup {

  /**
   * Returns the "digitalproject-swing-context" value.
   * <p>
   * {@inheritDoc}
   */
  @Override
  protected String getApplicationContextKey() {
    return "digitalproject-swing-context";
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
