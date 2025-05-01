import { expect, Page } from '@playwright/test';
import { ProductInputModel } from '../../product/types';
import { step } from 'playwright-helpers';
import BasePage from '@pages/basePage';

export default class CartComponent extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	/**
	 * Application contents
	 */

	/**
	 * Locators
	 */
	readonly wizardSteps = this.page.locator('.wizard-steps');
	readonly productItem = (productName: string) =>
		this.wizardSteps.filter({ hasText: new RegExp(productName) });
	readonly productName = (name: string) =>
		this.productItem(name).getByTestId('product-title');
	readonly productQtyField = (name: string) =>
		this.productItem(name).getByTestId('product-quantity');
	readonly productUnitPrice = (name: string) =>
		this.productItem(name).getByTestId('product-price');
	readonly productLinePrice = (name: string) =>
		this.productItem(name).getByTestId('line-price');
	readonly cartStepBtn = this.page.getByTestId('proceed-1');
	readonly signInStepBtn = this.page.locator('');
	readonly billingAddressBtn = this.page.locator('');
	readonly paymentStepBtn = this.page.locator('');
	readonly removeItemBtn = this.page.locator('.btn-danger');
	readonly cartTotalPrice = this.page.getByTestId('cart-total');

	/**
	 * Actions
	 */
	async removeProductFromCart(productName: string) {}

	/**
	 * Assertions
	 */
	@step()
	async expectProduct(product: ProductInputModel, quantity: number) {
		const linePrice = product.price * quantity;

		await expect(this.productName(product.name)).toHaveCount(1);
		await expect(this.productQtyField(product.name)).toHaveValue(
			quantity.toString()
		);
		await expect(this.productUnitPrice(product.name)).toContainText(
			product.price.toString()
		);
		await expect(this.productLinePrice(product.name)).toContainText(
			linePrice.toString()
		);
	}

	@step()
	async expectTotalPrice() {}

	@step()
	async expectRemovedProductFromCart(productName: string) {}
}
