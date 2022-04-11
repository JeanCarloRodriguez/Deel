const Page = require('../../../BasePage');

class PaymentDetailsPage extends Page {

    get currencyDropDown () {
        return $('div[data-qa="currency-select"] input')
    }

    get paymentRateInput() {
        return $('.money-input-new-input-container input')
    }

    get paymentFrequencyDropdown() {
        return $('div[data-qa="cycle-select"] input')
    }
    
    get nextButton() {
        return $('button.submit-payments-details')
    }
   
    async fillForm({ currency, paymentRate, paymentFrequency }) {
        // await $('.deel-ui__status-box-container').waitForDisplayed({ timeout: 8000 })
        await this.setDropDownValue(this.currencyDropDown, currency)
        await this.paymentRateInput.setValue(paymentRate)
        await this.setDropDownValue(this.paymentFrequencyDropdown, paymentFrequency)
        await this.nextButton.click()
    }
}

module.exports = new PaymentDetailsPage();
