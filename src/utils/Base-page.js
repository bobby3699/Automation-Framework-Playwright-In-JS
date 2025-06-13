class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(element) {
        await element.waitFor({ state: 'visible' });
        await this.page.click(element);
    }

    async typeText(element, text) {
        await element.waitFor({ state: 'visible' });
        await this.page.fill(element, text);
    }

    async getText(element) {
        await element.waitFor({ state: 'visible' });
        return await this.page.textContent(element);
    }
}

export default BasePage;
