export const state = () => ({
  snackbar: false,
  text: ""
});

export const mutations = {
  OPEN: (state, text) => {
    state.snackbar = true;
    state.text = text;
  },
  CLOSE: (state, text) => {
    state.snackbar = false;
    state.text = text;
  }
};

export const actions = {
  open: ({ commit }, text) => {
    commit("OPEN", text);
  },
  close: ({ commit }, text) => {
    commit("CLOSE", text);
  }
};
