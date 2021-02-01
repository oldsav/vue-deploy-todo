<template>
  <div class="todo-container">
    <div v-if="filtredTodos.length < 1" class="task-default">
      <i class="fas fa-tasks"></i>
    </div>
    <ul v-else class="collection">
      <ListItem
        v-for="todo in filtredTodos"
        v-bind:key="todo.id"
        v-bind:task="todo.task"
        v-bind:done="todo.done"
        v-bind:important="todo.important"
        v-bind:id="todo.id"
        v-bind:toggleDone="toggleDone"
        v-bind:deleteTodo="deleteTodo"
        v-bind:toggleImportant="toggleImportant"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions } from "vuex";

import { ITodo } from "../types/types";

import ListItem from "./ListItem.vue";
export default defineComponent({
  props: {
    filtredTodos: {
      type: Function
    }
  },
  components: {
    ListItem
  },
  methods: {
    ...mapActions(["toggleImportant", "toggleDone", "deleteTodo"])
  }
});
</script>