export class LoginPage {

    navigateToLogin() {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
    }

    enterLoginName(loginName) {
        cy.get('#loginFrm_loginname').type(loginName)
    }


    enterPassword(password) {
        cy.get('#loginFrm_password').type(password)
    }

    clickLogin() {
        cy.get('#loginFrm > fieldset > button').click()
    }
}