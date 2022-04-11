const Page = require('../../../BasePage');

class DefineDatesPage extends Page {

    get nextButton() {
        return $('button.submit-define-dates')
    }
   
    async clickNextButton() {
        await this.nextButton.click()
    }
}

module.exports = new DefineDatesPage();
