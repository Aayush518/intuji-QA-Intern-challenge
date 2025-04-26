# Running the Cypress Tests

## Prerequisites
- Node.js installed
- npm installed

## Important Notes
- **Browser Compatibility**: Tests may encounter issues when running with Electron (default browser). Chrome is recommended for the most reliable test execution.

## Steps to Run Tests

1. Install dependencies:
```bash
npm install
```

2. Open Cypress Test Runner:
```bash
npm run cypress:open
```

3. Run tests in headless mode:
```bash
npm run cypress:run
```

4. Run a specific test file:
```bash
npm run cypress:run -- --spec "cypress/e2e/student-registration-form.cy.js"
```

5. Run test in headed mode with Chrome browser (recommended):
```bash
cd /Users/aayushadhikari/intuji-QA-Intern-challenge/AutomatedTestingWithCypress && npx cypress run --spec "cypress/e2e/student-registration-form.cy.js" --browser chrome --headed
```

6. General command format for running tests:
```bash
npx cypress run --spec "path/to/test/file.cy.js" --browser [browser] [--headed]
```
Where:
- `--spec` specifies the test file to run
- `--browser` can be chrome, firefox, edge, or electron
- `--headed` shows the browser UI while tests run (remove for headless mode)


