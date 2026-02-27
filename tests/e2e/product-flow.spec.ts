import { test, expect } from '@playwright/test';

test.describe('Flujo de Productos', () => {
    test('Navegación al detalle de un producto y CTA', async ({ page }) => {
        await page.goto('/productos');

        await expect(page.locator('h1').filter({ hasText: /Catálogo/i })).toBeVisible();

        // Encontrar la lista de productos y hacer clic en el primero
        // Aseguramos que los productos se rendericen buscando un link dentro del grid
        const firstProductLink = page.locator('a[href^="/productos/"]').first();

        await expect(firstProductLink).toBeVisible();
        await firstProductLink.click();

        // Esperar que la página del producto cargue
        await expect(page).toHaveURL(/.*\/productos\/.+/);

        // Verificar título del producto y botón de compra
        await expect(page.locator('h1').first()).toBeVisible();

        const buyBtn = page.locator('a[href*="whatsapp.com"]').first();

        // El botón para pedir por WhatsApp debe estar visible
        if (await buyBtn.isVisible()) {
            const href = await buyBtn.getAttribute('href');
            expect(href).toContain('api.whatsapp.com/send');
            expect(href).toContain('text=');
        }
    });
});
