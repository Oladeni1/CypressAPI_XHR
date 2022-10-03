/// <reference types="cypress" />

Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe('file upload', () => {
    beforeEach(() => {
    
      cy.visit('https://practice.automationbro.com/cart')
    })
  
    it('upload file to the input field', () => {

      cy.scrollTo(0, 500)

      const filePath = 'Capture1.PNG'

       //Click on the select file  button
      cy.get('#upfile_1').attachFile(filePath)

       //Click on the upload button
      cy.get('#upload_1').click({force: true});

       //Assert successful upload
      cy.get('#wfu_messageblock_header_1_label_1', {timeout: 10000}).should('contain', 'uploaded successfully');

    })
})