import BasePage from '@pages/basePage';
import { expect, Page } from '@playwright/test';
import {
	BankDetailsInputModel,
	CreditCardInputModel,
	GiftCardInputModel,
	MonthlyInstallmentLabel,
	PaymentMethodLabel,
} from '../types';
import { step } from 'playwright-helpers';

export default class PaymentComponent extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	/**
	 * Application contents
	 */

	readonly choosePaymentMethodTxt = 'Choose your payment method';
	readonly thanksForYourOrderTxt =
		'Thanks for your order! Your invoice number is';

	/**
	 * Locators
	 */
	readonly confirmOrder = this.page.locator('#order-confirmation');
	readonly bankNameField = this.page.getByTestId('bank_name');
	readonly accountNameField = this.page.getByTestId('account_name');
	readonly accountNumberField = this.page.getByTestId('account_number');
	readonly creditCardNumberField = this.page.getByTestId('credit_card_number');
	readonly expDateField = this.page.getByTestId('expiration_date');
	readonly cvvField = this.page.getByTestId('cvv');
	readonly cardHolderNameField = this.page.getByTestId('card_holder_name');
	readonly giftCardNumberField = this.page.getByTestId('gift_card_number');
	readonly validationCodeField = this.page.getByTestId('validation_code');

	/**
	 * Actions
	 */
	@step()
	async selectPaymentMethod(paymentMethod: PaymentMethodLabel) {
		await this.page.selectOption('#payment-method', {
			label: paymentMethod,
		});
	}

	@step()
	async selectMonthlyInstallments(value: MonthlyInstallmentLabel) {
		await this.page.selectOption('#monthly_installments', value);
	}

	/**
	 * Methods
	 */
	@step()
	async fillBankDetails(bankDetails: BankDetailsInputModel) {
		const { bankName, accountName, accountNumber } = bankDetails;

		if (bankName) await this.bankNameField.fill(bankName);
		if (accountName) await this.accountNameField.fill(accountName);
		if (accountNumber) await this.accountNumberField.fill(accountNumber);
	}

	@step()
	async fillCreditCard(creditCard: CreditCardInputModel) {
		const { creditCardNumber, expirationDate, cvv, cardHolderName } =
			creditCard;

		if (creditCardNumber)
			await this.creditCardNumberField.fill(creditCardNumber);
		if (expirationDate) await this.expDateField.fill(expirationDate);
		if (cvv) await this.cvvField.fill(cvv);
		if (cardHolderName) await this.cardHolderNameField.fill(cardHolderName);
	}

	@step()
	async fillGiftCard(card: GiftCardInputModel) {
		const { giftCardNumber, validationCode } = card;

		if (giftCardNumber) await this.giftCardNumberField.fill(giftCardNumber);
		if (validationCode) await this.validationCodeField.fill(validationCode);
	}

	/**
	 * Assertions
	 */
	@step()
	async expectOrderedSuccess() {
		await expect(this.confirmOrder).toContainText(this.thanksForYourOrderTxt);
	}
}
