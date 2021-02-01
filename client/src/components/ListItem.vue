<template>
  <li class="collection-item todo-item">
    <form class="todo-item-form-input">
      <p class="todo-item-title">
        <label>
          <input
            v-bind:checked="done"
            type="checkbox"
            v-on:click="toggleDone(this.id)"
          />
          <span> </span>
        </label>
        <span
          class="item"
          v-bind:title="task"
          v-bind:class="{ done: done, important: important }"
        >
          {{ task }}
        </span>
      </p>
      <div class="todo-actions">
        <i
          class="fas fa-exclamation"
          v-bind:title="[`Mark important`]"
          v-bind:class="{ important: important }"
          v-on:click="toggleImportant(this.id)"
        ></i>
        <i
          v-bind:title="[`Delete task`]"
          class="fas fa-trash"
          v-on:click="deleteTodo(this.id)"
        ></i>
      </div>
    </form>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  props: {
    task: {
      type: String
    },
    important: Boolean,
    done: Boolean,
    id: Number,
    toggleImportant: Function,
    toggleDone: Function,
    deleteTodo: Function
  }
});
</script>