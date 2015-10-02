package digitalproject.webservices;

import groovy.transform.TypeChecked;
import groovy.util.logging.Slf4j;

import org.jspresso.framework.application.backend.BackendControllerHolder
import org.jspresso.framework.application.backend.persistence.hibernate.HibernateBackendController
import org.jspresso.framework.application.backend.session.EMergeMode
import org.jspresso.framework.application.startup.AbstractBackendStartup
import org.jspresso.framework.model.entity.IEntity
import org.springframework.transaction.TransactionStatus
import org.springframework.transaction.support.TransactionCallback
import org.springframework.transaction.support.TransactionCallbackWithoutResult

/**
 * Abstract base service implementation.
 */
@Slf4j
@TypeChecked
public abstract class AbstractService extends AbstractBackendStartup {

	/**
	 * Constructs a new <code>AbstractService</code> instance.
	 * 
	 */
	protected AbstractService() {
		start();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	protected String getApplicationContextKey() {
		return "digitalproject-backend-context";
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
	
	protected void doInTransactionWithoutResult (Closure closure) {
		final HibernateBackendController hbc = (HibernateBackendController) getBackendController()
		assert BackendControllerHolder.currentBackendController
		//BackendControllerHolder.threadBackendController = hbc
		try {
			hbc.getTransactionTemplate().execute(new TransactionCallbackWithoutResult() {
				@Override
				protected void doInTransactionWithoutResult(TransactionStatus status) {
					closure.call()
				}
			});
		}
		catch (Exception e) {
			//log.error('', e) in exception mapper
			throw e
		}
		finally {
			hbc.cleanupRequestResources();
			BackendControllerHolder.setThreadBackendController(null);
		}
	}
	
	protected def doInTransactionWithResult (Closure closure) {
		final HibernateBackendController hbc = (HibernateBackendController) getBackendController()
		assert BackendControllerHolder.currentBackendController
		try {
			def result = hbc.getTransactionTemplate().execute(new TransactionCallback() {
				@Override
				public def doInTransaction(TransactionStatus status) {
					return closure.call()
				}
			});
			if (result && result instanceof IEntity) {
				result = hbc.merge((IEntity)result, EMergeMode.MERGE_KEEP)
			}
		}
		catch (Exception e) {
			//log.error('', e) in exception mapper
			throw e
		}
		finally {
			hbc.cleanupRequestResources();
			BackendControllerHolder.setThreadBackendController(null);
		}
	}
}
