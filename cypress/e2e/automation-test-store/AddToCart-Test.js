/// <reference types="Cypress" />
import { loginHandler } from "../../support/handlers/loginHandler";
import { AddToCart } from "../../support/pageObjects/automation-test-store/AddToCart-Page";

let addToCart= new AddToCart

describe('Test add to cart functionality', () => {
    
    beforeEach(() =>{
        loginHandler()
    })

    it('Item should be sucsessfuly added to cart', () => {
        addToCart.navigateToProductsPage()
        cy.get('.breadcrumb').should('contain.text', 'Fragrance Sets')
        addToCart.clickOnProduct('Armani Code after shave balm') 
        cy.get('.breadcrumb').should('contain.text', 'Armani Code after shave balm')
        addToCart.clickOnAddToCart()
        cy.url().should('contain', 'checkout/cart')
        cy.get('.product-list').should('contain.text', 'Armani Code after shave balm')
    })
})