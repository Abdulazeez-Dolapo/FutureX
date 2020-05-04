<template>
  <v-container class="pl-12">
    <p class="headline primary--text">
      <span class="font-weight-black mr-1">Modules</span
      ><span class="font-weight-medium">Management</span>
    </p>
    <v-row class="pl-3">
      <v-col md="4" sm="6" class="pa-0 ma-0 mb-1">
        <CreateButton />
      </v-col>
      <v-col
        class="pa-0 ma-0 mb-1"
        v-for="(mod, index) in modules"
        :key="index"
        md="4"
        sm="6"
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
