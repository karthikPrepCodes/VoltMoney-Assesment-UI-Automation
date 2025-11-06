class CheckLoanEligibilityPageSelectors {
  get enterMobileNumber() {
    return "//input[@placeholder = 'Enter mobile number']";
  }
  get enterPan() {
    return "//input[@placeholder = 'Enter PAN']";
  }
  get checkEligibilityButton() {
    return "//button/span[contains(text(),'Check eligibility for FREE')]";
  }
  get goTotermsAndConditions() {
    return "//div/span[contains(text(),'T&Cs')]";
  }
  get goToprivacyPolicy() {
    return "//div/span[contains(text(),'Privacy Policy')]";
  }
  get goToBenifits() {
    return "//div[(text()='Benefits')]";
  }
  get goToFaqs() {
    return "//div[(text()='FAQs')]";
  }
  get goToResources() {
    return "//div[(text()='Resources')]";
  }
  get goToPartnerWithUs() {
    return "//div[(text()='Partner with us')]";
  }
  get goToPartnerWithUs() {
    return "//div[(text()='Partner with us')]";
  }
  get goToContactUsHeaders() {
    return "//div[@class = 'header_headerLinksContainer__vC_ed' and contains(text(),'Contact us')]";
  }
  get goToAboutUsHeaders() {
    return "//div[@class = 'header_headerLinksContainer__vC_ed' and contains(text(),'About us')]";
  }
  get signIn() {
    return "//div[(text()='Sign in')]";
  }
  get checkEligibilityIn15sHeader() {
    return "//div[@class = 'button_buttonPrimaryLarge__zgNyF']";
  }
  get noImpactOnCibilScore() {
    return "//div[(text()='No impact on CIBIL score')]";
  }

  get goToContactUsFooter() {
    return "//div[@class = 'footer_FooterHelpSectionContainerAnchor__ZxlhV' and contains(text(),'Contact us')]";
  }
  get goToAboutUsFooter() {
    return "//div[@class = 'footer_FooterHelpSectionContainerAnchor__ZxlhV' and contains(text(),'About us')]";
  }
}
module.exports = new CheckLoanEligibilityPageSelectors();
