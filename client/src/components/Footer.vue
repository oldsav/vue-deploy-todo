<!-- Footer -->
<template>
  <footer class="footer">
    <div class="presintation_container">
      <div class="logo_container">
        <img src="/assets/images/icon.svg" alt="Logo" />
        <span>oldsav dev.</span>
      </div>
      <div class="link-container">
        <a
          class="fab fa-github link-route"
          target="_blank"
          href="https://github.com/oldsav"
          v-bind:title="github"
        ></a>
        <a
          class="fab fa-linkedin-in link-route"
          target="_blank"
          href="https://www.linkedin.com/in/alexander-old-82a4aa202"
          v-bind:title="linkedin"
        ></a>
        <a
          class="fab fa-telegram-plane link-route"
          target="_blank"
          href="https://t.me/oldsav"
          v-bind:title="telegram"
        ></a>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      github: "Github",
      linkedin: "Linkedin",
      telegram: "Telegram"
    };
  }
});
</script>

<style lang='scss' scoped>
</style>
