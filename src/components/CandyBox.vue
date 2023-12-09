<template>
  <div class="flex  justify-center items-center rounded-lg select-none
  h-24 w-24 relative">
    <span class=" absolute font-xl">{{id}}</span>

    <img v-if="candyData" :src="candyData"  class="h-20 w-20 "/> 
  </div>
</template>

<script lang="ts">
export default {
  props: {
    candyData: {
      type: String,
    },
    id:{
      type:Number,
    }
  },
  setup() {},
};
</script>

<style>
</style>