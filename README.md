# playwright-test-automation-framework

## To install playwright dependencies

npm init playwright@latest

npx playwright install

## To install Allure command line tool

npm install -g allure-commandline

## To install axios

npm install axios

## Framework Details

The Playwright test automation framework is used for testing en to end functional test scenarios across multiple endpoints( Chrome, Firefox, Safari and Edge and Mobile Viewport). All tests are kept inside /tests/ folder. All these tests are driven by data kept inside /data folder. The automation tests follow POM (Page Object Model) to perform functions across different pages. (Aka consider each web page of an application as a class file kept inside /pages folder.)

i. Common: common folder contains modules for common features across pages, tests, etc. Ex: verify toast message, verify the popup message, login and logout function, Pagination which required in scripting

ii.	Constant: Framework/Application related constants are stored in the form of json and js in constant folder. Ex: urls, page headers, breadcrumbs text, timeouts values, etc.

iii. Config: config folder contains test runner config files(json files) to execute tests across different portals and platforms.
1.	Playwright.config.js (Default)- When no specific config file is passed in execution command then it will be used by default.
2.	It has all the information required for execution initial setup for ex: browser name, timeout, retries, viewport, project name, report, screenshot etc.
3.	To meet application requirements, browser and mobile specific config files are available at /config/

iv.	Node-module: Contains all the dependencies required for scripting, executing, and creating the report. These modules can be generate after entering installation commands( See installation section above)

v. Page: The pages folder contains multiple page object files (each page of an application as a class file). These page files can be distributed as features. 

vi.	Utilities: Utils folder contains multiple utility methods for date, string, etc.

vii. Test Result: Contains all the execution results and helps in generation of html and allure report. Note: Generated only after test execution.

viii. Allure-Report: This folder contains all the execution results, screenshot, video to produce allure report.

ix. Package.json file: This file contains all the dependencies in. Json format. Also, this file contains multiple custom execution commands to execute test cases across different portals and platforms. Details for custom execution commands are available futher.

x. Test: Under this folder test cases are being stored. 

## Script Explanation

•	All test files are in the test directory
•	Created tests/Authentication_Tests.spec.js to define test
•	Used expect library for test assertions. It extends it with the Playwright-specific matchers to achieve greater testing ergonomics.
•	Argument {page} that the test above has access to:

We call these arguments fixtures. Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test.
Here is a list of the pre-defined fixtures that are used most of the time in tests:

| Fixture          | Type             | Description                                                                            |
| ---------------- | -----------------| -------------------------------------------------------------------------              |
| page             | Page             | Isolated page for this test run.                                                       |
| context          | BrowserContext   | Isolated context for this test run. The page fixture belongs to this context as well.  |

•	Used test.beforeAll and test.afterAll hooks to set up and tear down resources shared between tests. And used test.beforeEach and test.afterEach hooks to set up and tear down resources for each test individually.
•	Test case starts from from test.describe() block which contains all the hooks mentioned in the above point and test() block contains the actual test code
•	Used test.steps() contains the actual test steps implemented in test.

## Test Execution

Test execution is performed by hitting customs test execution commands defined in package.json file in Terminal.

## To Execute a single test case on firefox

npx playwright test --browser=firefox .\tests\test-login.spec.js

## To Execute a single test on all browsers i.e., (Trigger execution on all 3 browsers using 3 workers)

npx playwright test --browser=all .\tests\test-login.spec.js

## To Execute all test cases across all browsers( Chrome, Safari, Firefox )

npx playwright test --browser=all

##	To Execute test cases parallelly using workers support of 3

npx playwright test –workers=3 

##	To Execute test case with retry count 3

npx playwright test –retry=3 

##	To execute all tests in framework
npm run test 

##	To execute tests across multiple browsers (Chrome, Safari, Firefox, Edge)

npm run browser_test
 
##	To execute tests across Chrome browser

npm run chrome_test 

##	To execute tests across Safari browser

npm run safari_test 

##	To execute tests across Firefox browser

npm run firefox_test 

##	To execute tests across Edge browser

npm run edge_test

## To execute tests across multiple mobile viewports (iPad 11 Pro, iPhone 11, Galaxy S10)

npm run mobile_test

##	To execute tests across Galaxy S10 mobile viewports

npm run galaxys10_test 

##	To execute tests across iPhone mobile viewports

npm run iphone11_test 

##	To execute tests across iPad 11 Pro mobile viewports

npm run ipadpro11_test 

##	Test Reporting

The test case execution reporting is taken care two different kind of reports -

1. HTML report:
HTML report is generated in html-report folder in html file format known as index.html

2. Allure report: 
Though, html report provides detailed view of test execution, but does not provide any graphical representation. To get a better graphical representation of test execution report, allure report can be generated with below command or by running bat file - generate-report.bat

## To Generate Allure report
allure serve

### Locators naming conventions

| Web Element Type | Prefix | Examples             |
| ---------------- | ------ | -------------------- |
| Text             | txt    | txtEmail,txtPassword |
| Link Text        | ltxt   | ltxtForgotPassword   |
| Button           | btn    | btnLogin             |
| Dropdown         | dd     | ddCountry , ddYear   |
| Select dropdown  | sdd    | sddMonth , sddYear   |
| CheckBox         | cb     | cbGender             |
| Header           | hdr    | hdrPrint, hdrUser    |
| Table            | tbl    | tblBooks, tblProducts|
| Label            | lbl    | lblUserName          |
| Image            | img    | imgProfile, imgCart  |
| Input            | input  | inputUsername        |
