describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5174')
    cy.get('[data-testid="name-info"]', { timeout: 10000 }).eq(0)
    cy.get('[data-testid="detail-button"]').eq(0).click()

    cy.get('[data-testid="name-info-detail"]').contains("ABILIO JACQUES BRUNINI MOUMER");
  })
})
