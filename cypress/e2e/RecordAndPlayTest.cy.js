describe('First Test Suite', () => {
  it('Test Name 1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://nerdevolution.tech/');
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(2) > :nth-child(1)').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(5) > a').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(4) > :nth-child(1)').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > .\\# > a').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > .responsiveLogo > a > img').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Youtube Suite', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear('a');
    cy.get('#search-input > #search').type('ali iktider sayam{enter}');
    cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').click();
    cy.get('[tab-title="Videos"] > .yt-tab-shape-wiz__tab').click();
    /* ==== End Cypress Studio ==== */
  })
  

  it('Test Name 3', () => {
    cy.log("Running the third case");
    cy.visit('https://nerdevolution.tech/');
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(2) > :nth-child(1)').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(5) > a').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > :nth-child(4) > :nth-child(1)').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > .\\# > a').click();
    cy.get('.nav-outer > .main-menu > #navbarSupportedContent > .navigation > .responsiveLogo > a > img').click();
    /* ==== End Cypress Studio ==== */
  });
})