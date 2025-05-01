import { Page } from '@playwright/test';

export default abstract class BasePage {
	protected page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	/**
	 * Locators
	 */
	// private pageTitle = this.page.getByTestId('page-title');

	/**
	 * Actions
	 */

	/**
	 * Assertions
	 */
	// async expectPageTitleDisplayed() {
	// 	await expect(this.pageTitle())
	// }
}
