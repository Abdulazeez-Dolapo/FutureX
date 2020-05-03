<template>
  <client-only>
    <v-container>
      <p class="headline font-weight-bold primary--text ml-5">
        <span class="font-weight-bold mr-1">Create</span
        ><span class="font-weight-regular">Module</span>
      </p>
      <v-form
        ref="createModuleForm"
        v-model="formValidity"
        @submit.prevent="next"
      >
        <v-row>
          <v-col cols="4" class="mx-8 pa-0 pr-12">
            <v-text-field
              v-model.trim="newModule.name"
              required
              label="Module name"
              outlined
              :rules="nameRules"
            ></v-text-field>
            <v-select
              :items="items"
              v-model="newModule.defaultModule"
              label="Set as default"
              outlined
              :rules="defaultModuleRules"
            ></v-select>
            <v-textarea
              label="Summary"
              v-model.trim="newModule.summary"
              required
              outlined
              :rules="summaryRules"
            >
            </v-textarea>
            <v-textarea
              label="Description"
              v-model.trim="newModule.description"
              required
              outlined
              rows="15"
              :rules="descriptionRules"
            >
            </v-textarea>
          </v-col>
          <v-col cols="7" class="pa-0 pl-12 ma-0">
            <v-checkbox
              class="pa-0 ma-0 ml-3 "
              height="18"
              label="All permissions"
              v-model="addAllPermissions"
            >
            </v-checkbox>
            <v-col
              cols="6"
              class="d-inline-block py-0"
              v-for="(permission, index) in allPermissions"
              :key="index"
            >
              <v-checkbox
                class="pa-0 ma-0 headline"
                height="18"
                v-model="newModule.permissions"
                :value="permission"
                :label="permission"
                :rules="permissionRules"
                required
              >
              </v-checkbox>
            </v-col>
          </v-col>
        </v-row>

        <!-- buttons -->
        <v-row justify="center" class="mt-8">
          <v-btn
            @click="cancel"
            outlined
            class="mr-6"
            color="primary"
            width="451"
            height="53"
          >
            <span class="text-capitalize">
              Cancel
            </span>
          </v-btn>
          <v-btn
            :disabled="!formValidity"
            type="submit"
            class="ml-6"
            color="primary"
            width="451"
            height="53"
            ><span class="text-capitalize">
              Next
            </span></v-btn
          >
        </v-row>
      </v-form>

      <!-- dialog box -->
      <Dialog
        :navigateAway="navigateAway"
        :continueCreate="continueCreate"
        :dialog="dialog"
      />
    </v-container>
  </client-only>
</template>

<script>
import Dialog from "~/components/Dialog";
import { mapState } from "vuex";
import { dialog } from "~/mixins/dialog";
export default {
  components: {
    Dialog
  },
  mixins: [dialog],
  data() {
    return {
      newModule: this.createModuleObject(),
      formValidity: false,
      addAllPermissions: false,
      items: ["Yes", "No"],
      nameRules: [
        value => !!value || "Name of Module is required",
        value =>
          (value && value.length >= 3) ||
          "Name should not be less than 3 letters",
        value =>
          /[a-zA-Z][a-zA-Z ]+$/.test(value) ||
          "Name should only contain letters",
        value =>
          !this.checkIfModuleNameExists(value) ||
          "Module name already exists. Please try another name"
      ],
      defaultModuleRules: [value => !!value || "This field is required"],
      summaryRules: [
        value => !!value || "Summary is required",
        value =>
          (value && value.trim().length >= 10) ||
          "Summary should not be less than 10 characters"
      ],
      descriptionRules: [
        value => !!value || "Description is required",
        value =>
          (value && value.trim().length >= 10) ||
          "Description should not be less than 10 characters"
      ],
      permissionRules: [
        value =>
          (value && !!value.length) || "You must select at least one permission"
      ]
    };
  },
  watch: {
    addAllPermissions() {
      // Set value of permissions depending on status of 'add all permissions'
      if (this.addAllPermissions) {
        this.newModule.permissions = this.allPermissions;
      } else {
        if (this.newModule.permissions.length == this.allPermissions.length) {
          this.newModule.permissions = [];
        } else if (!!this.newModule.permissions) {
          return;
        }
        this.newModule.permissions = [];
      }
    },
    permissions() {
      // Toggle the add all permissions checkbox
      if (this.permissions !== this.allPermissions) {
        this.addAllPermissions = false;
      }
    }
  },
  computed: {
    ...mapState({
      allPermissions: state => state.permissions.permissions,
      modules: state => state.modules.modules,
      currentModule: state => state.modules.newModule
    }),
    name() {
      return this.newModule.name;
    }
  },
  mounted() {
    this.newModule = this.createModuleObject();
  },
  methods: {
    // Create a fresh module object
    createModuleObject() {
      if (!!this.currentModule) {
        const newModule = Object.assign({}, this.currentModule);
        return newModule;
      }
      const mod = {
        icon: "",
        name: "",
        summary: "",
        dependencies: [],
        description: "",
        defaultModule: "No",
        permissions: []
      };
      return mod;
    },
    // Check if module name already exists in the store/database
    checkIfModuleNameExists(value) {
      const found = this.modules.find(
        element => element.name.toLowerCase() == value.toLowerCase()
      );
      return !!found;
    },
    // Continue the module creation process
    async next() {
      try {
        if (this.$refs.createModuleForm.validate()) {
          await this.$store.dispatch("modules/newModule", this.newModule);
          this.$router.push({ name: "module-dependency" });
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
