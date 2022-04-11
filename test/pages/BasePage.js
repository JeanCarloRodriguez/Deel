/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://app.deel.training/${path}`)
    }

    async setDropDownValue(element, value) {
        await element.click();
        await element.setValue(value)
        // send Enter key
        await browser.keys("\uE007"); 
    }

    async selectDateFromCalendar(element, date) {
        await element.click()
        await $(`//*[@aria-label="${date}"]/parent::button`).click()
    }
}
