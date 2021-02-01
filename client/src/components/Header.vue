<!-- header -->
<template>
  <header class="header-container">
    <input
      class="todo-search "
      placeholder="search"
      type="text"
      v-on:input="searchInput($event.target.value)"
      v-bind:search="search"
    />
  </header>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  props: {
    search: {
      type: String
    }
  },
  methods: {
    ...mapActions(["searchInput"])
  },
  data() {
    return {};
  }
});
</script>

<style lang='scss' scoped>
.header-container {
  color: rgb(162, 80, 238);
}
</style>

