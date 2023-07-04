import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
export default class LoginPage {
    // [x: string]: any;
    private page: Page;
    // static buffer: void;
    constructor(page: Page) {
        this.page = page;
    }
    private loginPageElements = {
        configurationText: "//h5[text()='Configurations']",
        triviaSestion: '//p[text()="Trivia"]',
        plusbutton: "(//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')])[1]",
        inputConfigrationsName: "//input[@type='string']",
        logoutBtn: "//p[text()='Logout']",
        loginBtn: "button[type='button']",
        signInPageTitleText: "//p[text()='Sign in and start managing your Games!']",
        usernameInputField: "input[type='text']",
        passwordInputField: "input[type='password']",
        loginButton: `button:has-text("Login")`,
        invalidCredantialsAlertText: "text=Invalid credentials",
        okBtn: "text=Ok",
        usernameFieldRequirMassage: `//p[text()='"username" is not allowed to be empty']`,
        loginPageLogo: "//h1/preceding::div[@class='MuiBox-root css-uycfjs']",
        signinText: "//h1[text()='Sign in']",
        idLabel: "//label[text()='Id']",
        secretLabel: "//label[text()='Secret']",
        eyeBtn: "//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]"



    }

    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}"`)
        }
    }
    async clickLogoutBtn() {
        const ele = await this.page.locator(this.loginPageElements.logoutBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Home | Menu Bar | Logout Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickEyeBtn() {
        const ele = await this.page.locator(this.loginPageElements.eyeBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Home | Login Page | Eye Button Is Not Visble | Could not find locator:"${error}"`)
        }
    }

    async verifySigninTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.signinText)
        try {
            await expect(ele).toContainText("Sign in")
        } catch (error) {
            throw new Error(`Home | Login Page | Sign In Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifySecretLabelIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.secretLabel)
        try {
            await expect(ele).toContainText("Secret")
        } catch (error) {
            throw new Error(`Home | Login Page | Secret Text Label Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyIdLabelIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.idLabel)
        try {
            await expect(ele).toContainText("Id")
        } catch (error) {
            throw new Error(`Home | Login Page | Id Label Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyCueLogoIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.loginPageLogo)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home | Login Page | Login Page Logo Is Not visible | Could not find locator:"${error}"`)
        }
    }

    async clickLoginBtn() {
        const ele = await this.page.locator(this.loginPageElements.loginButton)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            throw new Error(`Home | Menu Bar | Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async verifyLogoutText() {
        const ele = await this.page.locator(this.loginPageElements.logoutBtn)
        try {
            await expect.soft(ele).toContainText("Logout")
        } catch (error) {
            throw new Error(`Home | Menu Bar | Logout Button Text Is Not Match | Could not find locator:"${error}"`)
        }
    }

    async inputUserName(username: string) {
        const ele = this.page.locator(this.loginPageElements.usernameInputField)
        try {
            await ele.fill(username)
        } catch (error) {
            throw new Error(`Home | Login Page | UserName Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async inputPassword(password: string) {
        const ele = this.page.locator(this.loginPageElements.passwordInputField)
        try {
            await ele.fill(password)
        } catch (error) {
            throw new Error(`Home | Login Page | Password Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async inputSecret() {
        const ele = this.page.locator("//input[@type='password']")
        await ele.fill("Demo Data")
    }

    async shouldBeshowInvalidCredentials() {
        const ele = this.page.locator(this.loginPageElements.invalidCredantialsAlertText)
        try {
            await expect.soft(ele).toContainText("Invalid credentials")
        } catch (error) {
            throw new Error(`Home | Login Page | Invalid credentials Text Is Not Match | Could not find locator:"${error}"`)
        }

    }
    async clickInvalidCredantialsWindowOkBtn() {
        const ele = this.page.locator(this.loginPageElements.okBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Home | Login Page | Ok button is not visibl | Could not find locator:"${error}"`)
        }
    }

    async verifySigninPageTitleTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.signInPageTitleText)
        try {
            await expect.soft(ele).toContainText("Sign in and start managing your Games!")
        } catch (error) {
            throw new Error(`Home | Login Page | Sign in and start managing your Games Title Text Is Not Match | Could not find locator:"${error}"`)
        }
    }

    async shouldShowUserNameIsNotEmpty() {
        const ele = await this.page.locator(this.loginPageElements.usernameFieldRequirMassage)
        try {
            await expect.soft(ele).toContainText(`"username" is not allowed to be empty`)
        } catch (error) {
            throw new Error(`Home | Login Page | Username field require massage is not found | Could not find locator:"${error}"`)
        }
    }


    async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }
    async loginNegative(invalidusername: string, invalidpassword: string) {
        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickLoginBtn();
    }
    async enterEmail(emailaddress: string) {
        await this.page.locator("input[type='text']")
            .type(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("input[type='password']")
            .type(password);
    }




}