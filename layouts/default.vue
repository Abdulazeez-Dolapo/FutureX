<template>
  <v-app class="app">
    <NavBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {};
  }
};
</script>
<style>
.app {
  font-family: "Montserrat", sans-serif;
}
</style>
