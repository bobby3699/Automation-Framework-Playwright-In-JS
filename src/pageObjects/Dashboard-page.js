import { expect } from 'allure-playwright';
import BasePage from '../utils/Base-page';

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.profile = page.locator("//li[@id='item-3' and contains(@class, 'btn') and .//span[text()='Profile']]");
        this.logo = '[data-testid="user-profile"]';
        this.logoutButton = page.locator('[id="submit"]');
        this.navigationMenu = '[data-testid="nav-menu"]';

        this.surveys= page.locator("#txtSurveyID");
        this.Go= page.locator("#btnFindSurveys");
        this.pageTitle= page.locator(".MuiTypography-root.languageSelectionDropdownMuiTypography-h4");
        this.logout= page.locator("#logged-in > a:nth-child(8)");
        this.logo= page.locator("#logo");
        this.editArrowButton = (surveyID) =>page.locator(`//*[@data-surveyid='${surveyID}']`);
        this.editSurvey=page.locator("(//a[text()='Edit survey'])[1]");
        this.addQuestion=page.locator("#main > div > div:nth-child(17) > div");
        this.dropdown=page.locator("#Question-2 > table > tbody > tr > td");
    }

    async adminClick() {
        await this.click(this.profile);
    }

    async navigateToProfile() {
        await this.click(this.userProfile);
    }

    async logout() {
        await this.click(this.logoutButton);
    }

    async isUserLoggedIn() {
        return await this.isElementVisible(this.navigationMenu);
    }
}

export default DashboardPage;
