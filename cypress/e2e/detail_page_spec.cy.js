describe('template spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6be40fa83cf946e1bcb7978d5b3299d4', {
      statusCode: 200,
      fixture: 'articles'
    })

    cy.visit('http://localhost:5173/#/article/bbc-news/0')

  })
  it('should select article and be directed to a new page', () => {
    cy.get('h1').should('contain', 'OSCORP MEDIA')
    cy.get('h1').contains('Spider-man').should('not.exist')
    cy.get('ul').children().should('have.length', 7)
    cy.get('h2').should('be.visible')
    cy.get('.title-detail-cont > img').should('be.visible')
    cy.get('button').should('be.visible')
    cy.get('.logo > img').click()
    cy.url().should('include', 'http://localhost:5173/')
  })
})