import { test, expect } from '../fixtures/base.fixture';

test('Dashboard - Verify page elements and functionality', async ({ dashboardPage }) => {
    await dashboardPage.adminClick();
    await expect(dashboardPage.logoutButton).toBeVisible();
})

