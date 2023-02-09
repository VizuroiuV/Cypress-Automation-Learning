/// <reference types="Cypress" />
import { LoginPage } from "../../support/pageObjects/automation-test-store/Login-Page"

let loginPage = new LoginPage

 describe('Test the login page', () => {

   it('Should login successfuly', () => {
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.enterLoginName('Anaid')
      loginPage.enterPassword('Password')
      loginPage.clickLogin()
      cy.get('.maintext').should('have.text', ' My Account')
      cy.get('.subtext').should('have.text', 'Diana')
   })

   it('login should fail without entering the login name', () =>{ 
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.enterPassword('Password')
      loginPage.clickLogin()
      cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: Incorrect login or password provided.')
   })
     
   it('login should fail without entering the password', () =>{ 
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.enterLoginName('Anaid')
      loginPage.clickLogin()
      cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: Incorrect login or password provided.')
   })
   
   it('login should fail without entering login name and password', () =>{ 
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.clickLogin()
      cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: Incorrect login or password provided.')
   })
   
   it('login should fail with invalid login name', () =>{ 
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.enterLoginName('Anaidd')
      loginPage.enterPassword('Password')
      loginPage.clickLogin()
      cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: Incorrect login or password provided.')
   })

   it('login should fail with invalid password', () =>{ 
      loginPage.navigateToLogin()
      cy.get('.heading1').should('contain.text', ' Account Login')
      loginPage.enterLoginName('Anaid')
      loginPage.enterPassword('password')
      loginPage.clickLogin()
      cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: Incorrect login or password provided.')
   })

 })