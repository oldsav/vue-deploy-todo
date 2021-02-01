<!-- Main -->
<template>
  <div id="root-container">
    <Header v-bind:search="search" />
    <TodoInput />
    <TodoTitle
      v-bind:allTodos="allTodos"
      v-bind:todoDone="todoDone"
      v-bind:todoImportant="todoImportant"
    />
    <List v-bind:filtredTodos="filtredTodos" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { useStore, mapState } from "vuex";
import { computed, defineComponent } from "vue";

import List from "./components/List.vue";
import Header from "./components/Header.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoTitle from "./components/TodoTitle.vue";
import Footer from "./components/Footer.vue";

import { ITodo } from "./types/types";
import { key } from "./store/store";

export default defineComponent({
  setup() {
    const store = useStore(key);
    return {
      todos: computed(() => store.state.todos),
      search: computed(() => store.state.search)
    };
  },
  computed: {
    allTodos(): number {
      if (this.todos.length > 0) {
        return this.todos.length;
      } else {
        return 0;
      }
    },
    todoDone(): number {
      const done: ITodo[] = this.todos.filter((i: any) => {
        return i.done === true;
      });
      return done.length;
    },
    todoImportant(): number {
      const important: ITodo[] = this.todos.filter((i: any) => {
        return i.important === true;
      });
      return important.length;
    },
    filtredTodos() {
      const todo: any = this.todos.filter((todo: any) => {
        return todo.task.toLowerCase().match(this.search.toLowerCase());
      });
      return todo;
    }
  },

  components: {
    List,
    Header,
    TodoInput,
    TodoTitle,
    Footer
  }
});
</script>

<style lang="scss">
@import "./main.scss";
</style>
