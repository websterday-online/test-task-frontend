<script lang="ts" setup>
import { PropType, defineProps } from "vue";

defineProps({
  selected_quantity: {
    type: Number as PropType<number>,
    default: 0,
  },
});
</script>

<template>
  <div class="products-head">
    <template v-if="selected_quantity">
      <slot></slot>
    </template>

    <template v-else>
      <p class="products-head__empty">The list is empty!</p>
    </template>
  </div>
</template>

<style lang="stylus">
.products-head
  display grid
  grid-template-columns 1fr
  gap 20px
  background-color #fafafa
  border 1px solid #2d2d2d
  padding 20px
  min-height 100px
  color #3e3e3e

  &__empty
    color #3e3e3e
    display flex
    align-items center
    justify-content center
</style>
