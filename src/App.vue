<script  lang="ts">
import { storeToRefs } from "pinia";
import { useBoardStore } from "./store";
import { createBoard } from "./utils/createBoard";
import { onMounted, onUnmounted, watch } from "vue";
import Board from "./components/Board.vue";
import {
  isMatchColumnFour,
  isMatchColumnThree,
  isMatchRowFour,
  isMatchRowThree,
} from "./utils/calculateMatchCandy";
import {
  generateValidMove,
  isCheckColumnFour,
  isCheckColumnThree,
} from "./utils/matchCandy";
export default {
  setup() {
    const store = useBoardStore();
    let { board, boardSize } = storeToRefs(store);
    console.log("store", store);

    watch(boardSize, (newSize) => {
      const newBoard = createBoard(newSize);
      // Dispatch the updateBoard action here (your implementation may vary)
      // dispatch(updateBoard(newBoard));
      // For the sake of example, setting the board directly
      board.value = newBoard;
    });

    watch(board, (newValue, oldValue) => {
      isMatchColumnFour(
        board.value,
        boardSize.value,
        isCheckColumnFour(boardSize.value)
      );
      isMatchColumnThree(
        board.value,
        boardSize.value,
        isCheckColumnThree(boardSize.value)
      );
      isMatchRowFour(
        board.value,
        boardSize.value,
        generateValidMove(boardSize.value)
      );
      isMatchRowThree(
        board.value,
        boardSize.value,
        generateValidMove(boardSize.value)
      );
      store.updateBoard(board.value);
    });

    onMounted(() => {
      // store.updateBoardSize(8);
      store.updateBoard(createBoard(store.boardSize));
      console.log("board");
    });
    return {
      board,
      boardSize,
    };
  },
  components: { Board },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Board />
  </div>
</template>

<style scoped>
</style>
