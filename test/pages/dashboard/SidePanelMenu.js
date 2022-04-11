const Page = require('../BasePage');

class SidePanelMenu extends Page {
    /**
     * define selectors using getter methods
     */
    get createAContractBtn() {
        return $('p=Create A Contract');
    }

    async clickCreateAContractBtn() {
        await this.createAContractBtn.click();
    }
}

module.exports = new SidePanelMenu();
