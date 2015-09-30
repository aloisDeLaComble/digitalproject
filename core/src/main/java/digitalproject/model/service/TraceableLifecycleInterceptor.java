package digitalproject.model.service;
 



	import java.util.Date;

	import org.jspresso.framework.model.component.service.EmptyLifecycleInterceptor;
	import org.jspresso.framework.model.entity.IEntityFactory;
	import org.jspresso.framework.model.entity.IEntityLifecycleHandler;
	import org.jspresso.framework.security.UserPrincipal;
	import digitalproject.model.Traceable;

	/**
	 * Default lifecycle service for tracing.
	 * 
	 * @author Vincent Vandenschrick
	 */
	public class TraceableLifecycleInterceptor extends
	    EmptyLifecycleInterceptor<Traceable> {

	  /**
	   * Sets the create timestamp.
	   * <p>
	   * {@inheritDoc}
	   */
	  @Override
	  public boolean onPersist(Traceable traceable, IEntityFactory entityFactory,
	      UserPrincipal principal, IEntityLifecycleHandler entityLifecycleHandler) {
	    traceable.setCreateTimestamp(new Date());
	    traceable.setCreatedBy(principal.getName());
	    return true;
	  }

	  /**
	   * Sets the last update timestamp.
	   * <p>
	   * {@inheritDoc}
	   */
	  @Override
	  public boolean onUpdate(Traceable traceable, IEntityFactory entityFactory,
	      UserPrincipal principal, IEntityLifecycleHandler entityLifecycleHandler) {
	    traceable.setLastUpdateTimestamp(new Date());
	    traceable.setLastUpdatedBy(principal.getName());
	    return true;
	  }
	}