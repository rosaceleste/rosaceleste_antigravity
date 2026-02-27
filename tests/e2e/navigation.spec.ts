import { test, expect } from '@playwright/test';

test.describe('Navegación del sitio', () => {
    test('Debe cargar la página principal', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Rosaceleste/);

        // El Navbar debe estar visible
        const nav = page.locator('nav').first();
        await expect(nav).toBeVisible();
    });

    test('Navegación a Clases', async ({ page }) => {
        await page.goto('/');

        // Dependiendo de si la vista es móvil o desktop, interactuar con el link directamente o mediante el menú. 
        // Asumiendo versión desktop por el viewport de playwright.
        await page.click('text=Clases', { force: true });

        // Esperamos que navegue y la url cambie a /clases
        await expect(page).toHaveURL(/.*\/clases/);
        await expect(page.locator('h1').filter({ hasText: /El Arte/i }).first()).toBeVisible();
    });

    test('Navegación a Experiencias', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Experiencias', { force: true });

        await expect(page).toHaveURL(/.*\/experiencias/);
        await expect(page.locator('h1').filter({ hasText: /Experiencia/i }).first()).toBeVisible();
    });

    test('Navegación a Sobre Nosotros', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Sobre Mí', { force: true });

        await expect(page).toHaveURL(/.*\/sobre-mi/);
        // Verificar que hay contenido de nosotros
        await expect(page.locator('h1, h2, h3').filter({ hasText: /Daniela/i }).first()).toBeVisible();
    });
});
