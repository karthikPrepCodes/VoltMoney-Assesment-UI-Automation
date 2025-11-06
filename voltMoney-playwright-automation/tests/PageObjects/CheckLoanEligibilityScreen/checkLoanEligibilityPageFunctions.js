const ElementActions = require("../../Utils/elementActionHelpers");
const CommonUtilities = require("../../Utils/commonUtilities");

class checkLoanEligibilityPage {
  constructor(page, selectors) {
    this.page = page;
    this.selectors = selectors;
    this.actions = new ElementActions(page);
    this.utils = new CommonUtilities(page);
  }

  async enterMobileNumber(mobileNumber) {
    await this.actions.fill(this.selectors.enterMobileNumber, mobileNumber);
  }
  async enterPan(pan) {
    await this.actions.fill(this.selectors.enterPan, pan);
  }
  async gettitle() {
    const title = await this.utils.getPageTitle();
    return title;
  }
  async clickCheckEligibility() {
    await this.actions.click(this.selectors.checkEligibilityButton);
  }
  async checkEligibility(mobileNumber, pan) {
    await this.actions.fill(this.selectors.enterMobileNumber, mobileNumber);
    await this.actions.fill(this.selectors.enterPan, pan);
    await this.actions.click(this.selectors.checkEligibilityButton);
  }
  async benifitsheaderNavigationLink() {
    await this.actions.click(this.selectors.goToBenifits);
    const currentUrl = await this.page.url();
    return currentUrl;
  }
  async faqsHeaderNavigationLink() {
    await this.actions.click(this.selectors.goToFaqs);
    const currentUrl = await this.page.url();
    return currentUrl;
  }
  async contactHeaderNavigationLink() {
    await this.actions.click(this.selectors.goToContactUsHeaders);
    const currentUrl = await this.page.url();
    return currentUrl;
  }
  async aboutUsHeaderNavigationLink() {
    await this.actions.click(this.selectors.goToAboutUsHeaders);
    const currentUrl = await this.page.url();
    return currentUrl;
  }
  async clicksignIn() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.actions.click(this.selectors.signIn),
    ]);

    await newPage.waitForLoadState("load");
    const newTabUrl = newPage.url();
    // const newTabTitle = await newPage.title();
    // console.log("New tab title:", newTabTitle);
    return newTabUrl;
  }
  async clickCheckELigibilityIn15Sec() {
    await this.actions.click(this.selectors.checkEligibilityIn15sHeader);
  }
}
module.exports = { checkLoanEligibilityPage };
