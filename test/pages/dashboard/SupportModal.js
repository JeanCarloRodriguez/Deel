const Page = require('../BasePage');

class SupportModal extends Page {
    
    async close() {
        await $('.button-close').click();
    }
}

module.exports = new SupportModal();
