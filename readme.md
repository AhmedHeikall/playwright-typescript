# 🎭 Playwright Automation Testing

This repository contains my **Playwright automation testing practice and learning journey** using **TypeScript**.

The project focuses on building maintainable and reliable automated tests for web applications using the **Playwright Test Framework**.

## 🚀 Technologies & Tools

- **Playwright**
- **TypeScript**
- **Node.js**
- **Playwright Test**
- **Git & GitHub**

## 📚 What I'm Learning

- Playwright project setup
- Locators and selectors
- Assertions
- Handling Web Elements
- Browser and Page management
- Auto-waiting
- Explicit waits
- Handling dropdowns, checkboxes, and radio buttons
- Handling alerts and dialogs
- Frames and iframes
- Multiple tabs and windows
- File upload and download
- Screenshots and videos
- Page Object Model (POM)
- Test hooks
- Test data management
- Parameterized testing
- Fixtures
- Test annotations
- API testing with Playwright
- Authentication and sessions
- Parallel test execution
- Test reports
- CI/CD integration with GitHub Actions

## 📁 Project Structure

```text
playwrightdemo/
├── pages/
│   ├── BasePage.ts             # Shared Playwright page, action, and wait utilities
│   ├── LoginPage.ts            # Login page locators, assertions, and actions
│   └── ProductsPage.ts         # Products page locators and sorting actions
├── components/
│   └── SideMenu.ts             # Shared burger menu and logout interactions
├── test-data/
│   └── products.ts             # Shared valid credentials and expected product data
├── tests/
│   └── e2e/
│       ├── login.spec.ts       # Login UI, authentication, and logout scenarios
│       └── products.spec.ts    # Products page item-count scenario
├── utilites/
│   ├── Actions.ts              # Shared locator interaction methods
│   ├── Waits.ts                # Shared page-load wait methods
│   └── helper.ts               # Shared navigation and login helpers
├── e2e.config.ts               # Playwright configuration for E2E tests
├── playwright.config.ts        # General Playwright configuration
├── package.json
├── package-lock.json
└── readme.md
```

### E2E tests

`tests/e2e/login.spec.ts` covers:

- **Valid login suite** — verifies the initial login page state, successful login and key products page elements, and logout.
- **Invalid login suite** — verifies the error messages for invalid credentials and an empty password.

`tests/e2e/products.spec.ts` verifies that a successful login displays exactly six product cards and that each product name and price match the expected values.

### Page Object Model

The page objects encapsulate locators and page interactions so tests can use readable APIs instead of defining selectors directly:

- `BasePage` provides the shared Playwright `Page`, `Actions`, and `Waits` instances.
- `LoginPage` provides login page assertions and login actions.
- `ProductsPage` provides product-list and products-page locators, sorting actions, and a `SideMenu` component.
- `SideMenu` encapsulates the burger-menu and logout interactions used by the products page.

## ▶️ Running the Tests

Install dependencies:

```bash
npm install
```

Run the E2E tests using the project’s E2E configuration:

```bash
npm run tests:e2e
```

Run the E2E tests with the browser visible:

```bash
npm run tests:e2e -- --headed
```

Run the login test file:

```bash
npx playwright test --config=e2e.config.ts tests/e2e/login.spec.ts
```

Run the products test file:

```bash
npx playwright test --config=e2e.config.ts tests/e2e/products.spec.ts
```

Run one test by title (replace the text with a test title or part of one):

```bash
npx playwright test --config=e2e.config.ts tests/e2e/login.spec.ts -g "Valid Login functionality"
```

Open the HTML report:

```bash
npx playwright show-report
```

## 🎯 Goal

The goal of this repository is to improve my practical experience with **Playwright, TypeScript, automation frameworks, API testing, and CI/CD**, while following clean and maintainable test automation practices.

🚧 **Currently Learning & Developing**
