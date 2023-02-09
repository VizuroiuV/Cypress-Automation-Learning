/// <reference types="Cypress" />
import { CategoryMenu } from "../../support/pageObjects/automation-test-store/CategoryMenu-Page";
import { loginHandler } from "../../support/handlers/loginHandler";

let categoryMenu = new CategoryMenu()

 describe('Test the menu section', () => {

     beforeEach( () =>{
          loginHandler()
     }) 

      it('Should open menu pages ', () => {
          categoryMenu.navigateToHomepage()
          cy.get('.welcome_msg > h4').should('contain.text', 'Welcome to the Automation Test Store! ')
          categoryMenu.clickOnCategoryFromMenu('6')
          cy.get('span.maintext').should('have.text', 'Men')
          categoryMenu.clickOnCategory('Fragrance Sets')
          cy.get('span.maintext').should('have.text', 'Fragrance Sets')
      })
  })   