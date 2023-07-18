<script lang="ts" setup>
import { PropType, defineProps } from "vue";
import { ProductInterface } from "@/interfaces/product.interface";
import ProductsList from "@/components/products/ProductsListComponent.vue";

defineProps({
  items: {
    type: Array as PropType<ProductInterface[]>,
    required: true
  },
  solo: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});
</script>

<template>
  <div class="products-select">
    <ProductsList :items="items"
                  :solo="solo"
                  action="remove"
                  @remove="$emit('remove', $event)"
    />
  </div>
</template>

<style lang="stylus">
.products-select
  width 100%
</style>
