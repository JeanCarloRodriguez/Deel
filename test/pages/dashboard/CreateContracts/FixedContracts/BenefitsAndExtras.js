const Page = require('../../../BasePage');

class BenefitsAndExtras extends Page {

    get specialClauseButton() {
        return $('button[data-qa="add-a-special-clause"]')
    }

    get specialClauseTextArea() {
        return $('div[data-qa="special-clause-card"] textarea')
    }
    
    get nextButton() {
        return $('button.submit-extras')
    }

    async addSpecialClause(specialClause) {
        await this.specialClauseButton.click()
        await this.specialClauseTextArea.setValue(specialClause)
    }
   
    async clickNextButton () {
        await this.nextButton.click()
    }
}

module.exports = new BenefitsAndExtras();