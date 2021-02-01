<!-- TodoTitle -->
<template>
  <div class="todos-title">
    <h3>{{ title }}</h3>
    <div class="todos-stats">
      <p v-if="allTodos">All todos:{{ allTodos }}</p>
      <p v-if="todoDone">Todos done:{{ todoDone }}</p>
      <p v-if="todoImportant">Todos important:{{ todoImportant }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ITodo } from "../types/types";

export default defineComponent({
  props: {
    allTodos: Number,
    todoDone: Number,
    todoImportant: Number
  },
  data() {
    return {
      title: "My todos"
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
