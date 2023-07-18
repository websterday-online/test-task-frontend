<script lang="ts" setup>
import { PropType, defineProps } from "vue";
import { ProductInterface } from "@/interfaces/product.interface";
import ProductsItem from "@/components/products/ProductsItemComponent.vue";

defineProps({
  items: {
    type: Array as PropType<ProductInterface[]>,
    required: true
  },
  action: {
    type: String as PropType<string>,
    default: "select"
  },
  solo: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});
</script>

<template>
  <div :class="{'products-list_solo': solo}"
       class="products-list"
  >
    <ProductsItem
      v-for="item of items"
      :key="item.name"
      :action="action"
      :item="item"
      @remove="$emit('remove', item.id)"
      @select="$emit('select', item)"
    />
  </div>
</template>

<style lang="stylus">
.products-list
  width 100%
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-gap 20px

  &_solo
    grid-template-columns 1fr

    & .products-item
      height 265px
</style>
