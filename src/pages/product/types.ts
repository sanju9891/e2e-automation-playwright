export interface ProductInputModel {
	name?: string;
	description?: string;
	price?: number;
	status?: ProductStatusLabel;
}

export enum ProductStatusLabel {
	inStock = 'In Stock',
	outOfStock = 'Out Of Stock',
}
