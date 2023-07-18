<script lang="ts" setup>
import { PropType, defineProps } from "vue";
import { ProductInterface } from "@/interface/product.interface";

defineProps({
  item: {
    type: Object as PropType<ProductInterface>,
    required: true
  },
  action: {
    type: String as PropType<string>,
    default: "select"
  }
});
</script>

<template>
  <div class="products-item"
       @click="action === 'select' ? $emit('select', item) : $emit('remove', item.id)"
  >
    <p>ID: {{ item.id }}</p>
    <p>ID: {{ item.name }}</p>
  </div>
</template>

<style lang="stylus">
.products-item
  width 100%
  height 100px
  border 1px solid #3e3e3e
  padding 5px
  display flex
  flex-direction column
  align-items center
  justify-content center
  cursor pointer
  transition background-color .25s linear
  color #3e3e3e

  &:hover
    background-color darken(#fff, 10%)
</style>
