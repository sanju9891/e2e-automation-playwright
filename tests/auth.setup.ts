import UserApi from '@api/user/userApi';
import { test as setup } from '@fixtures/baseUIFixture';
import { expect } from '@fixtures/baseAPIFixture';
import Env from '@api/lib/helpers/env';

const adminAuthFile = './playwright/.auth/admin.json';
const customer1AuthFile = './playwright/.auth/customer01.json';
const customer2AuthFile = './playwright/.auth/customer02.json';

setup(
	'Create admin user auth',
	async ({ page, request, navComponent, loginPage, dashboardPage }) => {
		const userApi = new UserApi(request);
		const resp = await userApi.login(Env.ADMIN_EMAIL, Env.ADMIN_PASSWORD);

		expect(resp).toHaveOKStatus();

		await navComponent.openLoginPageURL();
		await navComponent.expectNavigateToLoginPage();
		await loginPage.loginComponent.login(Env.ADMIN_EMAIL, Env.ADMIN_PASSWORD);
		await dashboardPage.expectNavigateToDashboardPage();

		await page.context().storageState({ path: adminAuthFile });
	}
);

setup(
	'Create customer 01 auth',
	async ({ page, request, navComponent, loginPage, accountPage }) => {
		const userApi = new UserApi(request);
		const resp = await userApi.login(
			Env.CUSTOMER_01_EMAIL,
			Env.CUSTOMER_01_PASSWORD
		);

		expect(resp).toHaveOKStatus();

		await navComponent.openLoginPageURL();
		await navComponent.expectNavigateToLoginPage();
		await loginPage.loginComponent.login(
			Env.CUSTOMER_01_EMAIL,
			Env.CUSTOMER_01_PASSWORD
		);

		await accountPage.expectNavigateToAccountPage();

		await page.context().storageState({ path: customer1AuthFile });
	}
);

setup(
	'Create customer 02 auth',
	async ({ page, request, navComponent, loginPage, accountPage }) => {
		const userApi = new UserApi(request);
		const resp = await userApi.login(
			Env.CUSTOMER_02_EMAIL,
			Env.CUSTOMER_02_PASSWORD
		);

		expect(resp).toHaveOKStatus();

		await navComponent.openLoginPageURL();
		await navComponent.expectNavigateToLoginPage();
		await loginPage.loginComponent.login(
			Env.CUSTOMER_01_EMAIL,
			Env.CUSTOMER_01_PASSWORD
		);
		await accountPage.expectNavigateToAccountPage();

		await page.context().storageState({ path: customer2AuthFile });
	}
);
