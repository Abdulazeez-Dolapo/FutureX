<template>
  <v-container row wrap>
    <v-card
      nuxt
      to="create-module"
      class="d-inline-block mb-0"
      width="471"
      height="123"
    >
      <v-row>
        <v-col cols="12">
          <!-- <v-btn height="60" class="mx-auto font-weight-black display-3"> -->
          <v-icon x-large size="450" color="primary">
            mdi-plus
          </v-icon>
          <!-- </v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-card-actions
          class="subtitle-1 primary--text font-weight-medium pt-5 mx-auto"
        >
          Add Module
        </v-card-actions>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // image: require("../static/future.png")
    };
  }
};
</script>

<style></style>
