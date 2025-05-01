import { expect, Page } from '@playwright/test';
import NavigationComponent from '@pages/components/navigationBar';
import SideBarComponent from '@pages/components/sideBarComponent';
import CartComponent from './checkout/components/cart';
import { step } from 'playwright-helpers';
import BasePage from './basePage';

export default class HomePage extends BasePage {
	navComponent: NavigationComponent;
	sideBarComponent: SideBarComponent;
	cartComponent: CartComponent;

	constructor(page: Page) {
		super(page);
		this.navComponent = new NavigationComponent(page);
		this.sideBarComponent = new SideBarComponent(page);
		this.cartComponent = new CartComponent(page);
	}

	static getProductURL(id: string) {
		return `product/${id}`;
	}

	/**
	 * Locators
	 */
	readonly productLink = (name: string) =>
		this.page.locator('[data-test="product-name"]', { hasText: name });
	readonly productLinks = this.page.locator('a[data-test*="product"]').first();

	/**
	 * Actions
	 */
	@step()
	async open() {
		await this.page.goto('/', {
			waitUntil: 'commit',
			timeout: 60_000,
		});
	}

	@step()
	async clickProductName(name: string) {
		await this.productLink(name).click();
	}

	@step()
	async navigateToProductByUrl(id: string) {
		await this.page.goto(HomePage.getProductURL(id));
	}

	/**
	 * Assertions
	 */
	@step()
	async expectNavigateToHomePage() {
		await expect(this.navComponent.navigationMenu).toBeVisible({
			timeout: 60_000,
		});
		await expect(this.productLinks).toBeVisible();
	}
}
