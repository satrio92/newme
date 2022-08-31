<template>
  <div :data-theme="theme">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  data() {
    return {
      theme: import.meta.env.VITE_THEME,
    };
  },
  components: { Home },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
}
</style>
