/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

context('Page context', () => {
  beforeEach(() => {
    cy.visit('localhost:3000'); //this is the server that was started earlier
  })
  it('cy.request() - get-bribes - 0', () => {
    // https://on.cypress.io/request
    cy.request('http://localhost:4000/get-bribes?q=1&q=2&q=3&q=4')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('bribes').and.eq(0)
      })
  })
  it('cy.request() - get-bribes - Too chaotic', () => {
    // https://on.cypress.io/request
    cy.request('http://localhost:4000/get-bribes?q=4&q=2&q=3&q=1')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('bribes').and.eq("Too chaotic")
      })
  })
  it('cy.request() - get-bribes - 2', () => {
    // https://on.cypress.io/request
    cy.request('http://localhost:4000/get-bribes?q=2&q=1&q=4&q=3')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('bribes').and.eq(2)
      })
  })

  it('cy.request() - save-list', () => {
    // https://on.cypress.io/request
    cy.request('POST', 'http://localhost:4000/list', {
      q: [1, 2, 3, 4],
      result: "0"
    })
      .should((response) => {
        expect(response.status).to.eq(201)
      })
  })

  it('cy.request() - save-list - with wrong result', () => {
    cy.request({
      method: "POST", url: 'http://localhost:4000/list', body: {
        q: [1, 2, 3, 4],
        result: "11"
      }, failOnStatusCode: false,
    })
      .should((response) => {
        expect(response.status).to.eq(406)
      })
  })
})
