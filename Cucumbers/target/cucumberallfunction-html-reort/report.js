$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SpringBoot API Projects/Cucumbers/src/main/java/Features/AllFunctions.feature");
formatter.feature({
  "line": 1,
  "name": "sharekhan website test",
  "description": "",
  "id": "sharekhan-website-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "LoginPage of ShareKhan",
  "description": "",
  "id": "sharekhan-website-test;loginpage-of-sharekhan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user validates sharekhan logo",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters username",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 8932626879,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 61204906,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_validates_sharekhan_logo()"
});
formatter.result({
  "duration": 177295405,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_username()"
});
formatter.result({
  "duration": 5279596654,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_on_next_button()"
});
formatter.result({
  "duration": 108313235,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_password()"
});
formatter.result({
  "duration": 695329080,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 156393151,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Homepage verification",
  "description": "",
  "id": "sharekhan-website-test;homepage-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user is on new Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clicks on menu button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on switch to old site button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user verifies the user profile",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user checks all panel headings of Home Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user checks all panel elements of Home Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_new_Homepage()"
});
formatter.result({
  "duration": 3014138200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_menu_button()"
});
formatter.result({
  "duration": 1150145111,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"hamburgerMenuIcon\" analytics-click\u003d\"open trading hamburger menu\" ng-click\u003d\"body.slideInMenu \u003d true;body.openDropDown1 \u003d false;$event.stopPropagation();\" style\u003d\"display:block\"\u003e...\u003c/a\u003e is not clickable at point (1341, 45). Other element would receive the click: \u003cdiv class\u003d\"loading-dialog\" ng-show\u003d\"showPageLoading\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-987SG1D\u0027, ip: \u0027192.168.19.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: acd4ec84955689647c72829f83a29e32\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pages.HomePage.clickOnMenu(HomePage.java:80)\r\n\tat StepDefination2.HomePageSteps.user_clicks_on_menu_button(HomePageSteps.java:28)\r\n\tat ✽.Then user clicks on menu button(D:/SpringBoot API Projects/Cucumbers/src/main/java/Features/AllFunctions.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_switch_to_old_site_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_verifies_the_user_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_checks_all_panel_headings_of_home_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_checks_all_panel_elements_of_home_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Validating IPOBonds Page",
  "description": "",
  "id": "sharekhan-website-test;validating-ipobonds-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user clicks on IPO tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user is on IPOBonds Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user verifies top side links",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user verifies all main links",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user verifies all bottom links",
  "keyword": "Then "
});
formatter.match({
  "location": "IPOBondsPageSteps.user_clicks_on_IPO_tab()"
});
formatter.result({
  "duration": 8499973772,
  "status": "passed"
});
formatter.match({
  "location": "IPOBondsPageSteps.user_is_on_IPOBonds_Page()"
});
formatter.result({
  "duration": 59443618,
  "status": "passed"
});
formatter.match({
  "location": "IPOBondsPageSteps.user_verifies_top_side_links()"
});
formatter.result({
  "duration": 287690369,
  "status": "passed"
});
formatter.match({
  "location": "IPOBondsPageSteps.user_verifies_all_main_links()"
});
formatter.result({
  "duration": 690718029,
  "status": "passed"
});
formatter.match({
  "location": "IPOBondsPageSteps.user_verifies_all_bottom_links()"
});
formatter.result({
  "duration": 208898240,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validating Mutual Funds Page",
  "description": "",
  "id": "sharekhan-website-test;validating-mutual-funds-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user clicks on Mutual Funds tab",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user is on Mutual Funds page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user verifies links of page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user veries elements of page",
  "keyword": "Then "
});
formatter.match({
  "location": "MutualFundsPageSteps.user_clicks_on_Mutual_Funds_tab()"
});
formatter.result({
  "duration": 758858042,
  "status": "passed"
});
formatter.match({
  "location": "MutualFundsPageSteps.user_is_on_Mutual_Funds_page()"
});
formatter.result({
  "duration": 83225855,
  "status": "passed"
});
formatter.match({
  "location": "MutualFundsPageSteps.user_verifies_links_of_page()"
});
formatter.result({
  "duration": 514982068,
  "status": "passed"
});
formatter.match({
  "location": "MutualFundsPageSteps.user_veries_elements_of_page()"
});
formatter.result({
  "duration": 504190828,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Validating Portfolio Page",
  "description": "",
  "id": "sharekhan-website-test;validating-portfolio-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "user clicks on Portfolio tab",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user is on Portfolio page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user verifies my portfolio bar",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user verifies all black buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "PortofoilPageSteps.user_clicks_on_Portfolio_tab()"
});
formatter.result({
  "duration": 8939662909,
  "status": "passed"
});
formatter.match({
  "location": "PortofoilPageSteps.user_is_on_Portfolio_page()"
});
formatter.result({
  "duration": 8723764,
  "status": "passed"
});
formatter.match({
  "location": "PortofoilPageSteps.user_verifies_my_portfolio_bar()"
});
formatter.result({
  "duration": 100939088,
  "status": "passed"
});
formatter.match({
  "location": "PortofoilPageSteps.user_verifies_all_black_buttons()"
});
formatter.result({
  "duration": 732870346,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validating OptionChain Page",
  "description": "",
  "id": "sharekhan-website-test;validating-optionchain-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "user clicks on OptionChain tab",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user is on OptionChain page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user verifies option chain bar",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user verifies all black button",
  "keyword": "Then "
});
formatter.match({
  "location": "OptionChainPageSteps.user_clicks_on_OptionChain_tab()"
});
formatter.result({
  "duration": 8721436513,
  "status": "passed"
});
formatter.match({
  "location": "OptionChainPageSteps.user_is_on_OptionChain_page()"
});
formatter.result({
  "duration": 13891312,
  "status": "passed"
});
formatter.match({
  "location": "OptionChainPageSteps.user_verifies_option_chain_bar()"
});
formatter.result({
  "duration": 1545924633,
  "status": "passed"
});
formatter.match({
  "location": "OptionChainPageSteps.user_verifies_all_black_button()"
});
formatter.result({
  "duration": 480040825,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validating News Page",
  "description": "",
  "id": "sharekhan-website-test;validating-news-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "user click on News tab",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user is on news page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user verifies all links of news page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user verifies all headings of news page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "user verifies all news headings",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsPageSteps.user_click_on_News_tab()"
});
formatter.result({
  "duration": 8691876636,
  "status": "passed"
});
formatter.match({
  "location": "NewsPageSteps.user_is_on_news_page()"
});
formatter.result({
  "duration": 123546182,
  "status": "passed"
});
formatter.match({
  "location": "NewsPageSteps.user_verifies_all_links_of_news_page()"
});
formatter.result({
  "duration": 1168256330,
  "status": "passed"
});
formatter.match({
  "location": "NewsPageSteps.user_verifies_all_headings_of_new_page()"
});
formatter.result({
  "duration": 857823734,
  "status": "passed"
});
formatter.match({
  "location": "NewsPageSteps.user_verifies_all_news_headings()"
});
formatter.result({
  "duration": 1685982678,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Validating Research Page",
  "description": "",
  "id": "sharekhan-website-test;validating-research-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "user click on Research tab",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user is on Research page",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user verifies all links of research page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user verifies all research headings",
  "keyword": "Then "
});
formatter.match({
  "location": "ResearchPageSteps.user_click_on_Research_tab()"
});
formatter.result({
  "duration": 8836016604,
  "status": "passed"
});
formatter.match({
  "location": "ResearchPageSteps.user_is_on_Research_page()"
});
formatter.result({
  "duration": 62681104,
  "status": "passed"
});
formatter.match({
  "location": "ResearchPageSteps.user_verifies_all_links_of_research_page()"
});
formatter.result({
  "duration": 462467286,
  "status": "passed"
});
formatter.match({
  "location": "ResearchPageSteps.user_verifies_all_research_headings()"
});
formatter.result({
  "duration": 109474693,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validating CS Page",
  "description": "",
  "id": "sharekhan-website-test;validating-cs-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "user click on CS tab",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user is on CS page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user verifies all label of CS page",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user verifies all content of CS page",
  "keyword": "Then "
});
formatter.match({
  "location": "CSPageSteps.user_click_on_CS_tab()"
});
formatter.result({
  "duration": 9348528649,
  "status": "passed"
});
formatter.match({
  "location": "CSPageSteps.user_is_on_CS_page()"
});
formatter.result({
  "duration": 60971132,
  "status": "passed"
});
formatter.match({
  "location": "CSPageSteps.user_verifies_all_label_of_CS_page()"
});
formatter.result({
  "duration": 363476506,
  "status": "passed"
});
formatter.match({
  "location": "CSPageSteps.user_verifies_all_content_of_CS_page()"
});
formatter.result({
  "duration": 1256063586,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Loging out from website",
  "description": "",
  "id": "sharekhan-website-test;loging-out-from-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "user clicks on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogOutPageStepDefinition.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 2753403,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefination2.LogOutPageStepDefinition.user_clicks_on_logout_button(LogOutPageStepDefinition.java:18)\r\n\tat ✽.Then user clicks on logout button(D:/SpringBoot API Projects/Cucumbers/src/main/java/Features/AllFunctions.feature:74)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogOutPageStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});