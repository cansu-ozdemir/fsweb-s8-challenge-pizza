
describe('Order Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:5173/order')
  });

  it('Sipariş notu input alanına metin girilmesine izin vermeli', () => {
    const notMetni = 'Lütfen pizzayı sıcak getirin.';
    cy.get('#order-note')
    .type(notMetni)
    .should('have.value', notMetni);
  });

  it('birden fazla malzeme seçimine izin vermeli', () => {
    cy.get('.extra-options .checkbox-container')
    .contains('Pepperoni')
    .click();

    cy.get('.extra-options .checkbox-container')
    .contains('Mısır')
    .click();

    cy.get('.extra-options .checkbox-container')
    .contains('Domates')
    .click();

    cy.get('.extra-options .checkbox-container input[type="checkbox"]:checked')
    .should('have.length', 3);
  });

  it('seçilen seçeneklerle formu göndermeli', () => {
    cy.get('.size-options input[type="radio"]')
    .check('M', {force: true});

    cy.get('#dough-select')
    .select('İnce');

    cy.contains('.extra-options label', 'Pepperoni')
    .find('input[type="checkbox"]')
    .check({force: true});

    cy.contains('.extra-options label', 'Mısır')
    .find('input[type="checkbox"]')
    .check({force: true});


    cy.contains('.extra-options label', 'Domates')
    .find('input[type="checkbox"]')
    .check({force: true});


    cy.contains('.extra-options label', 'Kabak')
    .find('input[type="checkbox"]')
    .check({force: true});


    cy.get('#order-note')
    .type('Test sipariş notu');

    cy.get('form').submit();

    cy.url().should('include', '/success');
  });
});







describe('Sipariş Akışı', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('.home-container').should('be.visible');
  });

  it('Order-button üzerinden sipariş sayfasına yönlendiriyor', () => {
        cy.get('.order-button').should('exist').and('be.visible');
        cy.get('.order-button').click();
        cy.url().should('include', '/order');
        completeOrder('Order-button ile sipariş');
        });

  it('Card-buttonlar üzerinden sipariş sayfasına yönlendiriyor', () => {
    cy.get('.card-button').should('have.length.at.least', 1).each(($button, index) => {
      if (index > 0) {
        cy.visit('http://localhost:5173');
      }


      cy.get('.card-button').eq(index).should('be.visible').click();
      cy.url().should('include', '/order');
      cy.go('back');
    });
  });

  it('ilk card-button ile birlikte yap', () => {
    cy.get('.card-button').first().click();
    cy.url().should('include', '/order');
    completeOrder('Card-button ile sipariş');
  });
});

      function completeOrder(noteText) {
        cy.get('.size-options input[type="radio"]').check('M', { force: true });
        
        cy.get('#dough-select').select('İnce');

        const malzemeler = ['Pepperoni', 'Mısır', 'Domates', 'Kabak', 'Sucuk'];
         malzemeler.forEach(malzeme => {
          cy.contains('.extra-options label', malzeme)
          .find('input[type="checkbox"]')
          .check({ force: true });
         });

         cy.get('#order-note').type(noteText);

         cy.get('form').submit();

         cy.url().should('include', '/success');

         cy.contains('SİPARİŞ ALINDI').should('be.visible');
        cy.contains('Boyut: M').should('be.visible');
        cy.contains('Hamur: İnce').should('be.visible');
        malzemeler.forEach(malzeme => {
        cy.contains(malzeme).should('be.visible');
        });
        cy.contains(noteText).should('be.visible');

      }



