describe('template spec', () => {

  beforeEach(()=> {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6be40fa83cf946e1bcb7978d5b3299d4', {
      statusCode: 200,
      fixture: 'articles'
    })
    
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?category=business&apiKey=6be40fa83cf946e1bcb7978d5b3299d4', {
      statusCode: 200,
      fixture: 'sortedArticles'
    }).as('sortArticle')
    cy.visit('http://localhost:5173/')

  })
  it('Should display sorted article based on navbar title', () => {
    cy.get('h1').should('contain', 'OSCORP MEDIA')
    cy.get('h1').contains('Spider-man').should('not.exist')
    cy.get(':nth-child(2) > a').should('contain', 'Business')
    cy.get('ul > :nth-child(2) > a').click()
    cy.url().should('include', '#/business')
    cy.get('h2').should('contain', 'BUSINESS')
    cy.get(':nth-child(2) > .card-title > h3').should('contain', 'BUSINESS News two')
  })

  it('should be able to return home', ()=> {
    cy.get('h1').should('contain', 'OSCORP MEDIA')
    cy.get('h1').contains('Spider-man').should('not.exist')
    cy.get(':nth-child(2) > a').should('contain', 'Business')
    cy.get('ul > :nth-child(2) > a').click()
    cy.url().should('include', '#/business')
    cy.get('.logo > img').click()
    cy.get('.title-outter > :nth-child(1)').should('contain', 'Top Headlines')
  })


})