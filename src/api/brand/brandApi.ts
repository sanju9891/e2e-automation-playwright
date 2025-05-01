import { APIRequestContext } from '@playwright/test';
import Env from '@api/lib/helpers/env';
import BaseApi, { Headers } from '@api/baseAPI';

export default class BrandApi extends BaseApi {
	static readonly brandEndpoint = 'brands';

	private endpoint: string;

	constructor(request: APIRequestContext, headers: Headers) {
		super(request, headers);
		this.endpoint = Env.API_URL + BrandApi.brandEndpoint;
	}

	async createBrand(name: string, slug: string) {
		return await this.request.post(this.endpoint, {
			data: {
				name,
				slug,
			},
			headers: this.headers,
		});
	}
}
