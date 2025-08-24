import { Product } from "src/app/user/models/product.model";

export interface ProductSold extends Product {
    saleCount: number;
}