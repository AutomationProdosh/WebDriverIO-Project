const elementUtil = require('../../util/elementUtil');
const constants = require('../../constants');
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

    async doLogin(emailID, pwd) {
        await elementUtil.doClick(this.signinLink)
        await elementUtil.doSetValue(this.username, emailID)
        await elementUtil.doSetValue(this.password, pwd)
        await elementUtil.doClick(this.signinBtn)
    }
    async doCreateAccount(emailID, firstName, lastName, pwd, address, city, zip) {
        //Click SignIn on the landing page and Create Account by entering email address
        await elementUtil.doClick(this.signinLink)
        await elementUtil.doSetValue(this.createUserName, emailID)
        await elementUtil.doClick(this.createAnAccountBtn)

        //Enter details and click on Register
        await elementUtil.doClick(this.selectTitle)
        await elementUtil.doSetValue(this.firstName, firstName)
        await elementUtil.doSetValue(this.lastName, lastName)
        await elementUtil.doSetValue(this.createPassword, pwd)

        await elementUtil.doSetValue(this.addfirstName, firstName)
        await elementUtil.doSetValue(this.addlastName, lastName)
        await elementUtil.doSetValue(this.addAddress, address)
        await elementUtil.doSetValue(this.city, city)
        await this.state.selectByVisibleText('Alabama')
        await elementUtil.doSetValue(this.zip, zip)
        await this.country.selectByVisibleText('United States')
        await elementUtil.doClick(this.registerBtn)
    }
    async addProduct() {
        await elementUtil.doClick(this.tShirts)
        await elementUtil.doClick(this.tShirtName)
        await elementUtil.doClick(this.addToCartBtn)
        await elementUtil.doClick(this.proceedToCheckOut)

        await elementUtil.doClick(this.proceedToCheckOut)
        await elementUtil.doClick(this.proceedToCheckOut)
        await elementUtil.doClick(this.proceedToCheckOut)
        await elementUtil.doClick(this.iAgreeSelect)
        await elementUtil.doClick(this.proceedToCheckOut)

    }
}

module.exports = new LoginPage()

