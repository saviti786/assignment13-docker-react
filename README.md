# Assignment 13 – Component Library with Husky, Eslint and Prettier

## Author: Saviti Saviti

---

## Overview

This project is a React + TypeScript UI Component Library with code quality checks, pre-commit hooks, and CI/CD workflow implemented.

---

## Components Included

The library includes the following components:

- Button
- Label
- Text
- Table
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

Each component contains the following files:

- ComponentName.tsx
- ComponentName.stories.tsx
- ComponentName.test.tsx
- ComponentName.types.tsx
- index.ts

---

## Tests

Each component has at least **two Jest tests**:

1. Checks that the component is visible in the DOM
2. Confirms that the background or style changes when in the disabled state

To run all tests:
npm test

## Pre-commit hooks:

1. ESLint
2. Prettier
3. Unit Tests
4. CI/CD workflow using GitHub Actions

## Build and Run with Docker

1. **Build the Docker image:**

docker build -t lastName_firstName_coding_assignment13 .
<br>
docker run -p 8018:80 --name lastName_firstName_coding_assignment13 lastName_firstName_coding_assignment13

2.  **Open in browser:**

React App: http://localhost:8018/
