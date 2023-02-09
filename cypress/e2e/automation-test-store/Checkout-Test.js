/// <reference types="Cypress" />
import { CheckoutPage } from "../../support/pageObjects/automation-test-store/checkout-page";
import { loginHandler } from "../../support/handlers/loginHandler";
import { AddToCart } from "../../support/pageObjects/automation-test-store/AddToCart-Page";

let checkoutPage = new CheckoutPage
let addToCart = new AddToCart

describe('Test checkout functionality', () => {

    beforeEach( () => {
        loginHandler()
    }) 

    beforeEach( () =>{
        addToCart.navigateToProductsPage()
        addToCart.clickOnProduct('Armani Code after shave balm') 
        addToCart.clickOnAddToCart()
    })

    it('Should complete the purchase sucsessfuly', () =>{
        checkoutPage.navigateToShoppingCart()
        cy.get('.product-list').should('contain.text', 'Armani Code after shave balm')
        checkoutPage.clickOnCheckout()
        cy.url().should('contain', 'checkout/confirm')
        cy.get('.sidewidt').should('contain.text', 'Armani Code after shave balm')
        checkoutPage.clickOnConfirmOrder()
        cy.get('.heading1').should('have.text', 'YOUR ORDER HAS BEEN PROCESSED!')
    })
})



