<!-- TodoInput -->
<template>
  <form class="todo-input" v-on:submit.prevent="[addTodo(task), reset()]">
    <input placeholder="input you task here" type="text" v-model="task" />
    <button class="waves-effect waves-light btn green">
      add todo
    </button>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      task: null
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    reset() {
      this.task = null;
    }
  }
});
</script>

<style lang='scss' scoped>
</style>
