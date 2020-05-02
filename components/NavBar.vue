<template>
  <div class="navbar">
    <v-app-bar fixed app flat class="nav" height="73dp">
      <v-btn text :min-height="home.height" class="ml-3">
        <v-img :src="home.icon" :height="home.height" contain></v-img>
      </v-btn>
      <v-spacer />
      <v-btn text :min-height="cubes.height">
        <v-img :src="cubes.icon" :height="cubes.height" contain></v-img>
      </v-btn>
      <v-btn text min-height="32.82">
        <v-badge color="green" dot :overlap="true" offset-x="15" offset-y="17">
          <v-icon large color="primary">
            mdi-bell-outline
          </v-icon>
        </v-badge>
      </v-btn>
      <v-btn text :min-height="profile.height">
        <v-img :src="profile.icon" :height="profile.height" contain></v-img>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: { icon: require("../static/future.png"), height: "51" },
      cubes: { icon: require("../static/cubes.png"), height: "32" },
      profile: { icon: require("../static/profile-pic.png"), height: "54" }
    };
  }
};
</script>

<style></style>
