import { expect } from '@fixtures/baseAPIFixture';
import { request } from '@playwright/test';
import { Headers } from '@api/baseAPI';
import BrandApi from '@api/brand/brandApi';
import { stringToSlug, randomWords } from 'utils/randomize';
import { BrandResponse } from '@api/brand/types';

export async function createBrand(headers: Headers) {
	let body: BrandResponse;

	const brandApi = new BrandApi(await request.newContext(), headers);

	await expect(async () => {
		const brandName = randomWords();
		const resp = await brandApi.createBrand(brandName, stringToSlug(brandName));
		expect(resp).toHaveCreatedStatus();
		body = await resp.json();
	}).toPass({
		intervals: [1_000, 2_000, 5_000],
		timeout: 10_000,
	});

	return body;
}
