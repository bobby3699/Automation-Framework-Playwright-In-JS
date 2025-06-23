// fixtures.js
import { test as base } from '@playwright/test';
import DashboardPage from '../pageObjects/Dashboard-page';


export const test = base.extend({
  dashboardPage: async ({ page }, use) => {
    await page.goto('/login'); // Navigate to the base URL
    await use(new DashboardPage(page));
  },

})

