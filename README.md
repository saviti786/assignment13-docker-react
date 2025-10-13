# Assignment 12 – Web Component Library

## Author: Saviti Saviti

---

## Overview
This project is a **React + Storybook Component Library** built using **TypeScript** and **Styled Components**.

It demonstrates reusable and responsive UI components that can be used to build consistent interfaces.
Each component supports both default and disabled states and has been tested for visibility and style changes.

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

## Storybook
Storybook provides a development environment to view and interact with components.
<br>
To start Storybook locally:
<br>
npm run storybook

## Build and Run with Docker

1. **Build the Docker image:**

docker build -t lastName_firstName_coding_assignment12 .
<br>
docker run -d -p 8083:8083 --name lastName_firstName_coding_assignment12 lastName_firstName_coding_assignment12

2.  **Open in browser:**

React App: http://localhost:8083/app/
<br>
Storybook: http://localhost:8083/storybook/
