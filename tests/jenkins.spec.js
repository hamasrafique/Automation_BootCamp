import { test, expect } from "../fixtures/testSetup.js";
import loginData from "../testdata/loginData.json" assert { type: "json" };
import LoginPage from "../pages/LoginPage.js";
import { attachStepScreenshot } from "../utils/screenshotUtil.js";

test.describe("Login", () => {
  test("Login Test Case with valid user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData;
    await test.step("Enter credential and login", async () => {
      await loginPage.login(data.username, data.password);
    });

    await test.step("Verify Welcome Message on Landing page", async () => {
      await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
      await attachStepScreenshot(
        page,
        "05 - After welcome message verification",
      );
    });
  });
});
