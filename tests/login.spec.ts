import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Login Tests', () => {
    test('User should login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.navigate();
        await loginPage.login(
            'standard_user',
            ''
        );

        // await productsPage.verifyPageTitleIsVisible();
        // await productsPage.verifyProductsCount(6);

        // const actualMessage = await loginPage.getErrorMessage();
        // console.log(actualMessage);

    });
});
