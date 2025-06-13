# Playwright Test Automation Framework

This is a test automation framework built with Playwright for web application testing.

## Project Structure
```
src/
├── fixtures/         # Test fixtures and shared configurations
│   └── base.fixture.js
├── pageObjects/      # Page Object Models
│   ├── BasePage.js
│   ├── DashboardPage.js
│   └── LoginPage.js
├── testdata/        # Test data files
│   └── users.json
├── tests/           # Test specifications
│   ├── dashboard.spec.js
│   ├── example.spec.js
│   └── login.spec.js
└── utils/          # Utility functions and helpers
    └── TestHelper.js
```

## Prerequisites

- Node.js (LTS version)
- npm (comes with Node.js)
- Visual Studio Code (recommended)

## Setup Instructions

1. **Clone the Repository**
   ```powershell
   git clone <repository-url>
   cd SW_Playwrite_js
   ```

2. **Install Dependencies**
   ```powershell
   npm install
   ```

3. **Install Playwright Browsers**
   ```powershell
   npx playwright install
   ```

## Configuration

The framework uses the following configuration files:
- `playwright.config.js` - Main Playwright configuration
- `src/fixtures/base.fixture.js` - Base test fixtures
- `src/testdata/users.json` - Test data

## Running Tests

1. **Run All Tests**
   ```powershell
   npx playwright test
   ```

2. **Run Specific Test File**
   ```powershell
   npx playwright test tests/login.spec.js
   ```

3. **Run Tests in UI Mode**
   ```powershell
   npx playwright test --ui
   ```

4. **Run Tests in Debug Mode**
   ```powershell
   npx playwright test --debug
   ```

## Project Components

### Page Objects
- `BasePage.js` - Contains common functions used across all pages
- `LoginPage.js` - Login page interactions
- `DashboardPage.js` - Dashboard page interactions

### Test Files
- `login.spec.js` - Login functionality tests
- `dashboard.spec.js` - Dashboard functionality tests
- `example.spec.js` - Example test scenarios

### Utilities
- `TestHelper.js` - Common test helper functions

## Reports and Logs

Test reports are generated after each test run. You can find them in:
- HTML Report: `playwright-report/index.html`
- Test Results: `test-results/`

## Best Practices

1. Use Page Object Model for better maintainability
2. Keep test data separate from test logic
3. Use fixtures for common setup and teardown
4. Follow proper naming conventions for test files and functions

## Environment Variables

The framework uses `dotenv` for environment variable management. Create a `.env` file in the root directory with required variables.

Example `.env` file:
```
BASE_URL=https://your-application-url.com
USERNAME=test_user
PASSWORD=test_password
```

## Debugging Tips

1. Use `await page.pause()` in tests for debugging
2. Run tests with `--debug` flag for step-by-step execution
3. Use Visual Studio Code's debugging features
4. Check browser console logs during test execution

## Contributing

1. Follow the existing code structure
2. Write meaningful commit messages
3. Add proper documentation for new features
4. Ensure all tests pass before submitting changes

## Support

For any issues or questions, please raise an issue in the repository.