export const dialog = {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    cancel() {
      this.dialog = true;
    },
    continueCreate() {
      this.dialog = false;
    },
    navigateAway() {
      this.$router.push({ name: "index" });
      this.$store.dispatch("modules/newModule", null);
    }
  }
};
