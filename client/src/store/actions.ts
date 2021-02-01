export default {
  toggleImportant({ commit }: any, id: number) {
    commit("TOGGLE_IMPORTANT", id);
  },
  toggleDone({ commit }: any, id: number) {
    commit("TOGGLE_DONE", id);
  },
  deleteTodo({ commit }: any, id: number) {
    commit("DELETE_TODO", id);
  },
  addTodo({ commit }: any, task: string) {
    commit("ADD_TODO", task);
  },
  searchInput({ commit }: any, word: any) {
    commit("SEARCH_TODO", word);
  },
};
