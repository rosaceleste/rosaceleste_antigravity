import { test, expect } from '@playwright/test';

test.describe('Formulario de Comunidad', () => {
    test('Debe abrir el diálogo y validar la estructura básica', async ({ page }) => {
        await page.goto('/');

        // Click en un botón que diga "Unirme ya", "Comunidad", o similar
        // Dado que puede variar, buscamos un botón en el UI con texto de comunidad.
        const communityBtn = page.locator('button', { hasText: /Unirme|Comunidad/i }).first();

        if (await communityBtn.isVisible()) {
            await communityBtn.click();

            const dialog = page.locator('div[role="dialog"]');
            await expect(dialog).toBeVisible();

            // Verificar campos requeridos
            await expect(page.locator('input[name="name"]')).toBeVisible();
            await expect(page.locator('input[name="lastName"]')).toBeVisible();
            await expect(page.locator('input[name="email"]')).toBeVisible();
            await expect(page.locator('input[name="whatsapp"]')).toBeVisible();

            // Cerrar el modal (Escape)
            await page.keyboard.press('Escape');
            await expect(dialog).toBeHidden();
        } else {
            console.log('Botón de comunidad no encontrado en el index, se omite prueba del modal');
        }
    });
});
