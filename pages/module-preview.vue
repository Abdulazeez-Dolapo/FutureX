<template>
  <v-container class="pl-12">
    <p class="display-1 mt-2 font-weight-bold primary--text">
      Layout
    </p>
    <v-row>
      <v-col cols="5" class="pl-6 pt-0 mt-2">
        <v-row>
          <p class="headline font-weight-medium primary--text">
            Summary
          </p>
          <div class="title font-weight-regular mb-4">
            {{ newModule.summary }}
          </div>
        </v-row>

        <v-row>
          <p class="headline font-weight-medium primary--text">
            Description
          </p>
          <div class="title font-weight-regular">
            {{ newModule.description }}
          </div>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <v-row>
          <p class="headline font-weight-medium primary--text">
            Permissions
          </p>
        </v-row>
        <v-row>
          <div class="d-block title font-weight-regular mb-5">
            <div
              v-for="(permission, index) in newModule.permissions"
              :key="index"
            >
              {{ permission }}
            </div>
          </div>
        </v-row>

        <v-row>
          <p class="headline font-weight-medium primary--text">
            Dependent Modules
          </p>
        </v-row>
        <v-row>
          <div class="d-block title font-weight-regular">
            <div
              v-for="(dependency, index) in newModule.dependencies"
              :key="index"
            >
              {{ dependency }}
            </div>
          </div>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-file-input
          prepend-icon=""
          height="225"
          width="278"
          prepend-inner-icon="mdi-camera-plus-outline"
          outlined
        >
        </v-file-input>
        <div>
          <span class="d-block mb-2">
            <v-icon color="primary" size="120">
              mdi-camera-plus-outline
            </v-icon>
          </span>
          <span class="primary--text headline font-weight-medium">
            Upload icon
          </span>
        </div>
      </v-col>
    </v-row>

    <!-- buttons -->
    <v-row justify="center" class="mt-12 pt-12">
      <v-btn
        @click="cancel"
        outlined
        class="mr-6 mt-8"
        color="primary"
        width="451"
        height="53"
      >
        <span class="text-capitalize body-1">
          Cancel
        </span>
      </v-btn>
      <v-btn
        @click="done"
        class="ml-6 mt-8"
        color="primary"
        width="451"
        height="53"
        ><span class="text-capitalize body-1">
          Done
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
import Dialog from "~/components/Dialog";
import { dialog } from "~/mixins/dialog";
import { mapState } from "vuex";
export default {
  components: {
    Dialog
  },
  mixins: [dialog],
  computed: {
    ...mapState({
      newModule: state => state.modules.newModule
    })
  },
  data() {
    return {
      icon: ""
    };
  },
  methods: {
    async done() {
      try {
        await this.$store.dispatch("modules/addModule", this.newModule);
        await this.$store.dispatch("modules/newModule", null);
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
