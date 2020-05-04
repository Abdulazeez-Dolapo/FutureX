<template>
  <v-container>
    <p class="headline ml-8 primary--text">
      <span class="font-weight-medium">Select</span>
      <span class="font-weight-black mr-1">Dependent Modules</span>
    </p>
    <v-row>
      <v-col
        v-for="(mod, index) in modules"
        :key="index"
        cols="4"
        class="pa-0 ma-0 mt-2"
      >
        <v-row class="pa-0 ma-0">
          <v-col cols="1" class="pa-0 ma-0">
            <v-checkbox
              v-model="dependencies"
              :value="mod.name"
              class="shrink hide-details pa-0 ma-0"
            ></v-checkbox>
          </v-col>
          <v-col cols="11" class="pa-0 ma-0">
            <Module :moduleProperty="mod" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-12 pt-7">
      <v-btn
        outlined
        class="mr-6"
        color="primary"
        width="451"
        height="53"
        @click="cancel"
      >
        <span class="text-capitalize">
          Cancel
        </span>
      </v-btn>
      <v-btn class="ml-6" color="primary" width="451" height="53" @click="next"
        ><span class="text-capitalize">
          Next
        </span></v-btn
      >
    </v-row>

    <!-- dialog box -->
    <Dialog
      :navigateAway="navigateAway"
      :continueCreate="continueCreate"
      :dialog="dialog"
    />
  </v-container>
</template>

<script>
import Module from "~/components/Module";
import Dialog from "~/components/Dialog";
import { dialog } from "~/mixins/dialog";
import { mapState } from "vuex";
export default {
  components: {
    Module,
    Dialog
  },
  mounted() {
    this.dependencies = this.currentDependency();
  },
  mixins: [dialog],
  computed: {
    ...mapState({
      modules: state => state.modules.modules,
      currentModule: state => state.modules.newModule
    })
  },
  data() {
    return {
      dependencies: this.currentDependency()
    };
  },
  methods: {
    // Set value of dependencies to the last selected ones in case the back button is clicked
    currentDependency() {
      let arr;
      if (this.currentModule) {
        arr = Array.from(this.currentModule.dependencies);
      } else {
        arr = [];
      }
      return arr;
    },
    // Continue the module creation process
    async next() {
      try {
        const newModule = Object.assign({}, this.currentModule);
        newModule.dependencies = this.dependencies;
        await this.$store.dispatch("modules/newModule", newModule);
        this.$router.push({ name: "module-preview" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style></style>
