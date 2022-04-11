const Page = require('../../../BasePage');

class CompliancePage extends Page {

    get createContractButton() {
        return $('button.submit-compliance')
    }
   
    async clickCreateContractButton() {
        await this.createContractButton.click()
    }
}

module.exports = new CompliancePage();