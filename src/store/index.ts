import { defineStore } from "pinia";
import { createPinia } from "pinia";

interface BoardInfo {
  board: string[];
  boardSize: number;
}
export const useBoardStore = defineStore("board", {
  state: (): BoardInfo => {
    return {
      board: [],
      boardSize: 8,
    };
  },
  getters: {
    getBoard(state): string[] {
      return state.board;
    },
    getBoardSize(state): number {
      return state.boardSize;
    },
  },
  actions: {
    updateBoard(newBoard: string[]) {
      this.board = newBoard;
    },
    updateBoardSize(newSize: number) {
      this.boardSize = newSize;
    },
  },
});

const pinia = createPinia();

export default pinia;
