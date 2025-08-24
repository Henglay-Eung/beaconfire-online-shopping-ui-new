import { Product } from "src/app/user/models/product.model";

export interface ProductProfit extends Product {
    profit: number;
}