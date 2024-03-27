describe('Test Suite 1', () => {
  it('Test Name 1', () => {
    cy.visit('https://automationexercise.com/');

    cy.get('ul > li > a').contains('Login').click();

    cy.get('form > input[type=text][data-qa="signup-name"]').type('Test User')
    cy.get('form > input[type=email][data-qa="signup-email"]').type('unique@email.com')
    cy.get('button[type=submit][data-qa="signup-button"]').click()
    cy.get('form > input[type=password][data-qa="login-password"]').type('Password')
    cy.get('button[type=submit][data-qa="login-button"]').click()
    

    // cy.visit('https://www.saucedemo.com/');
    // cy.get('input[id="user-name"]').type("standard_user");
    // cy.get('input[id="password"]').type("secret_sauce");
    // cy.get('input[type=submit]').click();
  })
})