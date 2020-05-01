<template>
  <v-layout row wrap>
    <v-card class="d-inline-block pa-0" width="500">
      <v-row>
        <v-col cols="3" class="text-center">
          <v-img :src="image"> </v-img>
        </v-col>
        <v-col cols="7" class="text-left pa-0">
          <v-card-title class="pa-0">
            <span class="primary--text">
              Approval
            </span>
          </v-card-title>
          <v-card-text class="texts--text pa-0 ma-0">
            This is only brief introduction of what this module is about and may
            not give all necessary info needed
          </v-card-text>
          <v-card-actions class="primary--text pa-0">
            See more...
          </v-card-actions>
        </v-col>
        <v-col cols="1" class="pa-0 ma-0">
          <v-btn text class="pa-o ma-0">
            <span>
              <v-img :src="img" alt=""> </v-img>
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  // props: {
  //   module: {
  //     type: Object,
  //     required: true
  //   }
  // }
  data() {
    return {
      img: require("../static/edit.png"),
      image: require("../static/approval.png")
    };
  }
};
</script>

<style></style>
