export interface Product {
    productId: number;
    name: string;
    description: string;
    retailPrice: number;
    wholesalePrice: number;
}

export interface CreateProduct extends Product {
    quantity: number;
}

export interface UpdateProduct {
    name: string;
    description: string;
    retailPrice: number;
    wholesalePrice: number;
    quantity: number;
}

export interface AdminProduct extends Product {
    quantity: number;
}