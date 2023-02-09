/// <reference types="Cypress-xpath" />
export class AddToCart {

    navigateToProductsPage() {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=58_59')
    }

    clickOnProduct(productName) {
        cy.get('.prdocutname').contains(productName).click()
    }

    clickOnAddToCart() {
        cy.get('.cart').click()
    }
}
