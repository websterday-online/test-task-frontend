import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import type { ProductInterface } from "@/interfaces/product.interface";
import ProductService from "@/services/product.service";

export const useProductsStore = defineStore("products", () => {
  const user_items = reactive<ProductInterface[]>([]);
  const user_items_selected = reactive<Set<ProductInterface>>(new Set());
  const user_items_selected_quantity = computed(() => user_items_selected.size);
  const user_items_max = ref<number>(6);

  const products = reactive<Array<ProductInterface>>([]);
  const products_selected = reactive<Set<ProductInterface>>(new Set());

  function addSelectedUserItem(data: ProductInterface): void {
    if (user_items_selected.size < 6) {
      user_items_selected.add(data);
    }
  }

  function removeSelectedUserItem(id: number): void {
    user_items_selected.forEach((item: ProductInterface) => item.id === id ? user_items_selected.delete(item) : item);
  }

  function addSelectedProductItem(data: ProductInterface): void {
    if (products_selected.size < 1) {
      products_selected.add(data);
    }
  }

  function removeSelectedProductItem(id: number): void {
    products_selected.forEach((item: ProductInterface) => item.id === id ? products_selected.delete(item) : item);
  }

  async function getUserItems(): Promise<void> {
    user_items.push(...await ProductService.getUserItems());
  }

  async function getProducts(): Promise<void> {
    products.push(...await ProductService.getProducts());
  }

  return {
    user_items,
    user_items_selected,
    user_items_selected_quantity,
    user_items_max,
    products,
    products_selected,
    addSelectedUserItem,
    removeSelectedUserItem,
    addSelectedProductItem,
    removeSelectedProductItem,
    getUserItems,
    getProducts
  };
});
