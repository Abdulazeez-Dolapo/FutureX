<template>
  <v-container>
    <p class="headline font-weight-bold primary--text">
      <span class="font-weight-regular">Select</span>
      <span class="font-weight-bold mr-1">Dependent Modules</span>
    </p>
    <v-row>
      <v-col
        v-for="(mod, index) in modules"
        :key="index"
        cols="4"
        class="pa-0 ma-0"
      >
        <v-row class="pa-0 ma-0">
          <v-col cols="1" class="pa-0 ma-0">
            <v-checkbox class="shrink hide-details pa-0 ma-0"></v-checkbox>
          </v-col>
          <v-col cols="11" class="pa-0 ma-0">
            <Module :moduleProperty="mod" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Module from "~/components/Module";
import { mapState } from "vuex";
export default {
  components: {
    Module
  },
  computed: {
    ...mapState({
      modules: state => state.modules.modules
    })
  }
};
</script>
<style></style>
