import BasePage from '@pages/basePage';
import { expect, Page } from '@playwright/test';
import { step } from 'playwright-helpers';

export default class SideBarComponent extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	/**
	 * Application contents
	 */

	/**
	 * Locators
	 */
	readonly sortDropdown = this.page.getByTestId('sort');
	readonly searchField = this.page.getByTestId('search-query');
	readonly searchBtn = this.page.getByTestId('search-submit');
	readonly clearSearchBtn = this.page.getByTestId('search-reset');
	readonly filterByCategory = (categoryName: string) =>
		this.page.locator('.checkbox', { hasText: categoryName });
	readonly filterByBrand = (brandName: string) =>
		this.page.locator('.checkbox', { hasText: brandName });

	/**
	 * Actions
	 */
	@step()
	async clearSearchBox() {
		await this.clearSearchBtn.click();
	}

	/**
	 * Methods
	 */
	@step()
	async searchProductName(name: string) {
		await this.searchField.fill(name);
		await this.searchBtn.click();
	}

	/**
	 * Assertions
	 */
	@step()
	async expectSearchBoxCleared() {
		await expect(this.searchField).toBeEmpty();
	}

	@step()
	async expectListProductsPageShown() {}
}
