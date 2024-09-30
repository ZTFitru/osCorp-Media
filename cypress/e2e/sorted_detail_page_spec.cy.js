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
    cy.get('ul > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > .card-title > h3').click()
    cy.get('h2').should('contain', 'BUSINESS News test')
    cy.get('.cat-detail-cont > :nth-child(2)').should('be.visible')
    cy.get('.cat-detail-cont > img').should('be.visible')
  })

  it('should be able to return home', ()=> {
    cy.get('.logo > img').click()
    cy.url().should('include', 'http://localhost:5173/')
  })
})