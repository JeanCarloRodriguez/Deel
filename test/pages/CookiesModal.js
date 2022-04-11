const Page = require('./BasePage');

class CookiesModal extends Page {
    /**
     * define selectors using getter methods
     */
    get allowAllCookiesBtn() {
        return $('a#CybotCookiebotDialogBodyButtonAccept');
    }

    /**
     * Accept all cookies
     */
    async clickAllowAllCokkiesBtn() {
        await this.allowAllCookiesBtn.waitForClickable({ timeout: 8000 });
        await this.allowAllCookiesBtn.click();
    }
}

module.exports = new CookiesModal();
