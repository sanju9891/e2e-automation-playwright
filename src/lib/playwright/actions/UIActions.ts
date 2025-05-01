import { Page } from '@playwright/test';
import UIElements from './UIElements';

export default class UIActions {
	protected uiElements: UIElements;

	constructor(private page: Page) {
		this.uiElements = new UIElements(page);
	}
}
