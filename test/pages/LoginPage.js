const Page = require('./BasePage');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailInput() {
        return $('input[name="email"]');
    }

    get passwordInpu() {
        return $('input[name="password"]');
    }

    get loginButton() {
        return $('button[data-qa="log-in"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email and password
     */
    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInpu.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
