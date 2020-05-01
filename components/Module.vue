<template>
  <v-container id="card" row wrap>
    <v-card class="d-inline-block pr-0 mb-0" width="471" height="123">
      <v-row class="pa-0" id="card">
        <v-col cols="3">
          <v-img
            :src="moduleProperty.image"
            contain
            height="71"
            width="98"
            class="pt-0"
          >
          </v-img>
        </v-col>
        <v-col cols="8" class="text-left pa-0 pt-1">
          <v-card-title class="pa-0">
            <span class="primary--text font-weight-regular title">
              {{ moduleProperty.title }}
            </span>
          </v-card-title>
          <v-card-text class="texts--text pa-0 body-2 font-weight-regular">
            {{ moduleProperty.text }}
          </v-card-text>
          <v-card-actions
            class="primary--text pa-0 subtitle-2 font-weight-medium"
          >
            See more...
          </v-card-actions>
        </v-col>
        <v-col cols="1" class="pa-3 pl-0">
          <v-img :src="icons[0].img" alt="" contain height="17"> </v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    moduleProperty: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      icons: state => state.modules.icons
    })
  }
};
</script>

<style>
#card {
  font-family: "Raleway", sans-serif;
}
</style>
