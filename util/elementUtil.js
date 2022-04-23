const constants = require('../constants')

class ElementUtil {

    doClick(element) {
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value) {
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element) {
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element) {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(function() {
            return (browser.getTtile() === pageTitle)
        }, 1000, 'title is not displayed after the given time'
    )
        return browser.getTtile()
    }
}

module.exports = new ElementUtil()