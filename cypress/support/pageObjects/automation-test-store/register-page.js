export class RegisterPage {

     
    navigateToRegisterPage() {
        cy.visit('https://automationteststore.com/index.php?rt=account/create')
    }

    enterFirstName(firstname) {
        cy.get('#AccountFrm_firstname').type(firstname)
    }

    enterLastName(lastname) {
        cy.get('#AccountFrm_lastname').type(lastname)
    }

    enterEmail(emailadress) {
        cy.get('#AccountFrm_email').type(emailadress)  
    }

    enterAdress(adress) {
        cy.get('#AccountFrm_address_1').type(adress)
    }

    enterCity(city) {
        cy.get('#AccountFrm_city').type(city)
    }

    selectCountry(countryName) {
        cy.get('#AccountFrm_country_id').select(countryName) 
    }

    selectState(stateName) {
        cy.get('#AccountFrm_zone_id').select(stateName)
    }

    enterZipCode(zipcode) {
        cy.get('#AccountFrm_postcode').type(zipcode)
    }

    enterLoginName(loginName) {
        cy.get('#AccountFrm_loginname').type(loginName)
    }

    enterPassword(password) {
        cy.get('#AccountFrm_password').type(password)
    }

    confirmPassword(password) {
        cy.get('#AccountFrm_confirm').type(password)
    }

    newsletterOption(selectLable) {
        cy.get('[type="radio"]').check()
    }

    selectPrivacyPolicy() {
        cy.get('#AccountFrm_agree').check()
    }

    clickContinue() {
        cy.get('#AccountFrm > div.form-group > div > div > button').click()
    }
}
