<template>
  <v-app>
    <NavBar></NavBar>
    <v-content class="ml-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
export default {
  name: "Default",
  components: {
    NavBar
  },
  data() {
    return {};
  }
};
</script>
<style></style>
