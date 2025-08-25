import { CreateOrderItem } from "./order-details.model";

export interface Order {
    orderId: number;
    datePlaced: Date;
    orderStatus: string;
}

export interface CreateOrder {
    orderItems: CreateOrderItem[]
}