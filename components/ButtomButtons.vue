<template>
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
</template>

<script>
export default {};
</script>

<style></style>
