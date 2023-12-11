/// <reference types="cypress" />

declare namespace Chai {
  interface Assertion {
    /**
     * Chai assertion that checks if a given element has text value that can be surrounded with white characters,
     * @param testId (optional) expected text value
     * @example
     *  expect($el).to.have.textTrimmed('Some Text')
     */
    textTrimmed(textTrimmed: string): void;
  }
}
