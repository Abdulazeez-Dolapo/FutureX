<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="300"
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
</template>

<script>
export default {
  props: {
    continueCreate: {
      required: true
    },
    navigateAway: {
      required: true
    },
    dialog: {
      required: true
    }
  }
};
</script>

<style></style>
