import { ITodos } from "./../types/types";
import { ITodo } from "@/types/types";
import {
  TOGGLE_DONE,
  TOGGLE_IMPORTANT,
  DELETE_TODO,
  ADD_TODO,
  SEARCH_TODO,
} from "./mutation-types";

export default {
  [SEARCH_TODO](state: any, word: string) {
    // if (!word) {
    //   return (state.search = ``);
    // }
    state.search = word;
  },
  [TOGGLE_IMPORTANT](state: ITodos, id: number) {
    const todo: any = state.todos.find((i: ITodo) => {
      return i.id === id;
    });
    todo.important = !todo.important;
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },
  [TOGGLE_DONE](state: ITodos, id: number) {
    const todoDone: any = state.todos.find((i: ITodo) => {
      return i.id === id;
    });
    todoDone.done = !todoDone.done;
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },
  [DELETE_TODO](state: ITodos, id: number) {
    // const index: number = state.todos.findIndex((i: ITodo) => {
    //   return i.id === id;
    // });
    // state.todos.splice(index, 1);
    // const newTodos: ITodo[] = state.todos.filter((i) => i.id !== id);
    state.todos = state.todos.filter((i) => i.id !== id);
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },
  [ADD_TODO](state: ITodos, task: string) {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        task: task,
        done: false,
        important: false,
        createdAt: Date.now(),
      };
      state.todos.push(newTodo);
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
};
