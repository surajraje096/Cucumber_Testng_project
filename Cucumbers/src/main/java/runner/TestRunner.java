package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "D:\\SpringBoot API Projects\\Cucumbers\\src\\main\\java\\Features\\AllFunctions.feature",

		glue = {"StepDefination2"},
		
		plugin= {"html:target/cucumberallfunction-html-reort"},

		monochrome =true,

		strict = true,

		dryRun = true)

public class TestRunner {

}
 