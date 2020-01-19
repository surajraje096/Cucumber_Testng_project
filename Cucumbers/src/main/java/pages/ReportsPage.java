package pages;

import java.util.List;

import org.junit.Rule;
import org.junit.rules.ErrorCollector;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;
import junit.framework.Assert;

public class ReportsPage extends TestBase {

	@Rule
	public ErrorCollector collector = new ErrorCollector();

	public ReportsPage() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//h2[contains(text(),'Cash Reports')]")
	WebElement title;

	public void verifyTitle() {
		Assert.assertTrue("Title is displayed", title.isDisplayed());
	}

	@FindBy(tagName = "h1")
	List<WebElement> reports;

	@FindBy(tagName = "h2")
	List<WebElement> allheadings;

	@FindBy(xpath = "//*[@class='grey-arrow-list']")
	List<WebElement> elements;

	@FindBy(xpath = "//a[@class='or rd']")
	WebElement moreTrctnButton;

	public void verifyAllReportsLinks() {
		try {
			for (int i = 0; i < reports.size(); i++) {

				if (reports.get(i).getAttribute("disabled") != "disabled")
					System.out.println(reports.get(i).getText() + " is Enabled");
				else
					System.out.println(reports.get(i).getText() + "is not enabled");
			}
		} catch (Throwable t) {
			collector.addError(t);
		}
	}

	public void verifyAllHeadings() {
		try {
			for (int i = 0; i < allheadings.size(); i++) {
				allheadings.get(i).isDisplayed();
				System.out.println(allheadings.get(i).getText() + " heading is displayed");

			}
		} catch (Throwable e) {
			collector.addError(e);
			System.out.println("headings are not displayed");
		}
	}

	public void verifyAllElements() {
		try {
			for (int i = 0; i < elements.size(); i++) {
				elements.get(i).isEnabled();
				System.out.println(elements.get(i).getText() + " is Enabled");

			}
		} catch (Throwable e) {
			collector.addError(e);
			System.out.println("Elements are not Enabled");
		}
	}

}
