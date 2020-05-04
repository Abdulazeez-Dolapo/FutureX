<template>
  <v-container class="pl-12">
    <p class="display-1 mt-2 font-weight-bold primary--text">
      Layout
    </p>
    <v-row>
      <v-col cols="5" class="pl-6 pt-0 mt-2">
        <v-row>
          <p class="headline font-weight-black primary--text">
            Summary
          </p>
          <div class="title font-weight-regular mb-4">
            {{ currentModule.summary }}
          </div>
        </v-row>

        <v-row>
          <p class="headline font-weight-black primary--text">
            Description
          </p>
          <div class="title font-weight-regular">
            {{ currentModule.description }}
          </div>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <v-row>
          <p class="headline font-weight-black primary--text">
            Permissions
          </p>
        </v-row>
        <v-row>
          <div class="d-block title font-weight-regular mb-5">
            <div
              v-for="(permission, index) in currentModule.permissions"
              :key="index"
            >
              {{ permission }}
            </div>
          </div>
        </v-row>

        <v-row>
          <p class="headline font-weight-black primary--text">
            Dependent Modules
          </p>
        </v-row>
        <v-row>
          <div class="d-block title font-weight-regular">
            <div
              v-for="(dependency, index) in currentModule.dependencies"
              :key="index"
            >
              {{ dependency }}
            </div>
          </div>
        </v-row>
      </v-col>
      <v-col cols="3">
        <div class="upload d-flex justify-center align-center">
          <div>
            <div class="d-flex justify-center">
              <v-icon color="primary" size="120">
                mdi-camera-plus-outline
              </v-icon>
            </div>
            <input type="file" @change="upload" ref="pic" />
            <div class="primary--text headline font-weight-black">
              Upload icon
            </div>
          </div>
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
      currentModule: state => state.modules.newModule,
      snackbar: state => state.snackbar.snackbar
    })
  },
  data() {
    return {
      icon: ""
    };
  },
  methods: {
    upload() {
      this.icon = this.$refs.pic.files[0];
    },
    // Conclude the module creation process
    async done() {
      try {
        const mod = Object.assign({}, this.currentModule);
        mod.icon = this.icon;
        await this.$store.dispatch("modules/addModule", mod);
        await this.$store.dispatch("modules/newModule", null);
        await this.$store.dispatch(
          "snackbar/open",
          "You have successfully created a new module"
        );
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.upload {
  position: relative;
  overflow: hidden;
  display: inline-block;
  border: 2px solid gray;
  width: 278px;
  height: 225px;
}

.upload input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>
