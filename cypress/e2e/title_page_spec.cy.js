describe('template spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6be40fa83cf946e1bcb7978d5b3299d4', {
      statusCode: 200,
      fixture: 'articles'
    })

    cy.visit('http://localhost:5173/')

  })



  it('should display a home page with title, article title, image and navbar', () => {
    cy.get('h1').should('contain', 'OSCORP MEDIA')
    cy.get('h1').contains('Spider-man').should('not.exist')
    cy.get('ul').children().should('have.length', 7)
    cy.get('.title-outter > :nth-child(1)').should('contain', 'Top Headlines')
    cy.get(':nth-child(1) > .article-title > h2').should('be.visible')
    cy.get('.article-cont > :nth-child(1) > img').should('be.visible')
  })
})