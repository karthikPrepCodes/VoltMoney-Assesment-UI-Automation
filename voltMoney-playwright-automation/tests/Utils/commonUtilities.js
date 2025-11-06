// const envConfig = require("../config.json");
const env = require("../TestData/baseUrls.json");
class commonUtilities {
  constructor(page) {
    this.page = page;
  }
  async waitForDisplayed(selector) {
    try {
      await this.page
        .locator(selector)
        .waitFor({ state: "visible", timeout: 5000 });
    } catch (error) {
      console.log(
        `Element with selector "${selector}" not displayed within the  timeout`
      );
      throw error;
    }
  }
  async urlLaunch(environment, appURLKey) {
    const targetEnv = process.env.TEST_ENV || environment;

    if (!env[targetEnv]) {
      throw new Error(`Environment "${targetEnv} not found in baseUrls.json"`);
    }
    const baseURL = env[targetEnv][appURLKey];

    if (!baseURL) {
      throw new ERROR(
        `URL Key "${appURLKey} not found for environment "${targetEnv} in baseUrls.json"`
      );
    }
    const targetURL = `${baseURL}`;
    console.log(`Launching URL : ${targetURL} for Environment : ${targetEnv}`);
    await this.page.goto(targetURL);
    await this.page.waitForTimeout(3000);
    return targetURL;
  }
  async clickAndNavigate(selector, timeout = 3000, waitUntil = "networkidle") {
    await this.waitForDisplayed(selector);
    const navigationPromise = this.page.waitForNavigation({
      timeout,
      waitUntil,
    });
    await this.page.locator(selector).click();
    await navigationPromise;
    await this.page.waitForLoadState("networkidle");
    console.log("Navigation completed and page reached 'networkidle' state.");
  }
  async getPageTitle() {
    return await this.page.title();
  }
  async closeBrowser(context) {
    if (context) {
      console.log("closing the browser context");
      await context.close();
    } else {
      console.warn("browser context isnot defined, connot close");
    }
  }
  async closePage(page) {
    if (page) {
      console.log("closing the page");
      await page.close();
    } else {
      console.warn("Page is not defined, cannot close");
    }
  }
}
module.exports = commonUtilities;
