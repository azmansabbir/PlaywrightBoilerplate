import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import * as url from "@testData/mainboard.json"
const fs = require('fs');

export default class postUpPage {
        [x: string]: any;
        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }
        private postUpPageElements = {
                postUpPage: "//p[text()='PostUP']",
                instancesTitleText: "//h5[text()='Instances']",
                instancesPlusBtn: "(//div[@class='MuiBox-root css-8mq8ds']//button)[2]",
                addInstancesTitleText: "//h4[text()='Add Instance']",
                errorMassgeForRequireNameData: "//p[text()='Field cannot be empty. Please type something']",
                dublicateNameErrorAlertForInstance: "//p[text()='Instance with the same name already exists. Please enter a unique name.']",
                nameLabelText: "//p[text()='Name']",
                instancesNameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                moderationLabelText: "//p[text()='Moderation']",
                moderationDropdownField: "//div[text()='Default']",
                defaultDropDownOption: "//li[@data-value='Default']",
                saveBtn: "//button[text()='Save']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
                uploadedFont: "//p[text()='Midnight']",
                selectedFontDeleteBtn: "//div[@isactive='true']//button[1]",
                autoGameMenuExpandBtn: "ExpandMoreIcon",
                outsideOfInputField: "//div[@id='app']",
                lastGameThreeDot: ".css-fd564f",
                cancelBtn: "//button[text()='Cancel']",
                mobileSectionBtn: "//p[text()='Mobile']",
                mobileTitleText: "//h3[text()='Mobile']",
                qrCodeIconBtn: "//div[@class='MuiBox-root css-1pihhz']//button[1]",
                settingsTitleText: "//p[text()='Settings']",
                userProfileTitleText: "//p[text()='User Profile']",
                showAvatarTitleText: "//p[text()='Show Avatar']",
                showAvatarCheckBox: "(//input[@type='checkbox'])[1]",
                MainboardShowAvatarCheckBox: "(//input[@type='checkbox'])[2]",
                MainboardShowUsernameCheckBox: "(//input[@type='checkbox'])[3]",
                MainboardSocialIconsCheckBox: "(//input[@type='checkbox'])[4]",
                MainboardAllowTextCheckBox: "(//input[@type='checkbox'])[5]",
                MainboardFeaturedPostShowAvatarCheckBox: "(//input[@type='checkbox'])[6]",
                MainboardFeaturedPostUserNameCheckBox: "(//input[@type='checkbox'])[7]",
                MainboardFeaturedPostSocialIconCheckBox: "(//input[@type='checkbox'])[8]",
                MainboardAutomateFeaturePostCheckBox: "(//input[@type='checkbox'])[9]",
                layoutDropDownOpenField: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]",
                defaultLayout: "//li[@data-value='16:9 - Default']",
                multipleLayout: "//li[@data-value='16:9 - Multiple']",
                singleLayout: "//li[text()='16:9 - Single']",
                dynamicLayout: "//li[@data-value='16:9 - Dynamic']",
                singleRowLayout: "//li[@data-value='4:1 - Single Row']",
                twoRowLayout: "//li[@data-value='4:1 - Two Row']",
                multiple14Layout: "//li[@data-value='1:4 - Multiple']",
                single14Layout: "//li[@data-value='1:4 - Single']",
                lowerThirdLayout: "//li[@data-value='Lower Third']",
                socialLeftLayout: "//li[@data-value='L-Bar - Social Left']",
                socialRightLayout: "//li[@data-value='L-Bar - Social Right']",
                socialBottomLayout: "//li[@data-value='L-Bar - Social Bottom']",
                tileAnimationStyleDropDownOpenField: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]",
                fadeTileStyle: "//li[@data-value='Fade']",
                flipXTileStyle: "//li[@data-value='Flip X']",
                flipYTileStyle: "//li[@data-value='Flip Y']",
                randomFlipTileStyle: "//li[@data-value='Random Flip']",
                showUserNameTitleText: "//p[text()='Show Username']",
                showUserNameCheckBox: "(//input[@type='checkbox'])[2]",
                postContentTitleText: "//p[text()='Post Content']",
                allowPhotoTitleText: "//p[text()='Allow Photo']",
                allowPhotoCheckBox: "(//input[@type='checkbox'])[3]",
                allowVideoTitleText: "//p[text()='Allow Video']",
                allowVideoCheckBox: "(//input[@type='checkbox'])[4]",
                allowTextTitleText: "//p[text()='Allow Text']",
                allowTextCheckBox: "(//input[@type='checkbox'])[5]",
                allowFileUploadTitleText: "//p[text()='Allow File Upload']",
                allowFileUploadCheckBox: "(//input[@type='checkbox'])[6]",
                videoTitleText: "//p[text()='Video']",
                minimumVideoLengthTitleText: "//p[text()='Min Video Length']",
                minimumSecondLabelText: "(//h6[text()='Seconds'])[1]",
                minimumVideoLengthInputField: "(//input[@type='number'])[1]",
                maxVideoLengthTitleText: "//p[text()='Max Video Length']",
                maxSecondLabelText: "(//h6[text()='Seconds'])[2]",
                maxVideoLengthInputField: "(//input[@type='number'])[2]",
                colorTitleText: "//p[text()='Colors']",
                colorSectionExpandCollapseBtn: "//p[text()='Colors']/following-sibling::div",
                fontsSectionExpandCollapseBtn: "//p[text()='Fonts']/following-sibling::div",
                fontUploadElement: "//div[@class='MuiBox-root css-v2612']",
                imageUploadsSectionExpandCollapseBtn: "//p[text()='Image Uploads']/following-sibling::div",
                dialogsSectionExpandCollapseBtn: "//p[text()='Dialogs']/following-sibling::div",
                settinsSectionExpnadCollapseBtn: "//p[text()='Settings']/following-sibling::div",
                moderationPlusBtn: "(//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')])[1]",
                addModerationTitleText: "//h4[text()='Add Moderation']",
                moderationNameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                moderationNameFieldRequirMassage: "//p[text()='Field cannot be empty. Please type something']",
                defaultMainboard: "//div[text()='Default']",
                mainboardUrlOpenLinkBtn: "//div[@aria-label='Mainboard Link']//button[1]",
                mainboardUrlCopyBtn: "//button[@aria-label='Copy Link']",
                mainboardExpandBtn: "(//ul[contains(@class,'MuiList-root MuiList-padding')]//div)[1]",
                cancelButton: "//button[text()='Cancel']",
                mobileBackgroundColorTitleText: "//p[text()='Mobile Background']",
                mobileBackgroundColorInputField: "//p[text()='Mobile Background']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                colorWindowSaveBtn: "//button[text()='Save']",
                mobileButtonColorTitleText: "//p[text()='Button']",
                mobileButtonColorInputField: "//p[text()='Button']/following-sibling::button",
                mobileButtonTextColorTitleText: "//p[text()='Button Text']",
                mobileButtonTextColorInputField: "//p[text()='Button Text']/following-sibling::button",
                mobileTextColorTitleText: "//p[text()='Text']",
                mobileTextColorInputField: "//p[text()='Text']/following-sibling::button",
                popUpBackgroundColorInputField: "//p[text()='Pop-up Background']/following-sibling::button",
                popUpButtonColorInputField: "//p[text()='Pop-up Button']/following-sibling::button",
                popUpButtonTextColorInputField: "//p[text()='Pop-up Button Text']/following-sibling::button",
                textSubmitHighlightColorPicker: "//p[text()='Text Submit Highlight']/following-sibling::button",
                imageUploadTitleText: "//p[text()='Image Uploads']",
                imageUploadSectionExpandCollapseBtn: "//p[text()='Image Uploads']/following-sibling::div",
                mobileBackgroundUploadedImagedeleteBtn: "//button[@aria-label='Delete']",
                mobileWelcomeUploadedImagedeleteBtn: "(//button[@aria-label='Delete'])[2]",
                mobileEventUploadedImagedeleteBtn: "(//button[@aria-label='Delete'])[3]",
                mobileBackgroundImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                mobileWelcomeImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                mobileEventImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                mobilePreEventImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[3]",
                mobilePopupBackgroundImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[4]",
                dialogTitleText: "//p[text()='Dialogs']",
                dialogExpandCollapseBtn: "//p[text()='Dialogs']/following-sibling::div",
                perEventMassageTitleText: "//p[text()='Pre-Event Message']",
                perEventMassageInputField: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]",
                perEventFilterBlockTypeInputField: "(//a[@title='Block Type'])[1]",
                welcomeMassageBlockTypeInputField: "(//a[@title='Block Type'])[2]",
                normalTag: "//li[text()='Normal']",
                h1Tag: "//li[text()='H1']",
                activeBackgroundColorPickerBtn: "//p[text()='Active Background']/following-sibling::button",
                welcomeMassageTitleText: "//h5[text()='Welcome Message']",
                welcomeMassageInputField: `(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]`,
                postSubmitMassageInputField: `(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]`,
                loadingTextMassageInputField: `(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[4]`,
                postTextPlaceholderMassageInputField: `(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[5]`,
                perCaptureInstructionsTitleText: "//h5[text()='Pre-Capture Instructions']",
                perCaptureInstructionsInputField: `(//div[@class='rdw-editor-main'])[3]`,
                postSubmitMassageTitleText: "//h5[text()='Post Submit Message']",
                switchColorDeleteBtn: `//button[@aria-label="delete"]`,
                bottomAlignmentButton: "//h5[text()='Bottom']//parent::button",
                qrCodeBtn: `//button[@type='button']//button[1]`,
                opneLinkInNewTab: "//a[@aria-label='Open Link']",
                mainboardBtn: "//p[text()='Mainboard']",
                settigsTitleText: "//p[text()='Settings']",
                titleText: "//p[text()='Title']",
                titleInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                leftRightMargin: "//p[text()='Left & Right Margin']",
                leftRightMarginInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[1]",
                topBottomMarginTitleText: "//p[text()='Top & Bottom Margin']",
                topBottomMarginInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[2]",
                mostRecentPostsTitleText: "//p[text()='Most Recent Posts']",
                mostRecentPostsInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[3]",
                tileAnimationSpeedTitleText: "//p[text()='Tile Animation Speed']",
                tileAnimationSpeedInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[4]",
                loopVideoTitleText: "//p[text()='Loop Video']",
                loopVideoCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]",
                socialIconTitleText: "//p[text()='Social Icons']",
                UploadFontBtn: '//div[@class="MuiBox-root css-3fw1ig"]',
                cueTitleText: "//p[text()='CUE']",
                cueCheckBox: "(//input[@type='checkbox'])[4]",
                automateFeaturePost: "//p[text()='Automate Featured Posts']",
                automateFeaturePostCheckBox: "(//input[@type='checkbox'])[6]",
                intervalTitleText: "//p[text()='Interval']",
                intervalSecondInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[5]",
                durationTitleText: "//p[text()='Duration']",
                durationSecondInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[6]",
                settinsExpandCollapseBtn: "//p[text()='Settings']/following-sibling::div",
                colorsExpandCollapseBtn: "//p[text()='Colors']/following-sibling::div",
                titleColorInputField: "//p[text()='Title']/following-sibling::button",
                postTitleText: "//p[text()='Post Text']",
                postColorInputFieldBtn: "//p[text()='Post Text']/following-sibling::button",
                TimerCircleColorPicker: "//p[text()='Timer Circle']/following-sibling::button",
                backgroundTitleText: "//p[text()='Background']",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                titleBackgroundTitleText: "//p[text()='Tile Background']",
                titleBackgroundColorInputFieldBtn: "//p[text()='Tile Background']/following-sibling::button",
                featurePostTitleText: "//p[text()='Featured Post Tile']",
                featurePostColorInputFieldBtn: "//p[text()='Featured Post Tile']/following-sibling::button",
                featurePostBAckgroundTitleText: "//p[text()='Featured Post Background']",
                featurePostBAckgroundColorInputFieldBtn: "//p[text()='Featured Post Background']/following-sibling::button",
                featurePostTextTitleText: "//p[text()='Featured Post Text']",
                featurePostTextColorInputFieldBtn: "//p[text()='Featured Post Text']/following-sibling::button",
                ColorPickerSaveBtn: '//button[text()="Save"]',
                backgroundImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                defaultMainboardTileTitleText: "//p[text()='Default Mainboard Tile']",
                defaultMainboardTileImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                featuredPostOverlayTitleText: "//p[text()='Featured Post Overlay']",
                featuredPostOverlayImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[3]",
                imageUpload1TitleText: "//p[text()='Image Upload 1']",
                imageUpload1ImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[4]",
                imageUpload2TitleText: "//p[text()='Image Upload 2']",
                imageUpload2ImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[5]",
                internalSourceIconTitleText: "//p[text()='Internal Source Icon']",
                internalSourceIconImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[6]",
                deleteBtnForInternalSourceIcon: "(//button[@aria-label='Delete'])[6]",
                deleteBtnForImageUpload2: "(//button[@aria-label='Delete'])[5]",
                deleteBtnForImageUpload1: "(//button[@aria-label='Delete'])[4]",
                deleteBtnForFeaturedPostOverlay: "(//button[@aria-label='Delete'])[3]",
                deleteBtnForDefaultMainboardTile: "(//button[@aria-label='Delete'])[2]",
                deleteBtnForBackground: "//button[@aria-label='Delete']",
                moderationPage: "//p[text()='Moderation']",
                createPostBtn: "//button[text()='Create Post']",
                clickDefaultModerationSection: "(//p[contains(@class,'MuiTypography-root MuiTypography-body2')])[1]",
                addNewPostTitleText: "//p[text()='Add New Post']",
                avaterTitleText: "//p[text()='Avatar']",
                avaterUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                nameTitleText: "//p[text()='Name']",
                nameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                userNameTitleText: "//p[text()='User Name']",
                userNameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                imageRadioBtn: "(//input[@type='radio'])[1]",
                postImageUploadInputField: "//div[@class='MuiBox-root css-v2612']",
                postTextTitleText: "//p[text()='Post Text']",
                postTextInputField: "(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                refreshBtn: "(//button[@isbackground='true'])[1]",
                sourcesDropDownInputField: "(//div[@role='button'])[1]",
                cueSourceCheckBox: "//li[@data-value='CUE']",
                customAddsSourceCheckBox: "//li[@data-value='Custom Adds']",
                sortByDropDownInputField: "(//div[@role='button'])[2]",
                approvedSrotByCheckBox: "//li[@data-value='Approved']",
                likedSrotByCheckBox: "//li[@data-value='Liked']",
                flaggedSrotByCheckBox: "//li[@data-value='Flagged']",
                deletedSortByCheckBox: "//li[@data-value='Deleted']",
                filterByDropDownInputField: "(//div[@role='button'])[3]",
                textFilterByCheckBox: "//li[@data-value='Text']",
                imageFilterByCheckBox: "//li[@data-value='Image']",
                videoFilterByCheckBox: "//li[@data-value='Video']",
                postFromCueSide: "//div[text()='Auto Post From Devid']",
                postFromCueSideWithTakePhoto: "//div[text()='Post With Take Photo']",
                postFromCueSideWithVideoRecord: "//div[text()='Post With Record Video']",
                customAdsFilterValidation: "//p[text()='Custom Adds']",
                clearAllBtn: "//button[text()='Clear All']",
                okBtn: "//button[text()='Ok']",
                playListPost: "(//div[@role='button']//p)[1]",
                postApproveBtn: "//div[@aria-label='Approve']//button",
                postLikeBtn: "button:nth-child(2)",
                postFevoraitBtn: "div:nth-child(3) > button:nth-child(3)",
                postFlagBtn: "button:nth-child(4)",
                postDeleteBtn: "button:nth-child(5)",
                mobileLinkOpenBtnDefault: `//div[@aria-label='QRcode']//div[1]`,
                mobileLinkCopyBtn: "//button[@aria-label='Copy Link']",
                defultGameLiveBtn: "DefaultStart",
                defultGameStopBtn: "DefaultLive",
                gameStartBtn: "//button[text()='Start']"

        }


        async gotoMainboardUrl() {
                await this.page.goto(url.mainboard);
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForTimeout(3000)
        }
        async clickToStartDefaultGame() {
                let ele = await this.page.frameLocator('iframe').getByText(this.postUpPageElements.defultGameLiveBtn)
                let okbtn = await this.page.frameLocator('iframe').locator(this.postUpPageElements.okBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                        await okbtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up Page Default Game Start Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickQrCodeBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.postUpPageElements.qrCodeBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Post Up Page Default Config QR Code Btn Is Not Visible | Error occurred: ${error}`);
                }
        }
        async vefiryMainboardMargin() {
                try {
                        await expect(await this.page.screenshot({
                                fullPage: true
                        })).toMatchSnapshot('mainboard_margin.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mainboard | Mainboard Margin Is Not Match`);
                }
        }
        async clickOpenLinkInNewTab() {
                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator(this.postUpPageElements.opneLinkInNewTab).click({ button: "left" })
                ]);
                // await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
                return page1;
        }
        async clickDefaultGameMobileLinkOpenBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileLinkOpenBtnDefault)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`PostUP Mobile Link Text is not visible,Could not find locator:"${error}"`)
                }
        }
        async clickDefaultMobileLinkCopyBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileLinkCopyBtn)
                try {
                        await ele.click({ button: "left" })
                } catch (error) {
                        throw new Error(`PostUP Mobile Link copy button is not visible,Could not find locator:"${error}"`)
                }
        }
        async clickPostUpPage() {
                let ele = await this.page.locator(this.postUpPageElements.postUpPage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Game | Post Up Page Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToExpandLastGameMenu() {
                let ele = await this.page.frameLocator('iframe').getByTestId(this.postUpPageElements.autoGameMenuExpandBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up Page Last Game Menu Expand Btn Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToExpandMainboard() {
                let ele = await this.page.frameLocator('iframe').getByTestId(this.postUpPageElements.mainboardExpandBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Mainboard | Mainboard Expand Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickOnDefaultMainboard() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.defaultMainboard)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Mainboard | Default Mainboard Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickOnMainboardDefaultUrlOpneBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mainboardUrlOpenLinkBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Mainboard | Default Mainboard Url Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickOnMainboardDefaultUrlCopyBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mainboardUrlCopyBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Mainboard | Default Mainboard Url Copy Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickOutSideOfInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.outsideOfInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {

                }
        }

        async clickLastGameThreeDot() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.lastGameThreeDot).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up Page Last Game Three Dot Btn Is Not Visible | Error occurred: ${error}`);
                }
        }

        async writeTextToClipboard(text: string) {
                await this.page.evaluate((clipboardText) => {
                        navigator.clipboard.writeText(clipboardText);
                }, text);
        }

        async readTextFromClipboard() {
                const clipboardText = await this.page.evaluate(() => {
                        return navigator.clipboard.readText();
                });

                return clipboardText;
        }

        async copyUrlToClipboard() {
                const url = await this.page.evaluate(() => {
                        return window.location.href;
                });

                await this.writeTextToClipboard(url);
        }

        async copyAndStoreDataToClipboard(data: string) {
                await this.writeTextToClipboard(data);
                this.storeDataInJSONFile(data);
        }

        storeDataInJSONFile(data: string) {
                const jsonData = JSON.stringify({ data }, null, 2);
                fs.writeFileSync('testData/data.json', jsonData);
        }

        retrieveDataFromJSONFile() {
                const jsonData = fs.readFileSync('testData/data.json', 'utf-8');
                const data = JSON.parse(jsonData);
                return data;
        }

        async clickDefultGameStopBtn() {
                const ele = await this.page.frameLocator('iframe').getByText(this.postUpPageElements.defultGameStopBtn).isVisible()
                if (ele == true) {
                        await this.page.frameLocator('iframe').getByText(this.postUpPageElements.defultGameStopBtn).click({ force: true })
                        await this.page.waitForTimeout(1000)
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.okBtn).click()
                        await this.page.waitForTimeout(1000)
                }

        }

        async writeTextToClipboardForMainboard(text: string) {
                await this.page.evaluate((clipboardText) => {
                        navigator.clipboard.writeText(clipboardText);
                }, text);
        }

        async readTextFromClipboardForMainboard() {
                const clipboardText = await this.page.evaluate(() => {
                        return navigator.clipboard.readText();
                });

                return clipboardText;
        }

        async copyUrlToClipboardForMainboard() {
                const url = await this.page.evaluate(() => {
                        return window.location.href;
                });

                await this.writeTextToClipboardForMainboard(url);
        }

        async copyAndStoreDataToClipboardForMainboard(mainboard: string) {
                await this.writeTextToClipboardForMainboard(mainboard);
                this.storeDataInJSONFileForMainboard(mainboard);
        }

        storeDataInJSONFileForMainboard(mainboard: string) {
                const jsonData = JSON.stringify({ mainboard }, null, 2);
                fs.writeFileSync('testData/mainboard.json', jsonData);
        }

        retrieveDataFromJSONFileForMainboard() {
                const jsonData = fs.readFileSync('testData/mainboard.json', 'utf-8');
                const data = JSON.parse(jsonData);
                return data;
        }


        async clickMobileSettingsPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileSectionBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | Post Up Page Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyUserProfileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.userProfileTitleText)
                try {
                        await expect(ele).toContainText("User Profile")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page User Profle Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyInstancesTitleText(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.instancesTitleText)
                try {
                        await this.page.waitForTimeout(2000)
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance Title Text is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickInstancesPlusBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.instancesPlusBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance | Add Instances Plus Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputInstanceName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.instancesNameInputField)
                try {
                        await ele.clear()
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance | Add Instances Name Input Field Is Not Clear Properly | Error occurred: ${error}`);
                }
        }
        async clearNameField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.instancesNameInputField)
                try {
                        await ele.clear()
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance | Add Instances Name Input Field Is Not Clear Properly | Error occurred: ${error}`);
                }
        }
        async verifyAddInstancesTitleText(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.addInstancesTitleText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Add Instance Title Text is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyErrorMassageForNameFieldRequiredAlert(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.errorMassgeForRequireNameData)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance | Name Field Reuired Alert Massage Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyErrorMassageForNameFieldDublicateAlert(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.dublicateNameErrorAlertForInstance)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Instance | Name Field Dublicate Alert Massage Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyShowAvatarTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showAvatarTitleText)
                try {
                        await expect.soft(ele).toContainText("Show Avatar")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Avatar Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async disableShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.showAvatarCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | Post Up | Show Avater CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async enableShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.showAvatarCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Avater CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async mainboardEnableShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardShowAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardShowAvatarCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Avater CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async mainboardEnableShowUsername() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardShowUsernameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardShowUsernameCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Avater CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async mainboardEnableSocialIcons() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardSocialIconsCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardSocialIconsCheckBox).click()
                } else {
                        console.log("Game | Post Up | Social Icon CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async mainboardEnableAllowText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardAllowTextCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardAllowTextCheckBox).click()
                } else {
                        console.log("Game | Post Up | Allow Text  CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async mainboardEnableFeaturePostShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostShowAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostShowAvatarCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Avatar  CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async mainboardEnableFeaturePostShowUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostUserNameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostUserNameCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Username CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async mainboardEnableFeaturePostShowSocialIcons() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostSocialIconCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardFeaturedPostSocialIconCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Social Icons CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async mainboardEnableFeaturePostShowAutomatedFeaturePost() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardAutomateFeaturePostCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.MainboardAutomateFeaturePostCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Social Icons CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyShowUserNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showUserNameTitleText)
                try {
                        await ele.isVisible()
                        await expect.soft(ele).toContainText("Show Username")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Username Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async disableUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showUserNameCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.showUserNameCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | Post Up | Show UserName CheckBox Is Disable So Did Not Click On It")
                }
        }
        async enableUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.showUserNameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.showUserNameCheckBox).click({ force: true })
                } else {
                        console.log("Game | Post Up | Show UserName CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyAllowPhotoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowPhotoTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Photo")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Allow Photo Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async enableAllowPhoto() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowPhotoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowPhotoCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Allow Photo CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async clickOnTileAnimationStyleSelectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.tileAnimationStyleDropDownOpenField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Tile Animation Stye Selection Option DropDown Filed Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectFadeTileAnimationStyle() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.fadeTileStyle)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Tile Animation Style Selection Fade Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectFlipXTileAnimationStyle() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.flipXTileStyle)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Tile Animation Style Selection Flip X Option Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectFlipYTileAnimationStyle() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.flipYTileStyle)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Tile Animation Style Selection Flip Y Option Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectRandomFlipTileAnimationStyle() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.randomFlipTileStyle)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Tile Animation Style Selection Random Flip Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickOnLayoutSelectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.layoutDropDownOpenField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Option Filed Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectDefaultLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.defaultLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Default Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectMultipleLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.multipleLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Multiple Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectSingleLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.singleLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Single Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectDynamicLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.dynamicLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Dynamic Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectSingleRowLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.singleRowLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Single Row Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectTwoRowLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.twoRowLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Two Row Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectMultiple14LayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.multiple14Layout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Multiple 1.4 Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectSingle14LayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.single14Layout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Single 1.4 Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectLowerThirdLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.lowerThirdLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection lower Third Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectSocialLeftLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.socialLeftLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Social Left Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToSelectSocialRightLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.socialRightLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Social Right Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectSocialBottomLayoutOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.socialBottomLayout)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Post Up | Mainboard | Layout Selection Social Bottom Layout Option Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyAllowVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowVideoTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Video")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Allow Video Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async enableAllowVideo() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowVideoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowVideoCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Allow Video CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyAllowTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowTextTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Text")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Allow Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async enableAllowText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowTextCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowTextCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Allow Text CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyFileUploadTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowFileUploadTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow File Upload")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Show Allow File Upload Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async enableAllowFileUpload() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowFileUploadCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.allowFileUploadCheckBox).click()
                } else {
                        console.log("Game | Post Up | Show Allow File Upload CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.videoTitleText)
                try {
                        await expect.soft(ele).toContainText("Video")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Video Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyMinimumVideoLenthTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.minimumVideoLengthTitleText)
                try {
                        await expect.soft(ele).toContainText("Min Video Length")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Min Video Length Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyMinimumVideoLenthSecondTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.minimumSecondLabelText)
                try {
                        await expect.soft(ele).toContainText("Seconds")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Seconds Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputMinimumVideoLenthSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.minimumVideoLengthInputField)
                try {
                        await ele.fill("5")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Minimum Video Length Seconds Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyMaxVideoLengthTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.maxVideoLengthTitleText)
                try {
                        await expect.soft(ele).toContainText("Max Video Length")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Max Video Length Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyMaxVideoLenthSecondTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.maxSecondLabelText)
                try {
                        await expect.soft(ele).toContainText("Seconds")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Seconds Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputMaxVideoLenthSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.maxVideoLengthInputField)
                try {
                        await ele.clear()
                        await ele.fill("15")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Page Minimum Video Length Seconds Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickModerationAddPlusBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.moderationPlusBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Plus Button Is Not Found | Error occurred: ${error}`);
                }
        }
        async verifyModertaionAddTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.addModerationTitleText)
                try {
                        await expect(ele).toContainText("Add Moderation")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Title Text Is Not Match | Error occurred: ${error}`);
                }
        }
        async verifyModertaionAddTitleRequireMassage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.moderationNameFieldRequirMassage)
                try {
                        await expect(ele).toContainText("Field cannot be empty. Please type something")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Name Filed Is Not Require, require text is not showing | Error occurred: ${error}`);
                }
        }
        async clearModerationNameField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.moderationNameInputField)
                try {
                        await ele.clear({ force: true })
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Name Input Filed Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputModerationName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.moderationNameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Name Input Filed Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickCancelButton() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.cancelBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderatin Add Section Cancel Button Is Not Found | Error occurred: ${error}`);
                }
        }

        async collapseSettingsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.settinsSectionExpnadCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyColorSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorTitleText)
                try {
                        await expect.soft(ele).toContainText("Colors")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Colors Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async expandColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Color Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }
        async expandFontsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.fontsSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(4000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Fonts Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }

        async clickToDeleteFont() {
                const fontTitle = await this.page.frameLocator('iframe').locator(this.postUpPageElements.uploadedFont).isVisible()
                if (fontTitle == true) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.fontDeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                }
                const selectedFontDelete = await this.page.frameLocator('iframe').locator(this.postUpPageElements.selectedFontDeleteBtn).isVisible()
                if (selectedFontDelete == true) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.selectedFontDeleteBtn).click({ button: "left", delay: 1000 })
                }
        }

        async clickToUploadFont() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.fontUploadElement)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(6000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Font Upload Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToSelectFont() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.uploadedFont)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(6000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Uploaded Font Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        async expandImageUploadsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUploadSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Image Upload Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }

        async expandDialogsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.dialogExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Dialogs Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyImageUploadSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUploadTitleText)
                try {
                        await expect.soft(ele).toContainText("Image Uploads")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Image Upload Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async expandImageUploadSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUploadSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Image Upload Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyMobileBackGroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileBackgroundColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Mobile Background")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Mobile Background Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobileBackgroundColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileBackgroundColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Background Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputColorCodeForMobileBackground(color: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill(color)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Background Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async colorWindowSaveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorWindowSaveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Background Color Window Save Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyColorSectionButtonTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileButtonColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Button")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Mobile Button Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobileButtonColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileButtonColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Button Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputColorCodeForMobileButton() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("FD7C6AFF")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Button Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyColorSectionButtonTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileButtonTextColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Button Text")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Mobile Button Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobileButtonTextColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileButtonTextColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Button Text Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputColorCodeForMobileButtonText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("212936FF")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Button Text Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyColorSectionTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileTextColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Text")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Mobile Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobileTextColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileTextColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Text Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobilePopUpBackgroundColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.popUpBackgroundColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings PopUp Background Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobilePopUpButtonColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.popUpButtonColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings PopUp Button Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobilePopUpButtonTextColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.popUpButtonTextColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings PopUp Button Text Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMobileTextSubmitHighlightColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.textSubmitHighlightColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Text Submit Highlight Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputColorCode(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settings Mobile Text Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async deleteMobileBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileBackgroundUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileBackgroundUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Background Image Is Not Found`);
                }
        }
        async deleteMobileWelcomeImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileWelcomeUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileWelcomeUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Welcome Image Is Not Found`);
                }
        }
        async deleteMobileEventImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileEventUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileEventUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else { console.log(`Game | Post Up | Mobile Event Image Is Not Found`); }
        }
        async clickToUploadMobileBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileBackgroundImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Background Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToUploadMobileWelcomeImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileWelcomeImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Welcome Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToUploadMobileEventImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobileEventImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Event Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickToUploadMobilePreEventImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobilePreEventImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Pre Event Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToUploadMobilePopupBG() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mobilePopupBackgroundImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Pop Up Background Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifyDialogsSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.dialogTitleText)
                try {
                        await expect.soft(ele).toContainText("Dialogs")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Dialogs Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyPreEventMessageTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.perEventMassageTitleText)
                try {
                        await expect.soft(ele).toContainText("Pre-Event Message")
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Page Pre-Event Message Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickBlockTypeSectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.perEventFilterBlockTypeInputField)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Block Type Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickWelcomeMassageBlockTypeSectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.welcomeMassageBlockTypeInputField)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Block Type Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async selectH1Tag() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.normalTag)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Block Type H1 Is Not Visible | Error occurred: ${error}`);
                }
        }
        async selectH1TagForBlockType() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.h1Tag)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Block Type H1 Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputPreEventMessage(massage: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.perEventMassageInputField)
                try {
                        await ele.click()
                        await this.page.keyboard.press("Control+a")
                        await this.page.keyboard.press('Backspace')
                        await ele.click()
                        await ele.fill(massage)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputWelcomeMessageFromDialogs(massage: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.welcomeMassageInputField)
                try {
                        await ele.click()
                        await this.page.keyboard.press("Control+a")
                        await this.page.keyboard.press('Backspace')
                        await ele.click()
                        await ele.fill(massage)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Page Pre-Event Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputPostSubmitMassageFromDialogs(massage: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postSubmitMassageInputField)
                try {
                        await ele.click()
                        await this.page.keyboard.press("Control+a")
                        await this.page.keyboard.press('Backspace')
                        await ele.click()
                        await ele.fill(massage)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Post Submit Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputLoadingMassageFromDialogs(massage: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.loadingTextMassageInputField)
                try {
                        await ele.click()
                        await this.page.keyboard.press("Control+a")
                        await this.page.keyboard.press('Backspace')
                        await ele.click()
                        await ele.fill(massage)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Loading Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async inputPostTextPlaceholderMassageFromDialogs(massage: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postTextPlaceholderMassageInputField)
                try {
                        await ele.click()
                        await this.page.keyboard.press("Control+a")
                        await this.page.keyboard.press('Backspace')
                        await ele.click()
                        await ele.fill(massage)
                } catch (error) {
                        throw new Error(`Game | Post Up | Mobile Settins Dialogs Section Post Text Placeholder Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickMainBoardPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mainboardBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Button Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.titleText)
                try {
                        await expect.soft(ele).toContainText("Title")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Title Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTitle() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.titleInputField)
                try {
                        await ele.fill("Auto MainBoard")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Title Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyLeftRightMarginTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.leftRightMargin)
                try {
                        await expect.soft(ele).toContainText("Left & Right Margin")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Left & Right Margin Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputLeftRightMarginParcent() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.leftRightMarginInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Left & Right Margin Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyTopBottomMarginTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.topBottomMarginTitleText)
                try {
                        await expect.soft(ele).toContainText("Top & Bottom Margin")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Top & Bottom Margin Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTopBottomMarginParcent() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.topBottomMarginInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Top & Bottom Margin Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyMostRecentPostsTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mostRecentPostsTitleText)
                try {
                        await expect.soft(ele).toContainText("Most Recent Posts")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Most Recent Posts Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputMostRecentPostsCount() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.mostRecentPostsInputField)
                try {
                        await ele.fill("20")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Most Recent Posts Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyTileAnimationSpeedTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.tileAnimationSpeedTitleText)
                try {
                        await expect.soft(ele).toContainText("Tile Animation Speed")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Tile Animation Speed Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTileAnimationSpeedSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.tileAnimationSpeedInputField)
                try {
                        await ele.fill("100")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Tile Animation Speed Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyLoopVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.loopVideoTitleText)
                try {
                        await expect.soft(ele).toContainText("Loop Video")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Loop Video Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async disableLoopVideoCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.loopVideoCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.loopVideoCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | Post Up | MainBoard Settins Loop Video CheckBox Is Disable So Did Not Click On It")
                }
        }
        async enableLoopVideoCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.loopVideoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.loopVideoCheckBox).click()
                } else {
                        console.log("Game | Post Up | MainBoard Settins Loop Video CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifySocailIconTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.socialIconTitleText)
                try {
                        await expect.soft(ele).toContainText("Social Icons")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Social Icons Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyCueTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueTitleText)
                try {
                        await expect.soft(ele).toContainText("CUE")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section CUE Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async disableCueCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | Post Up | MainBoard Settins CUE CheckBox Is Disableed So Did Not Click On It")
                }
        }
        async enableCueCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueCheckBox).click()
                } else {
                        console.log("Game | Post Up | MainBoard Settins CUE CheckBox Is Enabled So Did Not Click On It")
                }
        }
        async verifyAutomateFeaturedPostsTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.automateFeaturePost)
                try {
                        await expect.soft(ele).toContainText("Automate Featured Posts")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Automate Featured Posts Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyIntervalTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.intervalTitleText)
                try {
                        await expect.soft(ele).toContainText("Interval")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Interval Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputIntervalSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.intervalSecondInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Interval Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyDurationTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.durationTitleText)
                try {
                        await expect.soft(ele).toContainText("Duration")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Duration Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputDurationSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.durationSecondInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Settings Section Duration Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickTitleColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.titleColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Color Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTitleColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("7B8AFFFF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyPostTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postTitleText)
                try {
                        await expect.soft(ele).toContainText("Post Text")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Post Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickPostTextColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Post Text Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputPostTextColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("FF7373FF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.backgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Background")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.backgroundColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("3B86FFFF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyTileBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.titleBackgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Tile Background")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Tile Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickTileBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.titleBackgroundColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Tile Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTileBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("A1A1A1FF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Tile Background Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyFeaturedPostTileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Tile")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Tile Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickFeaturedPostTileColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostTextColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Tile Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputFeaturedPostTileColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("FFB5B5FF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Featured Post Tile Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyFeaturedPostBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostBAckgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Background")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickFeaturedPostBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostBAckgroundColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputFeaturedPostBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("FF5959FF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Featured Post Background Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyFeaturedPostTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostTextTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Text")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickFeaturedPostTextColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featurePostTextColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Colors Section Featured Post Text Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputFeaturedPostTextColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.colorCodeInputField)
                try {
                        await ele.fill("DB67FFFF")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Color Section Featured Post Text Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickBackgroundImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.backgroundImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Background Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyDefaultMainboardTileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.defaultMainboardTileTitleText)
                try {
                        await expect.soft(ele).toContainText("Default Mainboard Tile")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Default Mainbroad Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickDefaultMainboardTileImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.defaultMainboardTileImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Mainboard Tile Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyFeaturedPostOverlayTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featuredPostOverlayTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Overlay")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Featured Post Overlay Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickFeaturedPostOverlayImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.featuredPostOverlayImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Featured Post Overlay Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyImageUpload1TitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUpload1TitleText)
                try {
                        await expect.soft(ele).toContainText("Image Upload 1")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Image Upload 1 Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickImageUpload1ImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUpload1ImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Image Upload 1 Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyImageUpload2TitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUpload2TitleText)
                try {
                        await expect.soft(ele).toContainText("Image Upload 2")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Image Upload 1 Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickImageUpload2ImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageUpload2ImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Image Upload 2 Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyInternalSourceIconTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.internalSourceIconTitleText)
                try {
                        await expect.soft(ele).toContainText("Internal Source Icon")
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Internal Source Icon Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickInternalSourceIconImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.internalSourceIconImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | Post Up | MainBoard Page Image Upload Section Internal Source Icon Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async deleteBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForBackground).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForBackground).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Background Image Is Not Found`);
                }
        }
        async deleteDefaultMainboardTile() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForDefaultMainboardTile).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForDefaultMainboardTile).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Default Mainboard Tile Is Not Found`);
                }
        }
        async deleteFeaturedPostOverlay() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForFeaturedPostOverlay).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForFeaturedPostOverlay).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Featured Post Overlay Tile Is Not Found`);
                }
        }
        async deleteImageUpload1() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForImageUpload1).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForImageUpload1).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Image Upload 1 Is Not Found`);
                }
        }
        async deleteImageUpload2() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForImageUpload2).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForImageUpload2).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Image Upload 2 Is Not Found`);
                }
        }
        async deleteInternalSourceIcon() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForInternalSourceIcon).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.deleteBtnForInternalSourceIcon).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | Post Up | Mobile Internal Server Icon Is Not Found`);
                }
        }
        //moderation
        async clickModerationPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.moderationPage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickDefaultModerationSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.clickDefaultModerationSection)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Default Moderation Section Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickCreatePostBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.createPostBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyAddNewPostTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.addNewPostTitleText)
                try {
                        await expect.soft(ele).toContainText("Add New Post")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Section Add New Post Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyAvaterTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.avaterTitleText)
                try {
                        await expect.soft(ele).toContainText("Avatar")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Section Avatar Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickAvaterUploadInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.avaterUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Avater Upload Input Fiedl Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.nameTitleText)
                try {
                        await expect.soft(ele).toContainText("Name")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Section Name Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputPostName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.nameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Name Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyUserNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.userNameTitleText)
                try {
                        await expect.soft(ele).toContainText("User Name")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Section User Name Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputPostUserName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.userNameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page User Name Input Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async checkImageRadioBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.postUpPageElements.imageRadioBtn).click({ button: "left", delay: 1000 })
                } else {
                        console.log(`Game | Post Up | Moderation Create Post Image CheckBox Is Checked`);
                }
        }
        async clickPostImageUploadInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postImageUploadInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Image Upload Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async inputPostText(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postTextInputField)
                try {
                        await ele.fill(text)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Section Post Text Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSaveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.saveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Create Post Save Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickRefreshBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.refreshBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Refresh Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSourcesInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.sourcesDropDownInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Input Field Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSourcesInputFieldForceFullyWhenDropdownOptionsShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.sourcesDropDownInputField)
                try {
                        await ele.dblclick({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Input Field Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickOnCueOptions() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.cueSourceCheckBox)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources DropDown Field Cue CheckBox Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickOnCustomAddsOptions() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.customAddsSourceCheckBox)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources DropDown Field Cue CheckBox Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyCuePostSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postFromCueSide).first()
                try {
                        await expect.soft(ele).toContainText("Auto Post From Devid")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyCuePostWithRecordVideoSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postFromCueSideWithVideoRecord).first()
                try {
                        await expect.soft(ele).toContainText("Post With Record Video")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyCuePostWithTakePhotoSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postFromCueSideWithTakePhoto).first()
                try {
                        await expect.soft(ele).toContainText("Post With Take Photo")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyCustomAddsPostSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.customAdsFilterValidation).first()
                try {
                        await expect.soft(ele).toContainText("Custom Adds")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Section Custom Ads CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.customAdsFilterValidation).first()
                try {
                        await expect.soft(ele).toContainText("Custom Adds")
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Sources Section Custom Ads CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async clickClearAllBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.clearAllBtn)
                let okbtn = await this.page.frameLocator('iframe').locator(this.postUpPageElements.okBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                        await okbtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
        }
        async clickPostApproveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postApproveBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Approve  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async verifyApprovePostSuccessfullyShowOnPlaylist() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.playListPost)
                try {
                        await expect.soft(ele).toBeVisible()
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Approve Functionality Does Not Work | Error occurred: ${error}`);
                }
        }
        async clickPostLikeBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postLikeBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Like  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickPostFlaggedBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postFlagBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Flagged  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickPostFevoraitBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postFevoraitBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Favorait Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickPostDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.postDeleteBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page Post Delete  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSortByOptionInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.sortByDropDownInputField).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page SrotBy Options Selection Input Field  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSortByApprovedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.approvedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page SrotBy Approved Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSortByLikedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.likedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page SrotBy Liked Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSortByFlaggedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.flaggedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page SrotBy Flagged Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async clickSortByDeletedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.postUpPageElements.deletedSortByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | Post Up | Moderation Page SrotBy Flagged Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
        async cropperForFanSeeWall() {
                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                await chooseBtn.click()
                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("(//button[text()='Save'])[2]")
                await cropperSaveBtn.click({ force: true })
                await this.page.waitForTimeout(6000)
        }
}