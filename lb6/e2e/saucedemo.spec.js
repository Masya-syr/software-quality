import { test, expect } from '@playwright/test';

test('TC-01: Успішна авторизація', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);

    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();
});

test('TC-02: Провальна авторизація', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('wrong_password');
    await page.getByTestId('login-button').click();

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('TC-03: Додавання товару до кошика', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();

    await expect(
        page.getByText('Sauce Labs Bolt T-Shirt', {
            exact: true
        })
    ).toBeVisible();
});