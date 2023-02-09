/// <reference types="Cypress" />
import { RegisterPage } from "../../support/pageObjects/automation-test-store/Register-Page";

let registerPage= new RegisterPage

describe('Test the register page', () =>{

    it('Should register sucsessfuly', () => {
        registerPage.navigateToRegisterPage()
        cy.url().should('contain', 'account/create')
        registerPage.enterFirstName('Diana')
        registerPage.enterLastName('Anaid')
        registerPage.enterEmail('oorxoo@cuan.email')
        registerPage.enterAdress('Fara Nume')
        registerPage.enterCity('Timisoara')
        registerPage.selectCountry('Romania')
        registerPage.selectState('Timis')
        registerPage.enterZipCode('123456')
        registerPage.enterLoginName('Anaid')
        registerPage.enterPassword('Password')
        registerPage.confirmPassword('Password')
        registerPage.newsletterOption(0)
        registerPage.selectPrivacyPolicy()
        registerPage.clickContinue()
        cy.get('span.maintext').should('have.text','YOUR ACCOUNT HAS BEEN CREATED!')
    })
})