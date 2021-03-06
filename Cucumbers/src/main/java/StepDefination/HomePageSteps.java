package StepDefination;


import org.junit.Assert;



import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;

public class HomePageSteps {

	LoginPage login;
	HomePage hmpage;
	
	@When("^user is on new Homepage$")
	public void user_is_on_new_Homepage() throws Throwable {
	    login=new LoginPage();
	    hmpage=new HomePage();
	    Thread.sleep(5000);
	   boolean b= hmpage.verifyLogo();
	   System.out.println(b);
	}
	@Then("^user clicks on menu button")
	public void user_clicks_on_menu_button() throws InterruptedException
	{
		Thread.sleep(5000);
		hmpage.clickOnMenu();
	}
	@Then("^user clicks on switch to old site button$")
	public void user_clicks_on_switch_to_old_site_button() throws Throwable {
		hmpage.clickOnSwitchToOldSite();
	}
	@Then("^user is on homepage")
	public void user_is_on_homepage()
	{
		System.out.println("homepage is displayed");
		String title=hmpage.verifyTitle();
		Assert.assertEquals("sharekhan.com, your guide to financial jungle", title);
		
	}
	@Then("^user verifies the user profile")
	public void user_verifies_the_user_profile()
	{
		boolean user=hmpage.verifyUser();
	
	}
	
	@Then("^user checks all panel headings of Home Tab$")
	public void user_checks_all_panel_headings_of_home_tab() throws Throwable {
		hmpage.verifyAllHeadings();
	}
	@Then("^user checks all panel elements of Home Tab$")
	public void user_checks_all_panel_elements_of_home_tab()throws Throwable {
		hmpage.verifyAllElements();
	}
}
