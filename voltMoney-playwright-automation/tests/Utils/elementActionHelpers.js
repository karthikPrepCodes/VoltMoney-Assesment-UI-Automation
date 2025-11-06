const commonUtilities = require("./commonUtilities");
class ElementActions {
  constructor(page) {
    this.page = page;
    this.utils = new commonUtilities(page);
  }
  async fill(selector, text) {
    await this.utils.waitForDisplayed(selector);
    await this.page.locator(selector).fill(text);
  }
  async click(selector) {
    await this.utils.waitForDisplayed(selector);
    await this.page.locator(selector).click();
  }
}
module.exports = ElementActions;
