const Page = require('../../../BasePage');

class GeneralInfoPage extends Page {

    get contractNameInput () {
        return $('//*[text()="Contract name"]/following-sibling::input')
    }

    get contractorsTaxResidenceDropDown() {
        return $('div[data-qa="contractor-tax-residence"] .deel-ui__select__input input')
    }

    get stateDropDown() {
        return $('div[data-qa="contractor-tax-residence-province"] .deel-ui__select__input input')
    }

    get jobTitleInput() {
        return $('//*[text()="Job title"]/following-sibling::input')
    }

    get seniorityLevelDropDown() {
        return $('//*[text()="Seniority level"]/following-sibling::div//input')
    }

    get scopeOfWorkTextArea() {
        return $('textarea[name=scope]')
    }

    get contractorStartDate() {
        return $('.deel-ui__calendar-input-container__input_content_value')
    }

    get nextButton() {
        return $('button[data-qa="next"]')
    }
   
    async fillForm({ contractName, taxResidence, state, jobTitle, seniorityLevel, scopeOfWork, startDate }) {
        await this.contractNameInput.setValue(contractName);
        await this.setDropDownValue(this.contractorsTaxResidenceDropDown, taxResidence)
        await this.setDropDownValue(this.stateDropDown, state)
        await this.jobTitleInput.setValue(jobTitle)
        await this.setDropDownValue(this.seniorityLevelDropDown, seniorityLevel)
        await this.scopeOfWorkTextArea.setValue(scopeOfWork)
        await this.selectDateFromCalendar(this.contractorStartDate, startDate)
        await this.nextButton.click()
    }
}

module.exports = new GeneralInfoPage();
