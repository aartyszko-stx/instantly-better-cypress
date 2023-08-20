# Instantly Better Cypress

## Prerequisites

Before you begin, ensure that you have the following dependencies installed:

- Node.js
- NPM

## Getting Started

Follow these steps to set up and run the tests on your local machine:

1. **Clone the Repository:**

```
git clone <repository-url>
```

2. **Intall Dependencies:**

```
npm install
```

## Running liters

1. Run ESlint:

```
npm run lint
```

Additionally, you can run lint fixes:

```
npm run lint:fix
```

2. Run Prettier:

```
npm run prettier
```

## Running tests

Execute the tests using the following commands:

1. Run Tests in Headless Mode with Generated JSON/HTML Report:

```
npm run cy:open--e2
```

The generated reports will be available in the cypress/reports directory


2. Run tests in headless mode:

```
cy:run--e2e
```
