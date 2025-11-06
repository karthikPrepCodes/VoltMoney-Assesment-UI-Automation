const { test, expect } = require("../PageObjects/fixture");
const url = require("../TestData/baseUrls.json");
const utils = require("../Utils/commonUtilities");
const elementActions = require("../Utils/elementActionHelpers");
const testData = require("../TestData/checkLoanEligibilityPageTestData.json");

test.describe("voltMoney_checkLoanEligibilityScreen_UI_Functional_Tests", () => {
  test.beforeEach("url Launch", async ({ urlLaunch }) => {
    await urlLaunch("PROD", "baseUrl");
  });
  test.afterEach("TearDown", async ({ pom, tearDown }) => {
    await tearDown();
  });
  test("TC_HOME_01 : Verify page loads successfully", async ({
    page,
    utils,
    pom,
  }) => {
    let PageTitle = await pom.getcheckLoanEligibilityPage().gettitle();
    expect(PageTitle).toBe(
      "Volt Money | Check loan eligibility against mutual funds"
    );
  });
  test("TC_HOME_04 : Check eligibility CTA works (happy path)", async ({
    page,
    utils,
    pom,
  }) => {
    await pom
      .getcheckLoanEligibilityPage()
      .checkEligibility(
        testData.checkEligibilityCTA.mobileNumber,
        testData.checkEligibilityCTA.pan
      );
  });
  test("TC_HOME_02 : check header navigation links functional", async ({
    pom,
    page,
  }) => {
    await test.step("check header navigation for benifits", async () => {
      let benifits = await pom
        .getcheckLoanEligibilityPage()
        .benifitsheaderNavigationLink();
      expect(benifits).toBe(testData.headersLinkUrlAssertion.benifits);
      await pom.getcheckLoanEligibilityPage().clickCheckELigibilityIn15Sec();
    });
    await test.step("check header navigation for FAQ", async () => {
      let faqs = await pom
        .getcheckLoanEligibilityPage()
        .faqsHeaderNavigationLink();
      expect(faqs).toBe(testData.headersLinkUrlAssertion.faqs);
      await pom.getcheckLoanEligibilityPage().clickCheckELigibilityIn15Sec();
    });
    await test.step("check header navigation for Contact", async () => {
      let contact = await pom
        .getcheckLoanEligibilityPage()
        .contactHeaderNavigationLink();
      expect(contact).toBe(testData.headersLinkUrlAssertion.contact);
      await page.goBack();
    });
    await test.step("check header navigation for about us", async () => {
      let about = await pom
        .getcheckLoanEligibilityPage()
        .aboutUsHeaderNavigationLink();
      expect(about).toBe(testData.headersLinkUrlAssertion.about);
    });
  });
  test("TC_HOME_03 : Check signIn button ", async ({ page, utils, pom }) => {
    let signin = await pom.getcheckLoanEligibilityPage().clicksignIn();
    expect(signin).toBe(testData.headersLinkUrlAssertion.signin);
  });
});
