<template>
  <v-container class="">
    <p class="headline font-weight-bold primary--text">
      <span class="font-weight-bold mr-1">Modules</span
      ><span class="font-weight-regular">Management</span>
    </p>
    <v-row>
      <v-col cols="4">
        <CreateButton nuxt-link to="/create-module" />
      </v-col>
      <v-col v-for="(mod, index) in modules" :key="index" cols="4">
        <Module :moduleProperty="mod" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Module from "~/components/Module";
import CreateButton from "~/components/CreateButton";
import { mapState } from "vuex";
export default {
  components: {
    Module,
    CreateButton
  },
  computed: {
    ...mapState({
      modules: state => state.modules.modules
    })
  }
};
</script>
<style></style>
