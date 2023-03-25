import { test, expect } from '@playwright/test';

test('test button is working', async ({ page }) => {
  await page.goto('http://localhost:5000/');
  const countButton = page.getByRole('button', { name: 'count is 0' });
  await countButton.click();

  const countButtonNew = page.getByRole('button', { name: 'count is 1' });
  await expect(countButtonNew).toHaveText('count is 1')
});