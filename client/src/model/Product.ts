export interface Product {
	category: string;
	product: RootObjectProduct[];
}
export interface RootObjectProduct {
	itemCategory: string;
	title: string;
	image: string;
	price: string;
}