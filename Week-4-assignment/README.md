# Warm Up Answers

## Red-Green-Refactor Workflow

**Description:**

- **Red:**: Write a small piece of test code usually for a function that doesn’t exist yet. This test should fail initially—hence, 'red'.
- **Green**: Write just enough production code to make the test pass. This step doesn’t focus on clean code, just on making the test green.
- **Refactor**: Clean up the code while ensuring that tests still pass. Remove duplications, improve names, and separate concerns.

**Benefits:**

- This workflow ensures that code is only written in response to test cases, which promotes cleaner, more focused code development.
- It helps prevent overcoding and can catch bugs early in the development process.
- It also aids in maintaining documentation through tests and ensures that every piece of functionality is tested.

## Jest and Importance of Unit Testing

**What is Jest?**

Jest is a JavaScript Testing Framework with a focus on simplicity. It works out of the box for any React project and is widely used in other JavaScript frameworks and libraries due to its easy configuration and powerful features such as snapshot testing, async testing, and more.

**Why is Unit Testing Important?**

- **Reliability**: Ensures that the code works as expected under various scenarios.
- **Maintainability**: Makes the codebase safer to refactor or upgrade dependencies.
- **Documentation**: Acts as a form of documentation that shows how a piece of functionality is supposed to work.
- **Design**: Often helps in better design decisions early in the development stage.

## Using beforeEach() and afterEach()

These functions in Jest are used to run some code before and after each test respectively. This is useful for setting up a consistent environment for tests to run in and for cleaning up after them.

**Improvements in Tests:**

- `beforeEach()`: Sets up fresh conditions before each test runs (e.g., creating mock data, resetting variables). This ensures test isolation and prevents interference.
- `afterEach()`: Used for test cleanup (e.g., clearing mocks, removing temporary data). This keeps your test environment tidy and avoids conflicts between tests.
