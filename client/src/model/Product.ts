export interface Product {
	category: string;
	id: number;
	product: RootObjectProduct[];
}
export interface RootObjectProduct {
	id: number;
	itemCategory: string;
	title: string;
	image: string;
	price: string;
}