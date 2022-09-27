const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("../constants/Timeouts");
const { PAGE_TITLE } = require("../constants/PageTitles");
const { URL } = require("../constants/URLs");

const AuthenticationPage = require("../pages/Login&Registration/AuthenticationPage");

const {
    launchApplication,
    getPageTitle
} = require("../common/app-modules");

const { authenticationTest: TEST_DATA} = require("../data/test_data.json");
const { Test: TEST_USER } = require("../data/test_creds.json");

let authenticationPage

test.describe("Authentication Tests", () => {

    test.beforeAll(async () => {
        console.log(`Test Suite execution started`);
    });

    test.beforeEach(async ({ page }, testInfo) => {
        testInfo.setTimeout(TEST_DATA.timeout);
        await launchApplication(page, URL.SIGN_IN_PAGE_URL);

        expect(await getPageTitle(page)).toBe(PAGE_TITLE.AUTHENTICATION);
    });

    test.afterEach(async ({ page }) => {
    });

    test.afterAll(async () => {
        console.log(`Test Suite execution ended`);
    });

    test("Verify Authentication Failed", async ({ page, isMobile }) => {

        await test.step("Enter incorrect creds", async () => {

            authenticationPage = new AuthenticationPage(page);

            await authenticationPage.enterUserName(TEST_USER.USERNAME);
            await authenticationPage.enterPassword(TEST_USER.PASSWORD);

            await authenticationPage.clickSignIn();
        });

        await test.step("Verify Error Message and User is on Authentication Page", async () => {

            expect(await getPageTitle(page)).toBe(PAGE_TITLE.AUTHENTICATION);
            expect(await authenticationPage.getErrorText()).toBe(TEST_DATA.errorMessage);
        });

    });
});