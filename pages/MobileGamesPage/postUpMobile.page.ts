import { devices, expect, Page } from "@playwright/test";
import Env from "@utils/environment";
import { readFileSync } from 'fs'
import * as data from "@testData/data.json"
export default class postUpMobilePage {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({ width: 390, height: 844 })
        }
        private postUpMobilePageElements = {
                additionalphoneNumberInputField: `//input[@name="phone"]`,
                additionalEmailInputField: `//input[@name="email"]`,
                emailInputFieldForGoogleLogin: "//input[@placeholder='Enter email']",
                additionalAgeInputField: `//input[@name="age"]`,
                additionalDatePickerInputField: `//input[@aria-label='Choose date']`,
                additionalDateInputField: "(//input[@id='additionalbirthDate'])[2]",
                additionalDateEditBtn: `//button[@aria-label='calendar view is open, go to text input view']`,
                additionalDatePickerOkBtn: "//button[text()='OK']",
                additionalDatePickerLabel: "//label[@for='additionalbirthDate']",
                additionalZipCodeInputField: `//input[@name="zipCode"]`,
                additionalZipCodeInputFieldLabel: "//label[@for='additionalzipCode']",
                additionalSubmitBtn: "//button[@type='submit']",
                customQuestionSectionTitle: "//p[text()='Questionnaire & Opt-Ins']",
                customQuestionInputField: "//input[@placeholder='Give some description here...']",
                submitBtn: "//button[text()='Submit']",
                choiceCheckBox: "//input[@type='checkbox']",
                choiceCheckBoxWhenCustomQuestionInTop: "(//input[@type='checkbox'])[1]",
                homeAvater: "(//button[@value='game']//div)[1]",
                homeText: "//p[text()='HOME']",
                arcadeSectionInMobileScreen: "(//button[@type='button'])[6]",
                prizeDropGameText: "//p[text()='Prize Drop']",
                outSideGameTitleText: "//p[text()='Auto Game']",
                squareImage: "div:nth-child(2) > div > div:nth-child(2) > .MuiBox-root",
                rectangulerImageType: ".css-rk019r>>nth=1",
                arcadeSectionlogoHeader: ".css-n8k4mt",
                fanaticsGameTitle: "//p[text()='Fanatics-Filter-Web']",
                gussTheScroeGameTitle: "//p[text()='Guess The Score']",
                triviaGameTitle: "//p[text()='Trivia']",
                liveWallGameTitle: "//p[text()='Live Wall']",
                noiseMeterGameTitle: "//p[text()='Noise Meter']",
                tugOfWarGameTitle: "//p[text()='Tug of War']",
                prizeDropGameTitle: "//p[text()='Prize Drop']",
                selectTextOnHomeScreen: "(//h3[text()='Select'])[1]",
                teamAccountModal: "(//div[@teamcount='2'])[2]",
                postContentSectionMobileUIEle: "//div[@class='MuiBox-root css-d6o6cv']",
                eventImageEle: "//div[@haspadding='true']//div[1]",
                preEventImageEle: "//div[@class='MuiBox-root css-6tf43p']//div[1]",
                popUpBackgroundEle: "//div[@role='dialog']//div[1]",
                popupBackground: "//div[@role='dialog']//div[1]",
                popUpOkBtn: "//button[text()='Ok']",
                popUpText: "//p[text()='Success!']",
                openLibraryBtn: "//button[text()='Open Library']",
                takePhotoBtn: "//button[text()='Take Photo']",
                preEventMassage: "//p[text()='Pree Event Massage']",
                takeRecordVideoBtn: "//button[text()='Record Video']",
                takeRecordVideoMinMaxTitle: "//p[text()='The video must be (5)-(15) seconds long']",
                homePageBtn: "//div[@index='0']",
                menuPlusBtn: `[clip-rule="evenodd"]`,
                welcomeMassage: "//h1[text()='Welcome Massage']",
                postSubmitMassage: "//p[text()[normalize-space()='Post Submit']]",
                postTextPlaceholder: "//textarea[@placeholder='Post Text Placeholder ']",
                addPostTitleText: "//h1[text()='Add Post']",
                uploadedImageDeleteBtn: "(//button[@type='button'])[1]",
                postTextInputField: "//textarea[@placeholder='Type something']",
                postSubmitBtn: "//button[text()='Submit']"
        }
        async gotoUrl() {
                await this.page.goto(data.data);
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForTimeout(3000)
        }
        async inputPhoneNumberForAditionalInfo() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalphoneNumberInputField)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalphoneNumberInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalphoneNumberInputField).fill("+8801051703506")
                }
                else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")
        }
        async inputAgeForAditionalInfo() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalAgeInputField)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalAgeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalAgeInputField).fill("22")
                }
                else throw new Error("Aditional Information Age Input Field Is not visible In User Side")
        }
        async inputEmailForGoogleLogin() {
                const ele = await this.page.locator(this.postUpMobilePageElements.emailInputFieldForGoogleLogin).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.emailInputFieldForGoogleLogin).fill("demo@email.com")
                }
                else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
        }
        async inputEmailForAditionalInfo() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalEmailInputField)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalEmailInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalEmailInputField).fill("demo@email.com")
                }
                else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
        }
        async clickAdditionalDatePickterInputField() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalDatePickerLabel)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalDatePickerInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")
        }
        async clickAdditionalDateEditBtn() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalDateEditBtn)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalDateEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")
        }
        async inputAdditionalDate() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalDateInputField)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalDateInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalDateInputField).fill("01/31/2000")
                }
                else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")
        }
        async clickAdditionalDateDatePickerOkBtn() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalDatePickerOkBtn)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalDatePickerOkBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")
        }
        async clickSubmitButton() {
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalSubmitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }
        async inputAdditionalZipCode() {
                await this.page.waitForSelector(this.postUpMobilePageElements.additionalZipCodeInputFieldLabel)
                const ele = await this.page.locator(this.postUpMobilePageElements.additionalZipCodeInputFieldLabel).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.additionalZipCodeInputField).fill("1217")
                }
                else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")
        }
        async inputCustomQuestionForUser() {
                await this.page.waitForSelector(this.postUpMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.postUpMobilePageElements.customQuestionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.customQuestionInputField).fill("Demo Ans")
                }
                else throw new Error("Aditional Information Custom Question Input Field Is not visible In User Side")
        }
        async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
                await this.page.waitForSelector(this.postUpMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.postUpMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickCustomChoiceCheckBox() {
                await this.page.waitForSelector(this.postUpMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.postUpMobilePageElements.choiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.choiceCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickAddNewQuestionSubmitBtn() {
                const ele = await this.page.locator(this.postUpMobilePageElements.submitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.postUpMobilePageElements.submitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")
        }
        async verifyOpenLibraryButtonIsVisible() {
                const ele = await this.page.locator(this.postUpMobilePageElements.openLibraryBtn)
                try {
                        await ele.isVisible()
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Button Is Not Visiable After Admin Enable Allow File Upload | Error occurred: ${error}`);
                }
        }
        async verifyTakePhotoButtonIsVisible() {
                const ele = await this.page.locator(this.postUpMobilePageElements.takePhotoBtn)
                try {
                        await ele.isVisible()
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Take Photo Button Is Not Visiable After Admin Enable Allow Photo | Error occurred: ${error}`);
                }
        }
        async verifyRecordVideoButtonIsVisible() {
                const ele = await this.page.locator(this.postUpMobilePageElements.takeRecordVideoBtn)
                try {
                        await ele.isVisible()
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Button Is Not Visiable After Admin Enable Allow Video | Error occurred: ${error}`);
                }
        }
        async clickRecordVideoBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.takeRecordVideoBtn)
                try {
                        // await this.page.getByRole('button', { name: 'Record Video' })
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Button Is Not Visiable After Admin Enable Allow Video | Error occurred: ${error}`);
                }
        }
        async clickHomeBtn() {
                const ele = this.page.locator(this.postUpMobilePageElements.homePageBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle")
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen home Page Button Is not visible| Error occurred: ${error}`);
                }
        }
        async clickMenuPlusBtn() {
                const ele = this.page.locator(this.postUpMobilePageElements.menuPlusBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Menu Plus Button Is not visible| Error occurred: ${error}`);
                }
        }
        async verifyRecordVideoMinMaxTitle(text: string) {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.takeRecordVideoMinMaxTitle)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Mini And Max Input Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }

        async verifyMobileBackgroundColorChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.postContentSectionMobileUIEle).screenshot()
                // await expect(ele).toMatchSnapshot("mobileBackground.png", { maxDiffPixelRatio: 0.10 })
                try {
                        await expect(ele).toMatchSnapshot('mobileBackground_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Background Image Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyEventImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.eventImageEle).screenshot()

                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toMatchSnapshot('Event_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Event Image Doest Not Updated After Updateding From Admin Side`);
                }
        }
        async verifyPreEventImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.preEventImageEle).screenshot()

                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toMatchSnapshot('Pre_Event_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Pre_Event Image Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyPopUPBackgroundImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.popUpBackgroundEle).screenshot()

                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toMatchSnapshot('PopUP_BG_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile PopUp Background Image Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyBackgroundImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.postContentSectionMobileUIEle).screenshot()
                // await expect(ele).toMatchSnapshot("mobileBackground.png", { maxDiffPixelRatio: 0.10 })
                try {
                        await expect(ele).toMatchSnapshot('Mobile_Background_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Background Image Doest Not Updated After Updateding From Admin Side`);
                }
        }
        async verifyUploadFontSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.takePhotoBtn).screenshot()
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toMatchSnapshot('font_Ui_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Font Is Not Updated After Updateding From Admin Side | Error occurred: ${error}`);
                }
        }
        async verifyPopUpBackground(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.popupBackground)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toHaveCSS("background-color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen PouUp Background Color Is Not Applied | Error occurred: ${error}`);
                }
        }

        async verifyPopUpText(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.popUpText)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toHaveCSS("color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen PouUp Text Color Is Not Applied | Error occurred: ${error}`);
                }
        }
        async verifyPopUpButtonColor(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.popUpOkBtn)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toHaveCSS("background-color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen PouUp Button Color Is Not Applied | Error occurred: ${error}`);
                }
        }
        async verifyPopUpButtonTextColor(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.popUpOkBtn)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toHaveCSS("background-color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen PouUp Button Color Is Not Applied | Error occurred: ${error}`);
                }
        }

        async verifyPreeEventMassage(massage: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.preEventMassage)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toContainText(massage)
                } catch (error) {
                        throw new Error(`Mobile Screen | Pree Event Massage Is Not Successfully Show On Mobile Screen | Error occurred: ${error}`);
                }
        }


        async verifyButtonTextColor(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.takePhotoBtn)
                try {
                        await this.page.waitForTimeout(3000)
                        await expect(ele).toHaveCSS("color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Button Text Color Is Not Applied Successfully | Error occurred: ${error}`);
                }
        }
        async verifyMobileWelcomeImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.postContentSectionMobileUIEle).screenshot()
                // await expect(ele).toMatchSnapshot("mobileBackground.png", { maxDiffPixelRatio: 0.10 })
                try {
                        await expect(await this.page.screenshot({
                                fullPage: true
                        })).toMatchSnapshot('mobileWelcome_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Welcome Image Doest Not Updated After Updateding From Admin Side`);
                }
        }
        async verifyMobileButtonColorChangesSuccessfullyApplied(color: string) {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.takePhotoBtn)
                try {
                        await expect.soft(ele).toHaveCSS("background-color", color)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Button Color Doest Not Updated After Updateding From Admin Side`);
                }
        }
        async verifyMobileButtonTextColorChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.takePhotoBtn)
                try {
                        await expect.soft(ele).toHaveCSS("color", "rgb(33, 41, 54)")
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Button Text Color Doest Not Updated After Updateding From Admin Side`);
                }
        }
        async verifyWelcomeMassageText(massage: string) {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.welcomeMassage)
                try {
                        await expect(ele).toContainText(massage)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Welcome Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }
        async verifyPostSubmitMassageText(massage: string) {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postSubmitMassage)
                try {
                        await expect(ele).toContainText(massage)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Submit Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }
        async verifyPostTextPlaceholderMassageText() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postTextPlaceholder)
                // const placeholder = await ele.getAttribute(this.postUpMobilePageElements.postTextPlaceholder)
                try {
                        await expect(ele).toBeVisible({ timeout: 2000 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Placeholder Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }
        async verifyTextColor(text: string) {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.addPostTitleText)
                try {
                        await expect.soft(ele).toHaveCSS("color", text)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Welcome Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }
        async clickOpenLibraryUploadBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.openLibraryBtn)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(5000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async uploadImageClickingOnTakePhoto() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.takePhotoBtn)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(5000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Take Photo Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async uploadVideoClickingOnRecordVideoBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.takeRecordVideoBtn)
                const filePath0 = "testData/videos/Video.mkv"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.frameLocator("iframe").locator(this.postUpMobilePageElements.takeRecordVideoBtn).click({ force: true })
                        await this.page.waitForTimeout(7000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Record Video Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async clickDeleteBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.uploadedImageDeleteBtn)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Uploaded Image Delete Btn Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async inputPostText() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postTextInputField)
                try {
                        await this.page.waitForTimeout(1000)
                        await ele.fill("Auto Post From Devid")
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputPostTextForTakePhotoPost() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postTextInputField)
                try {
                        await this.page.waitForTimeout(1000)
                        await ele.fill("Post With Take Photo")
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputPostTextForRecordVideoPost() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postTextInputField)
                try {
                        await this.page.waitForTimeout(1000)
                        await ele.fill("Post With Record Video")
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickSubmitBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.postUpMobilePageElements.postSubmitBtn)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Submit Button Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async validatePostContentChangesSuccessfullyApplied() {
                const ele = await this.page.locator(this.postUpMobilePageElements.postContentSectionMobileUIEle).screenshot()
                await expect(ele).toMatchSnapshot("postContent.png", { maxDiffPixelRatio: 0.10 })
                // try {
                //         await expect(ele).toMatchSnapshot('postContent.png', { maxDiffPixelRatio: 0.10 })
                // } catch (error) {
                //         throw new Error(`Mobile Screen | Post Content Section Option Doest Not Updated After Updateding From Admin Side`);
                // }
        }
        async logoUploadHelper() {
                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                } catch (error) {
                        throw new Error(`Mobile Screen | Issue On Logo Upload Helper  | Error occurred: ${error}`);
                }
        }
}