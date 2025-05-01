import BasePage from '@pages/basePage';
import { Page } from '@playwright/test';
import { step } from 'playwright-helpers';

export default class DashboardPage extends BasePage {
	static readonly adminUri = 'admin';
	static readonly dashboardUri = `${this.adminUri}/dashboard`;

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Assertions
	 */
	@step()
	async expectNavigateToDashboardPage() {
		await this.page.waitForURL(`**/${DashboardPage.dashboardUri}`);
	}
}
