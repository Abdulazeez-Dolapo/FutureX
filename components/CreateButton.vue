<template>
  <v-container row wrap>
    <v-card class="d-inline-block mb-0" width="471" height="123" nuxt>
      <v-row>
        <v-col cols="12" justify-center>
          <v-img :src="image" contain height="41" width="58"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-card-actions
          class="subtitle-1 primary--text font-weight-medium pt-5"
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
      image: require("../static/future.png")
    };
  }
};
</script>

<style></style>
