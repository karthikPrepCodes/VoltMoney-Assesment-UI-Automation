const { test: base } = require("@playwright/test");
const commonUtilities = require("../utils/commonUtilities");
const PageObjectManager = require("./pageObjectManager");

exports.test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({});
    await use(context);
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  utils: async ({ page }, use) => {
    const utils = new commonUtilities(page);
    await use(utils);
  },
  urlLaunch: async ({ page, utils }, use) => {
    await use((environment, appURLKey) =>
      utils.urlLaunch(environment, appURLKey)
    );
  },
  tearDown: async ({ page, context, utils }, use) => {
    await use(async () => {
      try {
        if (page && !page.isClosed()) {
          await page.evaluate(() => sessionStorage.clear());
        }
        await context.clearCookies();
        await utils.closePage(page);
        await utils.closeBrowser(context);
      } catch (error) {
        console.error(`teardown encountered an error : ${error.message}`);
        throw error;
      }
    });
  },
  pom: async ({ page }, use) => {
    const pom = new PageObjectManager(page);
    await use(pom);
  },
});
exports.expect = base.expect;
