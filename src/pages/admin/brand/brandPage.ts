import BasePage from '@pages/basePage';
import { expect, Page } from '@playwright/test';
import { step } from 'playwright-helpers';

export default class BrandPage extends BasePage {
	static readonly brandUri = 'admin/brands';

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Assertions
	 */
	@step()
	async expectBrandNameDisplayed(name: string) {
		await expect(this.page.getByText(name)).toBeVisible();
	}
}
