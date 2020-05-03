<template>
  <v-container class="pl-12">
    <p class="headline primary--text">
      <span class="font-weight-bold mr-1">Modules</span
      ><span class="font-weight-regular">Management</span>
    </p>
    <v-row class="pl-3">
      <v-col cols="4" class="pa-0 ma-0 mb-1">
        <CreateButton />
      </v-col>
      <v-col
        class="pa-0 ma-0 mb-1"
        v-for="(mod, index) in modules"
        :key="index"
        cols="4"
      >
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
