describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6be40fa83cf946e1bcb7978d5b3299d4', {
      statusCode: 404
    })

    cy.visit('http://localhost:5173/')
  });

  it('should handle error', () => {
    cy.get('p').should('contain', 'Error getting articles')
  })
})