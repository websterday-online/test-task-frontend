import { ProductClient } from "@/clients/product.client";
import type { ProductInterface } from "@/interfaces/product.interface";

export default class ProductService {
  static async getUserItems(): Promise<ProductInterface[]> {
    return await ProductClient.getUserItems();
  }

  static async getProducts(): Promise<ProductInterface[]> {
    return await ProductClient.getProducts();
  }
}

