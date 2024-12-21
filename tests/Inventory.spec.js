const { test, expect } = require('@playwright/test');

test('Navigate to Inventory page', async ({ page }) => {
  
  await page.goto('hhttps://staging-seller.techbazaar.pk/');
  await page.click('text=Inventory')
  await expect(page).toHaveURL(/.*inventory/);
  await expect(page.locator('text=My Inventory')).toBeVisible();
  
});



