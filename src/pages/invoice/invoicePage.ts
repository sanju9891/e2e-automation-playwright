import { Page } from '@playwright/test';
import BasePage from '../basePage';

export default class InvoicePage extends BasePage {
	static readonly invoiceUri = 'account/invoices';

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Application contents
	 */

	/**
	 * Locators
	 */
	readonly invoicesTable = this.page.locator('//app-invoices');

	/**
	 * Assertions
	 */
}
