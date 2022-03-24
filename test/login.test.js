const { assert } = require('chai')
const loginPage = require('../pages/login.page')
const constants = require('../constants')
const configData = require('../config')

describe('login page feature test', function () {

    it('verify login page title', function () {
        browser.url('/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('login page title is: ', title)
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')
    })
    it('verify Sign in link', function () {
        assert.equal(true, loginPage.isSignInLinkExist(), 'sign in link is not present')
    })
    it('Verify Account got created', function () {
        //Click SignIn on the landing page and Create Account by entering email address
        loginPage.doCreateAccount(configData.emailID, configData.firstName, configData.lastName, configData.pwd, configData.address, configData.city, configData.zip)
    })
    it('verify correct name and surname is displayed', function () {
        assert.equal(true, loginPage.isNameDisplayed(), 'name not displayed')
    })
    it('verify able to add product and product details showing  correctly', function () {
        loginPage.doLogin(configData.username, configData.password)
        loginPage.addProduct()
        assert.equal(true, loginPage.isTshirtNameDisplayed(), 't-shirt name not available')

    })
})