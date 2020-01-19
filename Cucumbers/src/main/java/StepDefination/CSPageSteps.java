package StepDefination;



import base.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CSPage;
import pages.HomePage;

public class CSPageSteps extends TestBase{
	
	HomePage hmpage;
	CSPage cs;
	
	@When("^user click on CS tab$")
	public void user_click_on_CS_tab() throws Throwable {
	 hmpage=new HomePage();
	 cs=hmpage.clickOnCS();
	}

	@Then("^user is on CS page$")
	public void user_is_on_CS_page() throws Throwable {
		cs.validateTitle();
	}

	@Then("^user verifies all label of CS page$")
	public void user_verifies_all_label_of_CS_page() throws Throwable {
	  cs.getAllLabel();
	}

	@Then("^user verifies all content of CS page$")
	public void user_verifies_all_content_of_CS_page() throws Throwable {
	   cs.getAllContent();
	}


}
