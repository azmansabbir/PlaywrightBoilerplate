import LoginPage from "@pages/Login.page";
import { test as baseTest } from "@playwright/test";
import functions from "@testData/helper";
import testData from "@testData/testData"
import postUpPage from "@pages/postUp.page";
import postUpMobilePage from "@pages/postUpMobile.page";

const test = baseTest.extend<{
    loginPage: LoginPage;
    functions: functions;
    testData: testData;
    postUpPage: postUpPage;
    postUpMobilePage: postUpMobilePage;


}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },


    postUpPage: async ({ page }, use) => {
        await use(new postUpPage(page));
    },

    postUpMobilePage: async ({ page }, use) => {
        await use(new postUpMobilePage((page)))
    }


})
export default test;
export const expect = test.expect;

