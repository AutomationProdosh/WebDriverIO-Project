//const { assert } = require('chai')
const loginPage = require('../pageobjects/login.page')
const constants = require('../../constants')
const configData = require('../../config')
const assert = require("assert")

describe('login page feature test', () => {

    it('verify login page title', async () => {
        await browser.url("http://automationpractice.com/index.php")
        browser.maximizeWindow()
        const title = await loginPage.getPageTitle() 
        console.log('login page title is: ', title)
        await expect(browser).toHaveTitle(constants.LOGIN_PAGE_TITLE)
    })
    it('verify Sign in link', async () => {
        await expect(loginPage.isSignInLinkExist()).toBeDisplayed()
    })
    xit('Verify Account got created', async () => {
        //Click SignIn on the landing page and Create Account by entering email address
        loginPage.doCreateAccount(configData.emailID, configData.firstName, configData.lastName, configData.pwd, configData.address, configData.city, configData.zip)
    })
    xit('verify correct name and surname is displayed', async () => {
        //assert.equal(true, loginPage.isNameDisplayed(), 'name not displayed')
        await expect(loginPage.isNameDisplayed()).toBeDisplayed()
    })
    xit('verify able to add product and product details showing  correctly', async () => {
        loginPage.doLogin(configData.username, configData.password)
        await loginPage.addProduct()
        //assert.equal(true, loginPage.isTshirtNameDisplayed(), 't-shirt name not available')
        await expect(loginPage.isTshirtNameDisplayed()).toBeDisplayed()
        

    })
})