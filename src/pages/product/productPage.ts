import { expect, Page } from '@playwright/test';
import BasePage from '../basePage';
import { ProductInputModel } from './types';
import { step } from 'playwright-helpers';

export default class ProductPage extends BasePage {
	static readonly productUri = 'product';

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Application contents
	 */
	readonly dd = 'Unauthorized, can not add product to your favorite list.';

	/**
	 * Locators
	 */
	public readonly productDetails = this.page.locator('.my-3');
	readonly productName = this.page.getByTestId('product-name');
	readonly unitPrice = this.page.getByTestId('unit-price');
	readonly qtyField = this.page.getByTestId('quantity');
	readonly minusQtyBtn = this.page.getByTestId('decrease-quantity');
	readonly plusQtyBtn = this.page.getByTestId('increase-quantity');
	readonly addToCartBtn = this.page.getByTestId('add-to-cart');
	readonly addToFavoritesBtn = this.page.getByTestId('add-to-favorites');
	readonly toastBox = this.page.locator('#toast-container');
	readonly toastSucceedMsg = this.toastBox.locator('.toast-success');
	readonly toastErrorMsg = this.toastBox.locator('.toast-error');
	readonly outOfStockMsg = this.page.getByTestId('out-of-stock');

	/**
	 * Actions
	 */
	@step()
	async clickAddToCart() {
		await this.addToCartBtn.click();
	}

	@step()
	async clickAddToFavourites() {
		await this.addToFavoritesBtn.click();
	}

	@step()
	async closeToastMessageBox() {
		await this.toastBox.click();
		await this.toastBox.waitFor({ state: 'hidden' });
	}

	/**
	 * Assertions
	 */
	@step()
	async expectProductDetails(product: ProductInputModel) {
		await expect(this.productName).toHaveText(product.name);
		await expect(this.unitPrice).toHaveText(product.price.toString());
	}

	@step()
	async expectAddedProductToCartSuccessMsg() {
		await expect(this.toastSucceedMsg).toBeVisible();
	}

	@step()
	async expectAddedProductToCartMessageHidden() {
		await expect(this.toastSucceedMsg).toBeHidden();
	}

	@step()
	async expectOutOfStockMessageShown() {
		await expect(this.outOfStockMsg).toBeVisible();
	}

	@step()
	async expectSetQuantityDisabled() {
		await expect(this.qtyField).toHaveValue('1');
		await expect(this.qtyField).toBeDisabled();
		await expect(this.minusQtyBtn).toBeDisabled();
		await expect(this.plusQtyBtn).toBeDisabled();
	}

	@step()
	async expectOutOfStockMessageHidden() {
		await expect(this.outOfStockMsg).toBeHidden();
	}

	@step()
	async expectAddToCartButtonDisabled() {
		await expect(this.addToCartBtn).toBeDisabled();
	}

	@step()
	async expectAddToCartButtonEnabled() {
		await expect(this.addToCartBtn).toBeEnabled();
	}

	@step()
	async expectAddToFavouritesButtonEnabled() {
		await expect(this.addToFavoritesBtn).toBeEnabled();
	}

	@step()
	async expectAddedToFavouritesErrorMsg() {
		await expect(this.toastErrorMsg).toBeVisible();
	}

	@step()
	async expectToastMessageBoxHidden() {
		await expect(this.toastBox).toBeHidden();
	}
}
