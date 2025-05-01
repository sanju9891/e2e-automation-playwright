import { en, Faker } from '@faker-js/faker';

const faker = new Faker({ locale: en });

export function randomEmail() {
	return `${Date.now()}_${randomString(5)}@gmail.com`;
}

export function randomString(length = 15) {
	return faker.string.alphanumeric({ length: length });
}

export function randomWords(options = { min: 3, max: 5 }) {
	return faker.word.words({ count: options });
}

export function stringToSlug(value: string) {
	return value
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}

export function randomPassword() {
	return faker.internet.password({
		length: 10,
		prefix: '@95Lonv',
	});
}
