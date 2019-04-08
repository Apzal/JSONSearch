package step_definitions;

import Utilities.Operations;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before
    public void BeforeScenario(Scenario scenario){
        Operations op=new Operations();
        Operations.baseUrl=op.getProjectConfig("BaseUrl");
        Operations.responseFileName=op.getProjectConfig("ResponseFileName");
        System.out.println("Executing Scenario:"+scenario.getName());

    }

    @After
    public void AfterScenario(Scenario scenario){
        System.out.println("Execution Status:"+scenario.getStatus());
    }

}
