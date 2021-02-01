import { createLogger, Store } from "vuex";
import { createStore } from "vuex";
import { InjectionKey } from "vue";

import todos from "./modules/todos";
import search from "./modules/searchedTodos";

import actions from "./actions";
import mutations from "./mutations";
export interface State {
  todos: [];
  search: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: { todos, search },
  mutations,
  actions,
  modules: {},
});
