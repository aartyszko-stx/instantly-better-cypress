import "@cypress/fiddle";
import "cypress-mochawesome-reporter/register";
import "cypress-map";
import "support/selectors";
import "support/commands";
import chaiIsSorted from "chai-sorted";

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
