/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

export class CategoryMenu {

    navigateToHomepage() {
      cy.visit('https://automationteststore.com/')
    }

    clickOnCategoryFromMenu(categoryNumber) {
      cy.xpath(`//*[@id="categorymenu"]/nav/ul/li[${categoryNumber}]/a`).click()
    }

    clickOnCategory(categoryName) {
      cy.get('ul.thumbnails').contains(categoryName).click()
    }   
}