describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Home Page Interaction', () => {
  it('should navigate home, click the button, and verify the result in the div', () => {
    // Navigate to the home page
    cy.visit('http://localhost:4200');

    // Click the button with the specified ID
    cy.get('#weather').click();

    // Expect the result in the div to be equal to the specified value
    cy.get('#number').should('have.text', '25');
  });
});
