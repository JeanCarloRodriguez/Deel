const Page = require('../BasePage');

class EntityDetails extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeMessage() {
        return $('.text-center h2');
    }

    get passwordInpu() {
        return $('input[name="password"]');
    }

    get loginButton() {
        return $('button[data-qa="log-in"]');
    }

    /**
     * Get the welcome message
     */
    async getWelcomeMessage() {
        await this.welcomeMessage.text;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('create-account/company');
    }
}

module.exports = new EntityDetails();
