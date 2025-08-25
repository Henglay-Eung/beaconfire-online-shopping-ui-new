import { Order } from "./order.model";

export interface OrderDetails extends Order{
    orderItems: OrderItem[];
}

interface OrderItem {
    itemId: number;
    quantity: number;
    purchasePrice: number;
    wholesalePrice: number;
    productId: number;
}


export interface CreateOrderItem {
    productId: number;
    quantity: number;
}