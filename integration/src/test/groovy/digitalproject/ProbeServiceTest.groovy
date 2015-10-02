package digitalproject

import groovy.util.logging.Slf4j
import org.junit.Test

import digitalproject.webservices.ProbeService
import digitalproject.model.Project

@Slf4j
class ProbeServiceTest extends BaseTest {

    @Test
    void test_alive() {
        
        //def bc = getController()
        //Project project = bc.entityFactory.createEntityInstance(Project)
        //log.error "Project created"
        
        eachIteration('alive') { tmar ->
            String url = tmar.url
            log.debug "call url ${url}"
            tmar.result = postRest(url, [ProbeService])
        }
    }
    
}