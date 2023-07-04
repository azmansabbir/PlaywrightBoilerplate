import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs';
const clipboard = require("clipboardy");

test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        await functions.adminMainMenuSettingsHelper()
})

test("001 | Copy Game Url In Json File", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()
                await postUpPage.clickMobileSettingsPage()

                await postUpPage.clickDefaultGameMobileLinkOpenBtn()
                await postUpPage.clickDefaultMobileLinkCopyBtn()
        })

        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                await postUpPage.copyAndStoreDataToClipboard(URL);
                const ele = postUpPage.retrieveDataFromJSONFile()
                console.log(ele);
        })
})

test("01PU-001 | Instances | Validate Error Massage Successfully Show When Admin Try To Add Instance Without Instance Name", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation()
                await loginPage.login(data.username, data.password)
        })
        await postUpPage.clickPostUpPage()

        // await postUpPage.verifyInstancesTitleText(testData.getInstancesText())
        await postUpPage.clickInstancesPlusBtn()
        await postUpPage.verifyAddInstancesTitleText(testData.getAddInstancesText())

        await postUpPage.clearNameField()
        await postUpPage.clickSaveBtn()
        await postUpPage.verifyErrorMassageForNameFieldRequiredAlert(testData.getNameFieldErrorMassage())



})

test("01PU-002 | Instances | Validate Admin Successfully Add Instance With Valid Data", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation()
                await loginPage.login(data.username, data.password)
        })
        await postUpPage.clickPostUpPage()

        await postUpPage.clickInstancesPlusBtn()
        await postUpPage.inputInstanceName(testData.getInstancesName())

        await postUpPage.clickSaveBtn()


})

test("01PU-003 | Instances | Validate Error Massage Successfully Show When Admin Try To Add Instance With Same Name", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation()
                await loginPage.login(data.username, data.password)
        })
        await postUpPage.clickPostUpPage()

        await postUpPage.clickInstancesPlusBtn()
        await postUpPage.inputInstanceName(testData.getInstancesName())

        await postUpPage.clickSaveBtn()
        await postUpPage.verifyErrorMassageForNameFieldDublicateAlert(testData.getNameFieldDublicateErrorMassage())

})


test("01PU-004 | Mobile Settings | Validate Admin Successfully Updated User Profile Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await postUpPage.clickPostUpPage()

        await postUpPage.clickToExpandLastGameMenu()
        await postUpPage.clickMobileSettingsPage()
        await postUpPage.verifyShowAvatarTitleText()
        await postUpPage.enableShowAvatar()
        await postUpPage.verifyShowUserNameTitleText()
        await postUpPage.enableUserName()
        expect(test.info().errors).toHaveLength(0);
})
test("01PU-005 | Mobile Screen | Validate Admin Updated User Profile Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
        })
})

test("01PU-006 | Mobile Settings | Validate Admin Successfully Updated Post Content Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await postUpPage.clickPostUpPage()

        await postUpPage.clickToExpandLastGameMenu()
        await postUpPage.clickMobileSettingsPage()

        await postUpPage.verifyAllowPhotoTitleText()
        await postUpPage.enableAllowPhoto()
        await postUpPage.verifyAllowVideoTitleText()
        await postUpPage.enableAllowVideo()
        await postUpPage.verifyAllowTextTitleText()
        await postUpPage.enableAllowText()
        await postUpPage.verifyFileUploadTitleText()
        await postUpPage.enableAllowFileUpload()
})
test("01PU-006 | Mobile Screen | Validate Admin Updated Post Content Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.verifyOpenLibraryButtonIsVisible()
                await postUpMobilePage.verifyTakePhotoButtonIsVisible()
                await postUpMobilePage.verifyRecordVideoButtonIsVisible()
        })
})

test("01PU-008 | Mobile Settings | Validate Admin Successfully Updated Video Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()
                await postUpPage.clickDefultGameStopBtn()

                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.verifyVideoTitleText()
        await postUpPage.verifyMinimumVideoLenthTitleText()
        await postUpPage.verifyMinimumVideoLenthSecondTitleText()
        await postUpPage.inputMinimumVideoLenthSecond()
        await postUpPage.verifyMaxVideoLengthTitleText()

        await postUpPage.inputMaxVideoLenthSecond()
        await postUpPage.verifyMaxVideoLenthSecondTitleText()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-009 | Mobile Screen | Validate Admin Updated Video Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickRecordVideoBtn()
                await postUpMobilePage.verifyRecordVideoMinMaxTitle(await testData.getVideoMinMaxText())
                // expect(test.info().errors).toHaveLength(0);
        })
})

test("01PU-010 | Mobile Settings | Validate Admin Successfully Updated Mobile Background Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyMobileBackGroundTitleText()
        await postUpPage.clickMobileBackgroundColorInputBtn()
        await postUpPage.inputColorCodeForMobileBackground(testData.colorCodeForPostUP())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
//mobile background color is not updated properly in mobile screen
test("01PU-011 | Mobile Settings | Validate Admin Updated Mobile Background Color Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})


test("01PU-012 | Mobile Settings | Validate Admin Successfully Updated Button Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionButtonTitleText()
        await postUpPage.clickMobileButtonColorInputBtn()
        await postUpPage.inputColorCodeForMobileButton()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()

})
test("01PU-013 | Mobile Screen | Validate Admin Updated Button Color Successfully Show On Mobile Screen", async ({ loginPage, testData, postUpPage, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyMobileButtonColorChangesSuccessfullyApplied(testData.getAppliedColorCodeForButton())
        })
})

test("01PU-014 | Mobile Settings | Validate Admin Successfully Updated Button Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionButtonTextTitleText()
        await postUpPage.clickMobileButtonTextColorInputBtn()
        await postUpPage.inputColorCodeForMobileButtonText()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()

})
test("01PU-015 | Mobile Screen | Validate Admin Updated Button Text Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyButtonTextColor(testData.getButtonTextColorCode())
        })
})

test("01PU-016 | Mobile Settings | Validate Admin Successfully Updated Text Color", async ({ loginPage, postUpPage, testData, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobileTextColorInputBtn()
        await postUpPage.inputColorCode(testData.inputTextColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test("01PU-017 | Mobile Screen | Validate Admin Updated Text Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.verifyTextColor(testData.getTextColorCode())
        })
})

test("01PU-018 | Mobile Settings | Validate Admin Successfully Updated Loading Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobileTextColorInputBtn()
        await postUpPage.inputColorCode(testData.inputLoadingTextColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
//we need to know where applied loading text color in mobile screen
test.skip("01PU-019 | Mobile Screen | Validate Admin Updated Loading Text Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyButtonTextColor(testData.getButtonTextColorCode())
        })
})

test("01PU-020 | Mobile Settings | Validate Admin Successfully Updated Text Submit Highlight Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()

        await postUpPage.clickMobileTextSubmitHighlightColorInputBtn()
        await postUpPage.inputColorCode(testData.inputTextSubmitHighlightColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
//we need to know where applied loading text color in mobile screen
test.skip("01PU-021 | Mobile Screen | Validate Admin Updated Text Submit Highlight Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})

test("01PU-022 | Mobile Settings | Validate Admin Successfully Updated Pop-up Background Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobilePopUpBackgroundColorInputBtn()
        await postUpPage.inputColorCode(testData.inputPopUpBackgroundColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test("01PU-023 | Mobile Screen | Validate Admin Updated Pop-up Background Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPopUpBackground(testData.getPopUpBackgroundColorCode())
        })
})

test("01PU-024 | Mobile Settings | Validate Admin Successfully Update Pop-up Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobilePopUpBackgroundColorInputBtn()
        await postUpPage.inputColorCode(testData.inputPopUpTextColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test("01PU-025 | Mobile Screen | Validate Admin Update Pop-up Text Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPopUpText(testData.getPopUpTextColorCode())
        })
})

test("01PU-026 | Mobile Settings | Validate Admin Successfully Update Pop-up Button Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobilePopUpButtonColorInputBtn()
        await postUpPage.inputColorCode(testData.inputPopUpTextColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test("01PU-027 | Mobile Screen | Validate Admin Update Pop-up Button Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPopUpButtonColor(testData.getPopUpTextColorCode())
        })
})

test("01PU-028 | Mobile Settings | Validate Admin Successfully Update Pop-up Button Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyColorSectionTitleText()
        await postUpPage.expandColorSection()
        await postUpPage.verifyColorSectionTextTitleText()
        await postUpPage.clickMobilePopUpButtonTextColorInputBtn()
        await postUpPage.inputColorCode(testData.inputPopUpTextColorCode())
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test("01PU-029 | Mobile Screen | Validate Admin Update Pop-up Button Text Color Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPopUpButtonTextColor(testData.getPopUpTextColorCode())
        })
})

test("01PU-030 | Mobile Settings | Validate Admin Successfully Upload Font", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandFontsSection()

        await postUpPage.clickToDeleteFont()
        await functions.fontUploadFunction()
        await postUpPage.clickToUploadFont()

        await postUpPage.clickToSelectFont()
        await postUpPage.clickToStartDefaultGame()

})
test("01PU-031 | Mobile Screen | Validate Admin Updated Font Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyUploadFontSuccessfullyApplied()
        })
})

test("01PU-032 | Mobile Settings | Validate Admin Successfully Update Mobile Background Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyImageUploadSectionTitleText()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await postUpPage.deleteMobileEventImage()
                await postUpPage.deleteMobileWelcomeImage()
                await postUpPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickToUploadMobileBackgroundImage()
        await functions.fileUploadCropper()

        await postUpPage.clickToStartDefaultGame()


})
test("01PU-033 | Mobile Screen | Validate Admin Updated Mobile Background Image Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyBackgroundImageChangesSuccessfullyApplied()
        })
})

test("01PU-034 | Mobile Settings | Validate Admin Successfully Update Event Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyImageUploadSectionTitleText()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await postUpPage.deleteMobileEventImage()
                await postUpPage.deleteMobileWelcomeImage()
                await postUpPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickToUploadMobileEventImage()
        await functions.fileUploadCropper()

        await postUpPage.clickToStartDefaultGame()

})
test("01PU-035 | Mobile Screen | Validate Admin Updated Event Image Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyEventImageChangesSuccessfullyApplied()
        })
})

test("01PU-036 | Mobile Settings | Validate Admin Successfully Update Pre-Event Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyImageUploadSectionTitleText()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await postUpPage.deleteMobileEventImage()
                await postUpPage.deleteMobileWelcomeImage()
                await postUpPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickToUploadMobilePreEventImage()
        await functions.fileUploadCropper()

})
test("01PU-037 | Mobile Screen | Validate Admin Updated Pre-Event Image Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyPreEventImageChangesSuccessfullyApplied()
        })
})

test("01PU-038 | Mobile Settings | Validate Admin Successfully Update Pop-up Background", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyImageUploadSectionTitleText()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await postUpPage.deleteMobileEventImage()
                await postUpPage.deleteMobileWelcomeImage()
                await postUpPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickToUploadMobilePopupBG()
        await functions.fileUploadCropper()
        await postUpPage.clickToStartDefaultGame()

})
test("01PU-039 | Mobile Screen | Validate Admin Updated Pop-up Background Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPopUPBackgroundImageChangesSuccessfullyApplied()
        })
})

test("01PU-040 | Mobile Settings | Validate Admin Successfully Update Pre-Event Message", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyDialogsSectionTitleText()
        await postUpPage.expandDialogsSection()
        await postUpPage.verifyPreEventMessageTitleText()
        await postUpPage.clickBlockTypeSectionField()
        await postUpPage.selectH1Tag()
        await postUpPage.inputPreEventMessage(testData.getPreeEventMassage())
        await postUpPage.expandDialogsSection()
})
test("01PU-041 | Mobile Screen | Validate Admin Updated Pre-Event Message Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyPreeEventMassage(testData.getPreeEventMassage())
        })
})

test("01PU-042 | Mobile Settings | Validate Admin Successfully Update Welcome Message", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyDialogsSectionTitleText()
        await postUpPage.expandDialogsSection()
        await postUpPage.verifyPreEventMessageTitleText()
        await postUpPage.inputWelcomeMessageFromDialogs(testData.getWelcomeMassage())
        await postUpPage.clickWelcomeMassageBlockTypeSectionField()
        await postUpPage.selectH1Tag()
        await postUpPage.clickWelcomeMassageBlockTypeSectionField()
        await postUpPage.selectH1TagForBlockType()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-043 | Mobile Settings | Validate Admin Updated Welcome Message Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText(testData.getWelcomeMassage())

        })
})

test("01PU-044 | Mobile Settings | Validate Admin Successfully Update Post Submit Message", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyDialogsSectionTitleText()
        await postUpPage.expandDialogsSection()

        await postUpPage.inputPostSubmitMassageFromDialogs(testData.getPostSubmitMassage())

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-045 | Mobile Settings | Validate Admin Updated Post Submit Message Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPostSubmitMassageText(testData.getPostSubmitMassage())

        })
})

test("01PU-046 | Mobile Settings | Validate Admin Successfully Update Loading Text", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyDialogsSectionTitleText()
        await postUpPage.expandDialogsSection()

        await postUpPage.inputLoadingMassageFromDialogs(testData.getLoadingMassage())

        await postUpPage.clickToStartDefaultGame()
})
//we need to know where applied loading text
test.skip("01PU-047 | Mobile Settings | Validate Admin Update Loading Text Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickSubmitBtn()

                await postUpMobilePage.verifyPostSubmitMassageText(testData.getLoadingMassage())

        })
})

test("01PU-048 | Mobile Settings | Validate Admin Successfully Update Post Text Placeholder", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                await postUpPage.clickMobileSettingsPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.verifyDialogsSectionTitleText()
        await postUpPage.expandDialogsSection()

        await postUpPage.inputPostTextPlaceholderMassageFromDialogs(testData.getPostTextPlaceholderMassage())

        await postUpPage.clickToStartDefaultGame()
})
//need work
test.skip("01PU-049 | Mobile Settings | Validate Admin Post Text Placeholder Successfully Show On Mobile Screen", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.verifyPostTextPlaceholderMassageText()
        })
})

test("01PU-050 | Moderation | Validate Admin Successfully Create a Post With Valid Data", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()

        })
        await postUpPage.clickDefaultModerationSection()

        await postUpPage.clickCreatePostBtn()
        await postUpPage.verifyAddNewPostTitleText()
        await postUpPage.verifyAvaterTitleText()
        await functions.logoImageUploadFunction()
        await postUpPage.clickAvaterUploadInputField()
        await postUpPage.cropperForFanSeeWall()
        await postUpPage.checkImageRadioBtn()
        await functions.bannerImageUploadFunction()
        await postUpPage.clickPostImageUploadInputField()
        await postUpPage.cropperForFanSeeWall()
        await postUpPage.verifyNameTitleText()
        await postUpPage.inputPostName(testData.postName())
        await postUpPage.verifyUserNameTitleText()
        await postUpPage.inputPostUserName(await testData.getFirstname())
        await postUpPage.verifyPostTextTitleText()
        await postUpPage.inputPostText(await testData.getRandomPhoneNumber())
        await postUpPage.clickSaveBtn()
        await postUpPage.clickRefreshBtn()
})

test("01PU-051 | Moderation | Validate Admin Successfully Approved Custom Adds", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()

        })
        await postUpPage.clickDefaultModerationSection()
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCustomAddsOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickPostApproveBtn()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyApprovePostSuccessfullyShowOnPlaylist()
        // await postUpPage.clickClearAllBtn()
        // await postUpPage.clickRefreshBtn()
        // await postUpPage.clickPostLikeBtn()
        // await postUpPage.clickPostFevoraitBtn()
        // await postUpPage.clickPostFlaggedBtn()
})

test("01PU-052 | Mainboard | Validate Error Massage Successfully Show When Clicking On Save Button Without Name Data", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()

        })
        await postUpPage.clickModerationAddPlusBtn()
        await postUpPage.verifyModertaionAddTitleText()

        await postUpPage.clearModerationNameField()
        await postUpPage.clickSaveBtn()

        await postUpPage.verifyModertaionAddTitleRequireMassage()

})

test("01PU-053 | Mainboard | Validate MainBoard Url Copy Functionality Works Properly", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
                await postUpPage.clickOnMainboardDefaultUrlOpneBtn()
                await postUpPage.clickOnMainboardDefaultUrlCopyBtn()
        })

        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                await postUpPage.copyAndStoreDataToClipboardForMainboard(URL);
                const ele = postUpPage.retrieveDataFromJSONFileForMainboard()
                console.log(ele);
        })
})
//have an issue
test("01PU-053 | Mainboard | Validate Admin Successfully Update Mainboard Margin", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()
                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.inputLeftRightMarginParcent()
        await postUpPage.inputTopBottomMarginParcent()
        await postUpPage.clickOutSideOfInputField()


})
//have an issue
test("01PU-054 | Mainboard Screen | Validate Updated Mainboard Margin Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()

})

//have an issue
test("01PU-055 | Mainboard | Validate Admin Successfully Update Mainboard Most Recent Post", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.inputMostRecentPostsCount()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()

})
//have an issue
test("01PU-056 | Mainboard Screen | Validate Updated Mainboard Most Recent Post Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()

})

test("01PU-057 | Mainboard | Validate Admin Successfully Update Mainboard Tile Animation Speed Second", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.inputTileAnimationSpeedSecond()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()

})
//have an issue
test("01PU-058 | Mainboard Screen | Validate Updated Mainboard Tile Animation Speed Second Successfully Applied", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()

})

test("01PU-057 | Mainboard | Validate Admin Successfully Enable Mainboard Loop Video", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.enableLoopVideoCheckBox()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()

})
//have an issue
test("01PU-058 | Mainboard Screen | Validate Updated Mainboard Loop Video Successfully Applied", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()

})


test("01PU-059 | Mainboard | Validate Admin Successfully Update Mainboard User Profile Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.mainboardEnableShowAvatar()
        await postUpPage.mainboardEnableShowUsername()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-060 | Mainboard | Validate Updated Mainboard User Profile Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-061 | Mainboard | Validate Admin Successfully Update Mainboard Social Icons Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.mainboardEnableSocialIcons()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-062 | Mainboard | Validate Updated Mainboard Social Icons Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-063 | Mainboard | Validate Admin Successfully Update Mainboard Post Content Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.mainboardEnableAllowText()
        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
//need to know about implementation
test("01PU-064 | Mainboard | Validate Updated Mainboard Post Content Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-065 | Mainboard | Validate Admin Successfully Update Mainboard Featured Post Content Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.mainboardEnableFeaturePostShowAvatar()
        await postUpPage.mainboardEnableFeaturePostShowUserName()
        await postUpPage.mainboardEnableFeaturePostShowSocialIcons()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-066 | Mainboard | Validate Updated Mainboard Featured Post Content Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-067 | Mainboard | Validate Admin Successfully Update Mainboard Automate Featured Posts Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.mainboardEnableFeaturePostShowAutomatedFeaturePost()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test("01PU-068 | Mainboard | Validate Updated Mainboard Automate Featured Posts Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-069 | Mainboard Settings | Validate Admin Successfully Update Mainboard Default Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectDefaultLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-070 | Mainboard Screen | Validate Updated Mainboard Default Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-071 | Mainboard Settings | Validate Admin Successfully Update Mainboard Multiple Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectMultipleLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-072 | Mainboard Screen | Validate Updated Mainboard Multiple Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-073 | Mainboard Settings | Validate Admin Successfully Update Mainboard Single Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSingleLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-074 | Mainboard Screen | Validate Updated Mainboard Single Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-075 | Mainboard Settings | Validate Admin Successfully Update Mainboard Dynamic Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectDynamicLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-076 | Mainboard Screen | Validate Updated Mainboard Dynamic Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-077 | Mainboard Settings | Validate Admin Successfully Update Mainboard Single Row Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSingleRowLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-078 | Mainboard Screen | Validate Updated Mainboard Single Row Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-079 | Mainboard Settings | Validate Admin Successfully Update Mainboard Two Row Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectTwoRowLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-080 | Mainboard Screen | Validate Updated Mainboard Two Row Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})


test("01PU-081 | Mainboard Settings | Validate Admin Successfully Update Mainboard Multiple 1.4 Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectMultiple14LayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-082 | Mainboard Screen | Validate Updated Mainboard Multiple 1.4 Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})


test("01PU-083 | Mainboard Settings | Validate Admin Successfully Update Mainboard Single 1.4 Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSingle14LayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-084 | Mainboard Screen | Validate Updated Mainboard Single 1.4 Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})


test("01PU-085 | Mainboard Settings | Validate Admin Successfully Update Mainboard Lower Third Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectLowerThirdLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-086 | Mainboard Screen | Validate Updated Mainboard Lower Third Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})


test("01PU-087 | Mainboard Settings | Validate Admin Successfully Update Mainboard Social Left Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSocialLeftLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-088 | Mainboard Screen | Validate Updated Mainboard Social Left Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-089 | Mainboard Settings | Validate Admin Successfully Update Mainboard Social Right Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSocialRightLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-090 | Mainboard Screen | Validate Updated Mainboard Social Right Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-091 | Mainboard Settings | Validate Admin Successfully Update Mainboard Social Bottom Layout", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnLayoutSelectionField()
        await postUpPage.clickToSelectSocialBottomLayoutOption()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-092 | Mainboard Screen | Validate Updated Mainboard Social Bottom Layout Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-093 | Mainboard | Validate Admin Successfully Update Mainboard Fade Tile Animation Style", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnTileAnimationStyleSelectionField()
        await postUpPage.clickToSelectFadeTileAnimationStyle()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-094 | Mainboard | Validate Updated Mainboard Fade Tile Animation Style Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-095 | Mainboard | Validate Admin Successfully Update Mainboard Flip X Tile Animation Style", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnTileAnimationStyleSelectionField()
        await postUpPage.clickToSelectFlipXTileAnimationStyle()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-096 | Mainboard | Validate Updated Mainboard Flip X Tile Animation Style Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-097 | Mainboard | Validate Admin Successfully Update Mainboard Flip Y Tile Animation Style", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnTileAnimationStyleSelectionField()
        await postUpPage.clickToSelectFlipYTileAnimationStyle()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-098 | Mainboard | Validate Updated Mainboard Flip Y Tile Animation Style Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

test("01PU-099 | Mainboard | Validate Admin Successfully Update Mainboard Random Flip Tile Animation Style", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await page.waitForNavigation()
        await loginPage.login(data.username, data.password)

        await test.step("Click On The Trivia Section", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickToExpandLastGameMenu()

                await postUpPage.clickDefultGameStopBtn()
                // await postUpPage.clickToExpandMainboard()

                await postUpPage.clickOnDefaultMainboard()
        })
        await postUpPage.clickOnTileAnimationStyleSelectionField()
        await postUpPage.clickToSelectRandomFlipTileAnimationStyle()

        await postUpPage.clickOutSideOfInputField()

        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-100 | Mainboard | Validate Updated Mainboard Random Flip Tile Animation Style Successfully Show On Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await postUpPage.gotoMainboardUrl()
        })
        await postUpPage.vefiryMainboardMargin()
})

// start work tommorw
test("01PU-101 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Title Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyPostTextTitleText()
        await postUpPage.clickPostTextColorSection()
        await postUpPage.inputPostTextColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-102 | Mainboard | Validate Admin Updated Mainboard Color Section Title Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-103 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Post Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyBackgroundTitleText()
        await postUpPage.clickBackgroundColorSection()
        await postUpPage.inputBackgroundColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-104 | Mainboard | Validate Admin Updated Mainboard Color Section Post Text Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-105 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Background Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyTileBackgroundTitleText()
        await postUpPage.clickTileBackgroundColorSection()
        await postUpPage.inputTileBackgroundColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-106 | Mainboard | Validate Admin Updated Mainboard Color Section Background Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-107 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Tile Background Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyFeaturedPostTileTitleText()
        await postUpPage.clickFeaturedPostTileColorSection()
        await postUpPage.inputFeaturedPostTileColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-108 | Mainboard | Validate Admin Updated Mainboard Color Section Tile Background Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})

test("01PU-109 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Featured Post Tile Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyFeaturedPostBackgroundTitleText()
        await postUpPage.clickFeaturedPostBackgroundColorSection()
        await postUpPage.inputFeaturedPostBackgroundColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-110 | Mainboard | Validate Admin Updated Mainboard Color Section Featured Post Tile Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})


test("01PU-111 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Featured Post Background Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyFeaturedPostBackgroundTitleText()
        await postUpPage.clickFeaturedPostBackgroundColorSection()
        await postUpPage.inputFeaturedPostBackgroundColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-112 | Mainboard | Validate Admin Updated Mainboard Color Section Featured Post Background Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})

test("01PU-113 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Featured Featured Post Text Color", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyFeaturedPostTextTitleText()
        await postUpPage.clickFeaturedPostTextColorSection()
        await postUpPage.inputFeaturedPostTextColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-114 | Mainboard | Validate Admin Updated Mainboard Color Section Featured Post Text Color Changes Successfully Show On Mainboard", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})

test("01PU-115 | Mainboard | Validate Admin Successfully Updated Font For Mainboard", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandColorSection()
        await postUpPage.verifyFeaturedPostTextTitleText()
        await postUpPage.clickFeaturedPostTextColorSection()
        await postUpPage.inputFeaturedPostTextColor()
        await postUpPage.colorWindowSaveBtn()
        await postUpPage.clickToStartDefaultGame()
})
test.skip("01PU-116 | Mainboard | Validate Admin Updated Mainboard Font Successfully Show On Mainboard", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()

        })
})

test("01PU-117 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Background Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        await postUpPage.verifyBackgroundTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickBackgroundImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-118 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Background Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-119 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Default Mainboard Tile Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        await postUpPage.verifyDefaultMainboardTileTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickDefaultMainboardTileImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-120 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Default Mainboard Tile Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-121 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Featured Post Overlay Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        await postUpPage.verifyFeaturedPostOverlayTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickFeaturedPostOverlayImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-122 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Featured Post Overlay Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-123 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Image Upload 1 Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        // await postUpPage.verifyImageUpload1TitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickImageUpload1ImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-124 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Image Upload 1 Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-125 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Image Upload 2 Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        await postUpPage.verifyImageUpload2TitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickImageUpload2ImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-126 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Image Upload 2 Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})
test("01PU-127 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Internal Source Icon Image", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickMainBoardPage()
        })
        await postUpPage.collapseSettingsSection()
        await postUpPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await postUpPage.deleteInternalSourceIcon()
                await postUpPage.deleteImageUpload1()
                await postUpPage.deleteImageUpload2()
                await postUpPage.deleteFeaturedPostOverlay()
                await postUpPage.deleteDefaultMainboardTile()
                await postUpPage.deleteBackgroundImage()
        })
        await postUpPage.verifyInternalSourceIconTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await postUpPage.clickInternalSourceIconImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("01PU-128 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Internal Source Icon Image Changes Successfully Show On Mobile Screen", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                await postUpMobilePage.verifyWelcomeMassageText()
        })
})

test("01PU-129 | Moderation | Validate Admin Successfully Create a Post With Valid Data", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickCreatePostBtn()
        await postUpPage.verifyAddNewPostTitleText()
        await postUpPage.verifyAvaterTitleText()
        await functions.logoImageUploadFunction()
        await postUpPage.clickAvaterUploadInputField()
        await postUpPage.cropperForFanSeeWall()
        await postUpPage.checkImageRadioBtn()
        await functions.bannerImageUploadFunction()
        await postUpPage.clickPostImageUploadInputField()
        await postUpPage.cropperForFanSeeWall()
        await postUpPage.verifyNameTitleText()
        await postUpPage.inputPostName("Custom Adds")
        await postUpPage.verifyUserNameTitleText()
        await postUpPage.inputPostUserName(await testData.getFirstname())
        await postUpPage.verifyPostTextTitleText()
        await postUpPage.inputPostText(await testData.getRandomPhoneNumber())
        await postUpPage.clickSaveBtn()
        await postUpPage.clickRefreshBtn()
})
test("01PU-130 | Moderation | Validate Admin Successfully Filter Custom Adds", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCustomAddsOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCustomAddsPostSuccessfullyShow()
})
test("01PU-131 | Moderation | Validate Admin Successfully Approved Custom Adds", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCustomAddsOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickPostApproveBtn()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyApprovePostSuccessfullyShowOnPlaylist()
        // await postUpPage.clickClearAllBtn()
        // await postUpPage.clickRefreshBtn()
        // await postUpPage.clickPostLikeBtn()
        // await postUpPage.clickPostFevoraitBtn()
        // await postUpPage.clickPostFlaggedBtn()
})
test("01PU-132 | Moderation | Validate Admin Successfully Filter With Sort By", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickRefreshBtn()
        await postUpPage.clickPostApproveBtn()
        await postUpPage.clickSortByOptionInputField()
        await postUpPage.clickSortByApprovedOption()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCustomAddsPostSuccessfullyShow()
        await postUpPage.clickPostLikeBtn()
        await postUpPage.clickSortByOptionInputField()
        await postUpPage.clickSortByLikedOption()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCustomAddsPostSuccessfullyShow()
        await postUpPage.clickPostFevoraitBtn()
        await postUpPage.clickPostFlaggedBtn()
        await postUpPage.clickSortByOptionInputField()
        await postUpPage.clickSortByApprovedOption()
        await postUpPage.clickSortByLikedOption()
        await postUpPage.clickSortByFlaggedOption()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged()
        await postUpPage.clickPostDeleteBtn()
        await postUpPage.clickSortByOptionInputField()
        await postUpPage.clickSortByFlaggedOption()
        await postUpPage.clickSortByDeletedOption()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged()
        // await postUpPage.clickPostDeleteBtn()
})
test("01PU-133 | Mobile Screen | User Successfully Create A Post With Library", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                // await postUpMobilePage.logoUploadHelper()
                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.clickDeleteBtn()
                await postUpMobilePage.clickOpenLibraryUploadBtn()
                await postUpMobilePage.inputPostText()
                await postUpMobilePage.clickSubmitBtn()
        })
})
test("01PU-134 | Moderation | Validate User Created Post With Library Successfully Show On Admin Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCueOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCuePostSuccessfullyShow()
        await postUpPage.clickPostDeleteBtn()
})
test("01PU-135 | Mobile Screen | User Successfully Create A Post With Take Photo", async ({ loginPage, postUpPage, testData, postUpMobilePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                // await postUpMobilePage.logoUploadHelper()
                await postUpMobilePage.uploadImageClickingOnTakePhoto()
                await postUpMobilePage.clickDeleteBtn()
                await postUpMobilePage.uploadImageClickingOnTakePhoto()
                await postUpMobilePage.inputPostTextForTakePhotoPost()
                await postUpMobilePage.clickSubmitBtn()
        })
})
test("01PU-136 | Moderation | Validate User Created Post With Take Photo Successfully Show On Admin Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCueOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCuePostWithTakePhotoSuccessfullyShow()
        await postUpPage.clickPostDeleteBtn()
})
test("01PU-137 | Mobile Screen | User Successfully Create A Post With Record Video", async ({ loginPage, postUpMobilePage, postUpPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await postUpMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await postUpMobilePage.clickMenuPlusBtn()
                await postUpMobilePage.clickHomeBtn()
                // await postUpMobilePage.logoUploadHelper()
                await postUpMobilePage.uploadVideoClickingOnRecordVideoBtn()
                await postUpMobilePage.clickDeleteBtn()
                await postUpMobilePage.uploadVideoClickingOnRecordVideoBtn()
                await postUpMobilePage.inputPostTextForRecordVideoPost()
                await postUpMobilePage.clickSubmitBtn()
        })
})
test("01PU-138 | Moderation | Validate User Created Post With Record Video Successfully Show On Admin Section", async ({ loginPage, testData, postUpPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await postUpPage.clickPostUpPage()
                await postUpPage.clickModerationPage()
        })
        await postUpPage.clickClearAllBtn()
        await postUpPage.clickSourcesInputField()
        await postUpPage.clickOnCueOptions()
        await postUpPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await postUpPage.clickRefreshBtn()
        await postUpPage.verifyCuePostWithRecordVideoSuccessfullyShow()
        await postUpPage.clickPostDeleteBtn()
})