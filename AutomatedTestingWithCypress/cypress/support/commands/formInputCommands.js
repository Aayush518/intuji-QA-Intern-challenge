/**
 * Commands for handling personal details form inputs
 */

// Fill personal details section of the form
Cypress.Commands.add('fillPersonalDetails', (data) => {
  if (data.firstName) cy.get('#firstName').type(data.firstName);
  if (data.lastName) cy.get('#lastName').type(data.lastName);
  if (data.email) {
    cy.get('#userEmail').invoke('val', '');
    cy.get('#userEmail').type(data.email, { force: true });
  }
  
  if (data.gender) {
    cy.contains('label', data.gender).click();
  }
  if (data.mobile) cy.get('#userNumber').type(data.mobile);
});

// Set date of birth using date picker
Cypress.Commands.add('setDateOfBirth', (dateOfBirth) => {
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__year-select').select(dateOfBirth.year);
  
  const monthIndex = new Date(Date.parse(dateOfBirth.month +" 1, 2012")).getMonth();
  cy.get('.react-datepicker__month-select').select(monthIndex.toString());
  
  const dayFormatted = dateOfBirth.day.padStart(2, '0');
  cy.get(`.react-datepicker__day--0${dayFormatted}`).not('.react-datepicker__day--outside-month').first().click();
});

// Select subjects from autocomplete dropdown
Cypress.Commands.add('selectSubjects', (subjects) => {
  subjects.forEach(subject => {
    cy.get('#subjectsInput').type(subject);
    cy.get('.subjects-auto-complete__menu').contains(subject).click();
  });
});

// Select hobbies from checkboxes
Cypress.Commands.add('selectHobbies', (hobbies) => {
  hobbies.forEach(hobby => {
    cy.contains('label', hobby).click();
  });
});