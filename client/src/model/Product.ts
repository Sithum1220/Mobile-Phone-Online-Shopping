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
	price: number;
	details: string;
	qty: number;
	description: {
		description01: string;
		features: string[];
		description02: string;
	}[];
	additionalInfo: {
		color: string;
		height: string;
		volume: string;
		width: string;
		productType: string;
	};

}