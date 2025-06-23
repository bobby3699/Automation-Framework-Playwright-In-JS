import { test as login } from '@playwright/test';
// const fs = require('fs');
// import PasswordUtils from '../utils/passwordUtils';

const authFile = '.auth/login.json';
// if (!fs.existsSync('.auth')) {
//   fs.mkdirSync('.auth');
// }
const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
login('Save  Storage state', async ({ page }) => {
  await page.goto('/login');
  await page.locator('[id="userName"]').fill(USERNAME);
  await page.locator('[id="password"]').fill(PASSWORD);
  // console.log(`Logging in with username: ${USERNAME} and password: ${PASSWORD}`);
  // PasswordUtils.encryptPassword(PASSWORD);
  await page.locator('[id="login"]').click();
  await page.context().storageState({
    path: authFile,
  });
});