export class CheckoutPage {

    navigateToShoppingCart() {
        cy.visit('https://automationteststore.com/index.php?rt=checkout/cart')
    }
    
    clickOnCheckout() {
        cy.get('#cart_checkout1').click()
    }

    clickOnConfirmOrder() {
        cy.get('#checkout_btn').click()
    }
    
}
