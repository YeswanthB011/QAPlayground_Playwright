# QA Playground WebApplication
[![Playwright Tests](https://github.com/YeswanthB011/QAPlayground_Playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/YeswanthB011/QAPlayground_Playwright/actions/workflows/playwright.yml)

This repository contains automated test scripts for a QA Playground platform. The tests are written in Typescript and utilize Playwright with the Page Object Model (POM) design pattern for enhanced maintainability and reusability. The project is structured using Maven for dependency management and build processes.

**URL:** [QA Playground Website](https://qaplayground.dev/)

## Tools and Technologies Used

- **Programming Language:** TypeScript
- **Web Automation Tool:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git and GitHub
- **Test Management Tools:** Similar to JIRA, ZEPHYR / XRAY
- **Data generator Tool:** fakerjs.dev

| User Story                                |  Status(Completed/InProgress)                             |
|-------------------------------------------|-----------------------------------------------------------|
| [US01: WebTable Validation]()             |  Completed                                                |
| [US02: KeyTagDrag&Drop Validation]()      |  Completed                                                | 
| [US03: Advanced Interactions]()           |  Completed                                                |
| [US04: Interactions]()                    |  Completed                                                |           

--FTA user story document for more details.

## Prerequisites

Here are the steps and commands to set up your environment:

### 1. Install Node.js
Download and install Node.js from the official website. Follow the installation instructions for your operating system.

### 2. Install Playwright via npm
Open your terminal or command prompt and run the following commands:

```bash
# Initialize a new Node.js project (if you haven't already)
npm init -y

# Install Playwright
npm install playwright
```

### 3. Clone the Repository
Clone it using the following command:

```bash
# Replace <repository-url> with the URL of your GitHub repository
git clone <repository-url>
```

### 4. Run Playwright Tests
Navigate to your project directory and run your Playwright tests using the following command:

```bash
# Run Playwright tests
npx playwright test
```

## Writing Tests
-tests/: This directory contains your test files. Each test file typically ends with .spec.ts.
-pages/: This directory contains your Page Object Model (POM) classes. Each page class represents a page in your application.
-playwright.config.ts: This is the Playwright configuration file where you can set up your test environment, browser options, and other settings.
-package.json: This file contains the metadata for your project, including dependencies and scripts.
-tsconfig.json: This is the TypeScript configuration file.

## Reporting
For now just using inbuilt report generation in HTML, JSON, DOT, LINE and XML.

## Acknowledgments

