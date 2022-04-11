const Page = require('../BasePage');

class ContractTypePage extends Page {
   
    async selectFixedRateContractType() {
        await $('.heap-start-fixed-contract > div').click();
    }
}

module.exports = new ContractTypePage();