<script lang="ts" setup>
import { defineProps, PropType } from "vue";

defineProps({
  selected_quantity: {
    type: Number as PropType<number>,
    required: true,
    default: 0
  },
  max_quantity: {
    type: Number as PropType<number>,
    required: true,
    default: 0
  }
});
</script>

<template>
  <div class="products-counter">Selected: {{ selected_quantity }}/{{ max_quantity }}</div>
</template>

<style lang="stylus">
.products-counter
  color #3e3e3e
</style>
