<template>
  <div class="flex flex-wrap "
  :style="{
    width:`${boardSize*6.25}rem`
  }">
    
      <candy-box 
      v-for="(candy,index) in board"
      :key="candy"
      :candyData="candy"
      :id="index"
    />

  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useBoardStore } from '../store';
import { createBoard } from '../utils/createBoard';
import { storeToRefs } from 'pinia';
import CandyBox from './CandyBox.vue';
export default {
  components: { CandyBox },
  setup() {
    const store = useBoardStore();
    const { board, boardSize } = storeToRefs(store);
    console.log("store", store);
    return {
      board,
      boardSize,
    };
  }
}
</script>



<style>

</style>