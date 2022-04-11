const LoginPage = require('../pages/LoginPage')
const CookiesModal = require('../pages/CookiesModal')
const { newClient } = require('../users.json')
const SidePanelMenu = require('../pages/dashboard/SidePanelMenu')
const SupportModal = require('../pages/dashboard/SupportModal')
const ContractTypePage = require('../pages/dashboard/ContractTypePage')
const GeneralInfoPage = require('../pages/dashboard/CreateContracts/FixedContracts/GeneralInfoPage')
const DateHelper = require('../helpers/DateHelper')
const PaymentDetailsPage = require('../pages/dashboard/CreateContracts/FixedContracts/PaymentDetailsPage')
const DefineDatesPage = require('../pages/dashboard/CreateContracts/FixedContracts/DefineDatesPage')
const BenefitsAndExtras = require('../pages/dashboard/CreateContracts/FixedContracts/BenefitsAndExtras')
const CompliancePage = require('../pages/dashboard/CreateContracts/FixedContracts/CompliancePage')

describe('Fixed Contracts', () => {

    before(async () => {
        await browser.maximizeWindow()
        await LoginPage.open()

        await LoginPage.login(newClient.email, newClient.password)
        await CookiesModal.clickAllowAllCokkiesBtn()
        await SupportModal.close()
    })

    it('create a fixed contract', async () => {
        const generalInfoData = { 
            contractName: 'Internatinal',
            taxResidence: 'United States',
            state: 'Colorado',
            jobTitle: 'Test Automation Engineer',
            seniorityLevel: 'Senior (Individual Contributor Level 3)',
            scopeOfWork: 'Scope',
            startDate: DateHelper.substractDaysToCurrent()
        }

        const paymentDetailsData = { 
            currency: 'GBP - British Pound',
            paymentRate: 1000,
            paymentFrequency: 'Weekly'
        }
        await SidePanelMenu.clickCreateAContractBtn()
        await ContractTypePage.selectFixedRateContractType()
        await GeneralInfoPage.fillForm(generalInfoData)

        await PaymentDetailsPage.fillForm(paymentDetailsData)
        await DefineDatesPage.clickNextButton()

        await BenefitsAndExtras.addSpecialClause('Help training new onbordings')
        await BenefitsAndExtras.clickNextButton()
        await CompliancePage.clickCreateContractButton()
    });
});


