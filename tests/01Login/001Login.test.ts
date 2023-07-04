import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";
import { readFileSync } from "fs";


test("TLL001-01 | Login | Verify login with valid credentials", async ({ loginPage, page, browser }) => {

        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })

        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        //click Home Avater
        await loginPage.clickHomeAvater()

        await loginPage.verifyLogoutText()
        //click Logout Btn
        await loginPage.clickLogoutBtn()

})
test("TLL001-02 | Login | Verify try to login with invalid credentials", async ({ loginPage, testData, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()

        await loginPage.inputUserName(testData.getInvalidUserNameForLogin())
        await loginPage.inputPassword(testData.getInvalidPasswordForLogin())

        await loginPage.clickLoginBtn()

        await loginPage.shouldBeshowInvalidCredentials()
        await loginPage.clickInvalidCredantialsWindowOkBtn()

})
test("TLL001-03 | Login | Verify login with UserName and Password", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.clickLoginBtn()

        await loginPage.shouldShowUserNameIsNotEmpty()
        await loginPage.clickInvalidCredantialsWindowOkBtn()

})
test("TLL001-04| Login | Verify Cue Logo Is Visible", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.verifyCueLogoIsVisible()
})
test("TLL001-05| Login | Verify Signin Text Is Visible", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.verifySigninTextIsVisible()
})
test("TLL001-06| Login |  Verify Signin Page Title Text IsVisible", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.verifySigninPageTitleTextIsVisible()
})
test("TLL001-07| Login | Verify Id Label IsVisible", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.verifyIdLabelIsVisible()
})
test("TLL001-08| Login | Verify Secret Label Is Visible", async ({ loginPage, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.verifySecretLabelIsVisible()
})
test("TLL001-09| Login | Verify Eye Button Functionality Is Working", async ({ loginPage, testData, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForNavigation()
        await loginPage.inputPassword(await testData.getInvalidPasswordForLogin())
        await loginPage.clickEyeBtn()
})
test("TLL001-10| Login | Validate After Reloading From Login Page All The Element Showing Properly", async ({ loginPage, testData, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.reload();
        await loginPage.inputPassword(await testData.getInvalidPasswordForLogin())
        await loginPage.clickEyeBtn()
})
