<script lang="ts" setup>
import { useProductsStore } from "@/stores/products";
import { computed, onMounted } from "vue";
import { ProductInterface } from "@/interfaces/product.interface";
import ProductsSelected from "@/components/products/ProductsSelectedComponent.vue";
import ProductsHead from "@/components/products/ProductsHeadComponent.vue";
import ProductsCounter from "@/components/products/ProductsCounterComponent.vue";
import ProductsList from "@/components/products/ProductsListComponent.vue";

const store = useProductsStore();

const user_items = computed<ProductInterface[]>(() => store.user_items);
const user_items_selected = computed<ProductInterface[]>(() => store.user_items_selected);
const user_items_selected_quantity = computed<number>(() => store.user_items_selected_quantity);
const user_items_max = computed<number>(() => store.user_items_max);

const products = computed<ProductInterface[]>(() => store.products);
const products_selected = computed<ProductInterface[]>(() => store.products_selected);
const products_selected_quantity = computed<number>(() => store.products_selected.size);

const selectUserItem = (data: ProductInterface): void => store.addSelectedUserItem(data);
const removeUserItem = (id: number): void => store.removeSelectedUserItem(id);

const selectProductsItem = (data: ProductInterface): void => store.addSelectedProductItem(data);
const removeProductsItem = (id: number): void => store.removeSelectedProductItem(id);

onMounted(() => {
  store.getUserItems();
  store.getProducts();
});
</script>

<template>
  <div class="products">
    <div class="products__container">
      <div class="products__user">
        <div class="products__head">
          <ProductsHead :selected_quantity="user_items_selected_quantity">
            <ProductsSelected :items="user_items_selected"
                              @remove="removeUserItem"
            />
            <ProductsCounter :max_quantity="user_items_max"
                             :selected_quantity="user_items_selected_quantity"
            />
          </ProductsHead>
        </div>

        <div class="products__body">
          <ProductsList :items="user_items"
                        action="select"
                        @select="selectUserItem"
          />
        </div>
      </div>

      <div class="products__stock">
        <div class="products__head">
          <ProductsHead :selected_quantity="products_selected_quantity">
            <ProductsSelected :items="products_selected"
                              solo
                              @remove="removeProductsItem"
            />
          </ProductsHead>
        </div>

        <div class="products__body">
          <ProductsList :items="products"
                        action="select"
                        @select="selectProductsItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.products
  padding 20px

  &__container
    display grid
    grid-template-columns repeat(2, 1fr)
    grid-gap 40px

  &__user, &__stock
    display grid
    grid-template-columns 1fr
    gap 20px

  &__body
    background-color #fafafa
    border 1px solid #2d2d2d
    padding 20px
</style>
