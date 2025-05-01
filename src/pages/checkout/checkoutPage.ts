import { expect, Page } from '@playwright/test';
import { step } from 'playwright-helpers';

import LoginComponent from '@pages/components/login';
import CartComponent from './components/cart';
import AddressComponent from '@pages/components/address';
import PaymentComponent from './components/payment';
import BasePage from '@pages/basePage';

export default class CheckoutPage extends BasePage {
	static readonly checkoutUri = 'checkout';

	cartComponent: CartComponent;
	loginComponent: LoginComponent;
	addressComponent: AddressComponent;
	paymentComponent: PaymentComponent;

	constructor(page: Page) {
		super(page);
		this.cartComponent = new CartComponent(page);
		this.loginComponent = new LoginComponent(page);
		this.addressComponent = new AddressComponent(page);
		this.paymentComponent = new PaymentComponent(page);
	}

	/**
	 * Application contents
	 */
	readonly processToCheckoutTxt = 'Proceed to checkout';
	readonly cartTxt = 'Cart';
	readonly loggedInTxt = 'you are already logged in';
	readonly billingAddressTxt = 'Billing Address';
	readonly paymentTxt = 'Payment';
	readonly signedInSucceededTxt =
		'you are already logged in. You can proceed to checkout.';
	readonly paymentSuccessTxt = 'Payment was successful';

	/**
	 * Locators
	 */
	readonly checkoutForm = this.page.locator('//app-checkout');
	readonly processToCheckoutBtn = this.page.getByRole('button', {
		name: this.processToCheckoutTxt,
	});
	readonly signInMsg = this.page.locator('.login-form-1 > p');
	readonly currentStep = this.page.locator('ul.steps-indicator > li.current');
	readonly addressStepTitle = this.page.locator('app-address h3');
	readonly paymentStepTitle = this.page.locator('app-payment h3');
	readonly signInStep = this.page.locator('.login-form-1').nth(0);
	readonly confirmBtn = this.page.getByTestId('finish');
	readonly paymentSuccessMsg = this.page.getByTestId('payment-success-message');

	/**
	 * Actions
	 */
	@step()
	async clickProcessToCheckout() {
		await this.processToCheckoutBtn.click();
	}

	@step()
	async clickConfirm() {
		await this.confirmBtn.click();
	}

	/**
	 * Assertions
	 */
	@step()
	async expectProcessToCheckoutDisabled() {
		await expect(this.processToCheckoutBtn).toBeDisabled();
	}

	@step()
	async expectNavigateToCartStep() {
		await expect(this.currentStep).toContainText(this.cartTxt);
	}

	@step()
	async expectNavigateToSignInStep() {
		await expect(this.signInStep).not.toContainText(this.loggedInTxt);
	}

	@step()
	async expectNavigateToSignedInStep() {
		await expect(this.signInStep).toContainText(this.loggedInTxt);
	}

	@step()
	async expectToNavigateToBillingAddressStep() {
		await expect(this.addressStepTitle).toHaveText(this.billingAddressTxt);
	}

	@step()
	async expectNavigateToPaymentStep() {
		await expect(this.paymentStepTitle).toHaveText(this.paymentTxt);
	}

	@step()
	async expectSignedInSuccess() {
		await expect(this.signInMsg).toContainText(this.signedInSucceededTxt);
	}

	@step()
	async expectPaymentSuccessMsg() {
		await expect(this.paymentSuccessMsg).toHaveText(this.paymentSuccessTxt);
	}

	@step()
	async expectPaymentStepOpened() {
		// await expect(this.payment)
	}
}
