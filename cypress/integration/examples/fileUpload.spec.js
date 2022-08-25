/// <reference types="cypress" />

Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe('file upload function', () => {
    beforeEach(() => {

      cy.visit('https://fineuploader.com/demos.html')

    })
  
    it('upload file successfully', () => {

      cy.wait(1000)

      cy.scrollTo(0, 600)

      const filePath = 'Capture1.PNG'

       //Click on the upload button
      cy.get('[name="qqfile"]').attachFile(filePath)

       //Assert successful upload
      cy.get('.qq-upload-file-selector', {timeout: 1000}).should('contain', 'Capture1.PNG');

    })
})