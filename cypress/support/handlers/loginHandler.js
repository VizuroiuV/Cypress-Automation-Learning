import { LoginPage } from "../pageObjects/automation-test-store/Login-Page";

 let loginPage = new LoginPage()

 export const loginHandler = () => {
     loginPage.navigateToLogin();
     loginPage.enterLoginName('Anaid');
     loginPage.enterPassword('Password');
     loginPage.clickLogin();
 }
