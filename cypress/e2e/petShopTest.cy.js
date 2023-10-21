


describe('Pet shop API', () => {
  it('should create, update and delete user', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user',{
      id: 35,
      username: 'carp',
      firstName: 'Angus',
      email: 'mail@mail.ru',
      userStatus: 1
    }).then((response) => {
      expect(response.status).be.eq(200)
      expect(response.body).be.eqls({
        code:200,
        message: "35",
        type: "unknown"
      });
    cy.request('https://petstore.swagger.io/v2/user/carp').then((response) => {
      expect(response.body).be.eqls({
        id: 35,
      username: 'carp',
      firstName: 'Angus',
      email: 'mail@mail.ru',
      userStatus: 1
      });
    cy.request(`PUT`,'https://petstore.swagger.io/v2/user/carp',{
      id: 35,
      username: 'carp',
      email: 'mail@mail.ru',
      userStatus: 1,
      firstName: 'Malcolm',
    }).then((response) => {
      expect(response.status).be.eq(200)
      expect(response.body).be.eqls({
        code:200,
        message: "35",
        type: "unknown"
      });
      cy.request('https://petstore.swagger.io/v2/user/carp').then((response) => {
        expect(response.body).be.eqls({
          id: 35,
        username: 'carp',
        firstName: 'Malcolm',
        email: 'mail@mail.ru',
        userStatus: 1
        });
        cy.request('DELETE', 'https://petstore.swagger.io/v2/user/carp').then((response) => {
        expect(response.status).be.eq(200)
    });
    cy.request({
     url:"https://petstore.swagger.io/v2/user/carp",
     failOnStatusCode: false}).then((response) => {
      expect(response.status).be.eq(404);
        
      });
    
  })
  })
})
    })
  })
})
