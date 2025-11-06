const {
  checkLoanEligibilityPage,
} = require("./CheckLoanEligibilityScreen/checkLoanEligibilityPageFunctions");
const checkLoanEligibilityPageObjects = require("./CheckLoanEligibilityScreen/checkLoanEligibilityPageObjects");

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this._checkLoanEligibilityPage = null;
  }

  getcheckLoanEligibilityPage() {
    if (!this._checkLoanEligibilityPage) {
      this._checkLoanEligibilityPage = new checkLoanEligibilityPage(
        this.page,
        checkLoanEligibilityPageObjects
      );
    }
    return this._checkLoanEligibilityPage;
  }
}
module.exports = PageObjectManager;
