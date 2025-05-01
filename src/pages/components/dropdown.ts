import BasePage from '@pages/basePage';
import { Page } from '@playwright/test';

export default class DropdownComponent extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async selectByName() {}

	async selectByLabel() {}
}
