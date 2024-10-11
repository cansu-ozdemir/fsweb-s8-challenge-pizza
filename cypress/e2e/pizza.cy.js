
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