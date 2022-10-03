/// <reference types="Cypress" />

describe('GOREST API Suite', function() 
{
    it('Get Users API Test', function() {

    cy.request({
        method : 'GET', 
        url : 'https://gorest.co.in/public-api/users', 
        headers :{
            'authorization' : "Bearer 7b75747d05e44dd05f9a31a868bdfc76feeff44d512d37f30ec7ef04d29122ae"
        }

        }).then((response)=>{
            expect(response.body.meta.pagination.limit).to.eq(10);
            expect(response.status).to.eq(200)
        })

    })
})

   