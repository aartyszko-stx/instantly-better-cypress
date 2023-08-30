import "@cypress/fiddle";
import "cypress-mochawesome-reporter/register";
import "./selectors";
import "cypress-map";
import chaiIsSorted from "chai-sorted";

import "./commands";

chai.use(chaiIsSorted);
chai.use((_chai) => {
  function textTrimmed(expectedValue: string) {
    const value = this._obj.text().trim();
    this.assert(
      value === expectedValue,
      `expected to find text "${expectedValue}", found "${value}"`,
    );
  }
  _chai.Assertion.addMethod("textTrimmed", textTrimmed);
});
