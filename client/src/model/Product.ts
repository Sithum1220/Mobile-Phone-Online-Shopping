export interface Variants {
  color: string;
  image: string;
  storage: string;
  ram: string;
  signal: string;
}

export interface Reviews {
  name: string;
  date: string;
  rate: number;
  review: string;
}

export interface BODY {
  mainTitle: string;
  subTitles: string[];
  details: string[];
}

export interface NETWORK {
  mainTitle: string;
  subTitles: string[];
  details: string[];
}

export interface LAUNCH {
  mainTitle: string;
  subTitles: string[];
  details: string[];
}

export interface DISPLAY {
  mainTitle: string;
  subTitles: string[];
  details: string[];
}

export interface Specificatio {
  BODY: BODY;
  NETWORK: NETWORK;
  LAUNCH: LAUNCH;
  DISPLAY: DISPLAY;
}

export interface Description {
  title: string;
  details: string;
  features: string[];
}

export interface Product {
  id: number;
  category: string;
  brand: string;
  image: string;
  model: string;
  featured: boolean;
  sale: boolean;
  newPrice: number;
  price: number;
  qty: number;
  variants: Variants[];
  reviews: Reviews[];
  specification: Specificatio[];
  description: Description | string; // Allow description to be either an object or a string
}