<template>
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
            v-model.trim="name"
            required
            label="Module name"
            outlined
            :rules="rules"
          ></v-text-field>
          <v-select
            :items="items"
            v-model="defaultModule"
            label="Set as default"
            outlined
          ></v-select>
          <v-textarea
            label="Summary"
            v-model.trim="summary"
            required
            outlined
            :rules="summaryRules"
          >
          </v-textarea>
          <v-textarea
            label="Description"
            v-model.trim="description"
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
              class="pa-0 ma-0"
              height="18"
              v-model="permissions"
              :value="permission"
              :label="permission"
              :rules="permissionRules"
              required
            >
            </v-checkbox>
          </v-col>
        </v-col>
      </v-row>
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
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      justify-content="center"
    >
      <v-card>
        <v-card-title class="headline"
          >You have not finished creating your module.</v-card-title
        >
        <v-card-text class="mx-auto"
          >Are You sure you want to cancel and exit?</v-card-text
        >
        <v-card-actions>
          <v-btn
            class="mx-auto mb-2"
            color="error darken-2"
            @click="continueCreate"
            >No</v-btn
          >
          <v-btn
            class="mx-auto mb-2"
            color="success darken-2"
            @click="navigateAway"
            >Yes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      formValidity: false,
      addAllPermissions: false,
      finish: false,
      dialog: false,
      routeAway: false,
      name: "",
      defaultModule: "No",
      summary: "",
      description: "",
      permissions: [],
      items: ["Yes", "No"],
      nameRules: [
        value => !!value || "Name of Module is required",
        value =>
          this.checkIfNameExists(value) ||
          "Name already exists. Please pick another",
        value => value.length >= 3 || "Name should not be less than 3 letters",
        value => /^[a-zA-Z]+$/.test(value) || "Name should only contain letters"
      ],
      summaryRules: [
        value => !!value || "Summary is required",
        value =>
          value.trim().length >= 10 ||
          "Summary should not be less than 10 characters"
      ],
      descriptionRules: [
        value => !!value || "Description is required",
        value =>
          value.trim().length >= 10 ||
          "Description should not be less than 10 characters"
      ],
      permissionRules: [
        value => !!value.length || "You must select at least one permission"
      ]
    };
  },
  watch: {
    name() {
      console.log(this.checkIfNameExists(this.name));
    },
    addAllPermissions() {
      if (this.addAllPermissions) {
        this.permissions = this.allPermissions;
      } else {
        if (this.permissions.length == this.allPermissions.length) {
          this.permissions = [];
        } else if (!!this.permissions) {
          return;
        }
        this.permissions = [];
      }
    },
    permissions() {
      if (this.permissions !== this.allPermissions) {
        this.addAllPermissions = false;
      }
    }
  },
  computed: {
    ...mapState({
      allPermissions: state => state.permissions.permissions,
      modules: state => state.modules.modules
    }),
    rules() {
      const rules = [];
      if (this.name) {
        const rule = value =>
          this.checkIfNameExists(value) || "Name already exists";
        rules.push(rule);
      }
      return rules;
    }
  },
  methods: {
    checkIfNameExists(value) {
      this.modules.forEach(mod => {
        if (mod.name == value) {
          return true;
        }
      });
    },
    async next() {
      try {
        if (this.$refs.createModuleForm.validate()) {
          const newModule = {
            icon: "",
            name: this.name,
            summary: this.summary,
            dependencies: [],
            description: this.description,
            defaultModule: this.defaultModule,
            permissions: this.permissions
          };
          this.finish = true;
          await this.$store.dispatch("modules/newModule", newModule);
          this.$router.push({ name: "module-dependency" });
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
        error({
          statusCode: 503,
          message: "Unable to add a new module at this time"
        });
      }
    },
    cancel() {
      this.dialog = true;
    },
    continueCreate() {
      this.dialog = false;
      this.routeAway = false;
    },
    navigateAway() {
      this.finish = true;
      this.routeAway = true;
      this.$router.push({ name: "index" });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.finish) {
      this.dialog = true;
      if (this.routeAway) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>

<style></style>
