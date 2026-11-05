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
├── tests/
│   └── e2e/
│       └── login.spec.ts       # Login page UI and authentication scenarios
├── utilites/
│   └── helper.ts               # Shared navigation, visibility, and login helpers
├── e2e.config.ts               # Playwright configuration for E2E tests
├── playwright.config.ts        # General Playwright configuration
├── package.json
├── package-lock.json
└── readme.md
```

### E2E tests

`tests/e2e/login.spec.ts` covers:

- **Valid login suite** — verifies the login page elements, successful login, and logout.
- **Invalid login suite** — verifies the error messages for invalid credentials and an empty password.

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
