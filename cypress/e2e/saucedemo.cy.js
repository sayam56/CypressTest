describe('Sauce Demo Test Suite', () => {
  it('Test Case 1', () => {
    let username;
    cy.visit('https://www.saucedemo.com/')

    // getting the username and password
    cy.xpath("//div[@id='login_credentials']")
    .invoke('text').then(text => {
      const startIndex = text.indexOf('standard_user'); // Find the index of the start of 'standard_user' in the text
    const endIndex = text.indexOf('\n', startIndex); // Find the index of the first newline character after 'standard_user'
    const standardUser = text.substring(startIndex+1, endIndex+1).trim(); // Extract the text between startIndex and endIndex

    // Do something with standardUser, for example, log it
    cy.log('The standard_user is: ' + standardUser);
    })
    cy.xpath("//input[@type='text' and @placeholder='Username']").type('standard_user')    
    cy.get('input[type=password][placeholder="Password"]').type("secret_sauce")
    cy.get('input[type=submit]').click();

    cy.get('button[id=react-burger-menu-btn]').click()
    cy.get('nav > a[id=logout_sidebar_link]').should('be.visible').click()
  })
})