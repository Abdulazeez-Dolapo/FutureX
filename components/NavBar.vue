<template>
  <div class="navbar">
    <v-app-bar fixed app flat class="nav" height="73dp">
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-btn text :min-height="home.height">
        <v-img :src="home.icon" :height="home.height" contain></v-img>
      </v-btn>
      <v-spacer />
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        text
        :min-height="item.height"
      >
        <v-img :src="item.icon" :height="item.height" contain></v-img>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: { icon: require("../static/future.png"), height: "51" },
      items: [
        {
          icon: require("../static/cubes.png"),
          height: "32"
        },
        {
          icon: require("../static/notification.png"),
          height: "32.82"
        },
        {
          icon: require("../static/profile-pic.png"),
          height: "54"
        }
      ]
    };
  }
};
</script>

<style></style>
