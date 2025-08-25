export interface ShoppingCartItem {
    productId: number;
    name: string;
    description: string;
    retailPrice: number;
    wholesalePrice: number;
    quantity: number;
}

export interface CreateShoppingCartItem {
    productId: number;
    quantity: number;
}