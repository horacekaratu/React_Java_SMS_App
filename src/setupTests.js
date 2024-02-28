// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node'; // Import setupServer from 'msw/node'
import { handlers } from './mocks/handlers';

export const server = setupServer(...handlers); // Use setupServer instead of setupWorker

beforeAll(() => {
  server.listen(); // Start the server
});

afterEach(() => {
  server.resetHandlers(); // Reset all request handlers after each test
});

afterAll(() => {
  server.close(); // Close the server after all tests are done
});

