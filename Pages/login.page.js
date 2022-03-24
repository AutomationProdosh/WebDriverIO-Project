const elementUtil = require('../util/elementUtil');
const constants = require('../constants');
const { default: $ } = require('webdriverio/build/commands/browser/$');

class LoginPage {

    //Page locators
    get signinLink() { return $('=Sign in') }
    get createUserName() { return $('#email_create') }
    get createAnAccountBtn() { return $('#SubmitCreate') }
    get selectTitle() { return $('#uniform-id_gender1') }
    get firstName() { return $('#customer_firstname') }
    get lastName() { return $('#customer_lastname') }
    get createPassword() { return $('#passwd') }
    get addfirstName() { return $('#firstname') }
    get addlastName() { return $('#lastname') }
    get addAddress() { return $('#address1') }
    get city() { return $('#city') }
    get state() { return $('#id_state') }
    get zip() { return $('#postcode') }
    get country() { return $('#id_country') }
    get mobilePhone() { return $('#phone_mobile') }
    get registerBtn() { return $('submitAccount') }
    get nameDisplayed() { return $('=prodosh demo') }
    get tShirts() { return $('=T-shirts') }
    get tShirtName() { return $('=Faded Short Sleeve T-shirts') }
    get addToCartBtn() { return $('=Add to cart') }
    get proceedToCheckOut() { return $('=Proceed to checkout') }
    get iAgreeSelect() { return $('#uniform-cgv') }
    get username() { return $('#email') }
    get password() { return $('#passwd') }
    get signinBtn() { return $('#SubmitLogin') }

    //Page actions
    getPageTitle() {
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }

    isSignInLinkExist() {
        return elementUtil.doIsDisplayed(this.signinLink)
    }
    //Validate on the landing screen - correct name and surname is displayed
    isNameDisplayed() {
        return elementUtil.doGetText(this.nameDisplayed)
    }
    isTshirtNameDisplayed() {
        return elementUtil.doGetText(this.tShirtName)
    }

    doLogin(emailID, pwd) {
        elementUtil.doClick(this.signinLink)
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        elementUtil.doClick(this.signinBtn)
    }
    doCreateAccount(emailID, firstName, lastName, pwd, address, city, zip) {
        //Click SignIn on the landing page and Create Account by entering email address
        elementUtil.doClick(this.signinLink)
        elementUtil.doSetValue(this.createUserName, emailID)
        elementUtil.doClick(this.createAnAccountBtn)

        //Enter details and click on Register
        elementUtil.doClick(this.selectTitle)
        elementUtil.doSetValue(this.firstName, firstName)
        elementUtil.doSetValue(this.lastName, lastName)
        elementUtil.doSetValue(this.createPassword, pwd)

        elementUtil.doSetValue(this.addfirstName, firstName)
        elementUtil.doSetValue(this.addlastName, lastName)
        elementUtil.doSetValue(this.addAddress, address)
        elementUtil.doSetValue(this.city, city)
        this.state.selectByVisibleText('Alabama')
        elementUtil.doSetValue(this.zip, zip)
        this.country.selectByVisibleText('United States')
        elementUtil.doClick(this.registerBtn)
    }
    addProduct() {
        elementUtil.doClick(this.tShirts)
        elementUtil.doClick(this.tShirtName)
        elementUtil.doClick(this.addToCartBtn)
        elementUtil.doClick(this.proceedToCheckOut)

        elementUtil.doClick(this.proceedToCheckOut)
        elementUtil.doClick(this.proceedToCheckOut)
        elementUtil.doClick(this.proceedToCheckOut)
        elementUtil.doClick(this.iAgreeSelect)
        elementUtil.doClick(this.proceedToCheckOut)

    }
}

module.exports = new LoginPage()