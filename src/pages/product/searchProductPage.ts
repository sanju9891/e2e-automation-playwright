import BasePage from '@pages/basePage';
import SideBarComponent from '@pages/components/sideBarComponent';
import { expect, Page } from '@playwright/test';
import { step } from 'playwright-helpers';

export default class SearchProduct extends BasePage {
	sideBarComponent: SideBarComponent;

	constructor(page: Page) {
		super(page);
		this.sideBarComponent = new SideBarComponent(page);
	}

	/**
	 * Application contents
	 */
	readonly headingPage = this.page.getByTestId('search-caption');
	readonly listProductNames = this.page.getByTestId('product-name').all();

	/**
	 * Locators
	 */

	/**
	 * Actions
	 */

	/**
	 * Methods
	 */

	/**
	 * Assertions
	 */
	@step()
	async expectNavigateToSearchPage() {
		await expect(this.headingPage).toBeVisible();
	}

	@step()
	async expectSearchResults(searchProduct: string) {
		const matchedProducts = await this.listProductNames;
		for (const productName of matchedProducts) {
			await expect(productName).toContainText(searchProduct);
		}
	}

	@step()
	async expectTotalMatchesProducts(count: number) {
		// TODO:
	}
}
