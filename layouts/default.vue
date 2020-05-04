<template>
  <v-app>
    <NavBar></NavBar>
    <v-content class="ml-5">
      <v-container>
        <nuxt />
        <!-- notification snackbar -->
        <div class="text-center ma-2">
          <v-snackbar v-model="snackbar">
            {{ text }}
            <v-btn color="pink" text @click="closeSnackbar">
              Close
            </v-btn>
          </v-snackbar>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
import { mapState } from "vuex";
export default {
  name: "Default",
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      currentModule: state => state.modules.newModule,
      snackbar: state => state.snackbar.snackbar,
      text: state => state.snackbar.text
    })
  },
  data() {
    return {};
  },
  methods: {
    // close snackbar
    closeSnackbar() {
      this.$store.dispatch("snackbar/close", null);
    }
  }
};
</script>
<style lang="scss">
.application {
  font-family: "Raleway", sans-serif;
}
</style>
