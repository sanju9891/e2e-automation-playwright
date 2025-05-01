import BasePage from '@pages/basePage';
import InvoicePage from '@pages/invoice/invoicePage';
import { Page } from '@playwright/test';
import { step } from 'playwright-helpers';

export default class AccountPage extends BasePage {
	static readonly accountUri = 'account';
	static readonly profileUri = `${AccountPage.accountUri}/accountUri`;
	static readonly dashboardUri = 'admin/dashboard';

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Assertions
	 */
	@step()
	async expectNavigateToAccountPage() {
		await this.page.waitForURL(`**/${AccountPage.accountUri}`);
	}

	@step()
	async expectNavigateToProfilePage() {
		await this.page.waitForURL(`**/${AccountPage.profileUri}`);
	}

	@step()
	async expectNavigateToInvoicesPage() {
		await this.page.waitForURL(`**/${InvoicePage.invoiceUri}`);
	}

	@step()
	async expectNavigateToInvoicePage() {
		await this.page.waitForURL(`**/${InvoicePage.invoiceUri}/*`);
	}
}
