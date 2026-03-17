# Accessibility Testing Pipeline

This project demonstrates integrating Playwright and Axe to report accessibility errors in a CI/CD pipeline. It showcases how to automate accessibility testing using modern web development tools.

## Overview

The project sets up a complete accessibility testing workflow that:

- Runs automated accessibility tests using Playwright
- Leverages Axe Core for comprehensive accessibility rule checking
- Reports violations with detailed information for debugging
- Can be integrated into CI/CD pipelines for continuous accessibility monitoring

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Playwright** - End-to-end testing framework
- **Axe Core** - Accessibility testing engine
- **@axe-core/playwright** - Playwright integration for Axe

## Running Tests

### Development

```bash
npm run dev
```

### Accessibility Tests

```bash
npm run test
```

### CI/CD Integration

The project includes a GitHub Actions workflow (`.github/workflows/accessibility.yml`) that automatically runs accessibility tests on every push and pull request to the main branch. The pipeline:

1. Sets up Node.js 20 environment with npm caching
2. Installs dependencies with `npm ci`
3. Installs Playwright browsers (Chromium)
4. Builds the application
5. Starts the preview server
6. Runs accessibility tests with Playwright
7. Uploads accessibility reports as artifacts on failure

This ensures accessibility standards are maintained throughout development and provides detailed reports when violations are detected.

## Test Configuration

The accessibility tests are configured in `tests/accessibility.spec.js` and check for:

- WCAG 2.0 Level A and AA compliance
- WCAG 2.1 Level AA compliance
- Critical and serious impact violations

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run accessibility tests:

```bash
npm run test
```
