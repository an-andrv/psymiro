import { DashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  it('mounts', () => {
    cy.mount(DashboardComponent, {
      componentProperties: {
        pageLikes: 100,
      },
    })
    cy.get('[data-cy=counter]').should('have.text', '100')
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', '99')
  })
})