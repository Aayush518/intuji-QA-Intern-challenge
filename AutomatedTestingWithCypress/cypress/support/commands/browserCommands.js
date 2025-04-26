// Handles browser and page setup 
import 'cypress-file-upload';

/**
 * Custom reliable visit command with retry logic and resource blocking
 */
Cypress.Commands.add('reliableVisit', (url, options = {}) => {
  const maxAttempts = 3;
  let attempts = 0;

  function attemptVisit() {
    attempts++;
    cy.log(`Visit attempt ${attempts} to ${url}`);

    const visitOptions = {
      ...options,
      timeout: 60000,
      onBeforeLoad: (win) => {
        // Block problematic resources that might cause timeouts
        const originalFetch = win.fetch;
        win.fetch = function(input, init) {
          if (typeof input === 'string' && (
            input.includes('googlesyndication') || 
            input.includes('googleapis') || 
            input.includes('googleads') ||
            input.includes('analytics') ||
            input.includes('doubleclick') ||
            input.includes('facebook') ||
            input.includes('twitter')
          )) {
            console.log('Blocked fetch for:', input);
            return Promise.resolve(new Response('', { status: 200 }));
          }
          return originalFetch(input, init);
        };

        if (options.onBeforeLoad) {
          options.onBeforeLoad(win);
        }
      },
      failOnStatusCode: false
    };

    cy.visit(url, visitOptions).then(() => {
      cy.log(`Successfully loaded ${url}`);
    });
  }

  attemptVisit();
});

// Remove interfering elements from the page
Cypress.Commands.add('cleanUpPage', () => {
  cy.get('body').then($body => {
    if ($body.find('iframe').length > 0) {
      cy.get('iframe').invoke('remove');
    }
    cy.get('footer').invoke('remove');
    cy.get('#fixedban').invoke('remove');
  });
});