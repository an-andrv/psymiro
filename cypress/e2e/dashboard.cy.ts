describe('psy miro Test', () => {
  it('Visits the Kudos dashboard', () => {
    cy.visit('/dashboard')
    cy.contains('psy miro')
    cy.contains('~ Kudos dashboard ~')
    cy.get('[data-cy=counter]').should('have.text', '0')
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', '-1')
  })
})
