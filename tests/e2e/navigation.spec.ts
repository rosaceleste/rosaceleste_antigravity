import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('should navigate to home and see the hero title', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h1')).toContainText('Tejiendo Bienestar, Mano a Mano');
    });

    test('should have a working navbar link to productos', async ({ page }) => {
        await page.goto('/');
        const productosLink = page.getByRole('link', { name: 'Productos', exact: true });
        await expect(productosLink).toBeVisible();
    });
});
