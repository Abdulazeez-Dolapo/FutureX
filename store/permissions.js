export const state = () => ({
  permissions: [
    "Can register students1",
    "Can register students2",
    "Comment on student's performance3",
    "Comment on student's performance4",
    "Can send announcements5",
    "Can send announcements6",
    "Can register students7",
    "Can register students8",
    "Comment on student's performance9",
    "Comment on student's performance10",
    "Can send announcements11",
    "Can send announcements12",
    "Can register students13",
    "Can register students14",
    "Comment on student's performance15",
    "Comment on student's performance16",
    "Can send announcements18",
    "Can send announcements19",
    "Can register students20",
    "Can register students21",
    "Comment on student's performance22",
    "Comment on student's performance23",
    "Can send announcements23",
    "Can send announcements24",
    "Can register students25",
    "Can register students26",
    "Comment on student's performance27",
    "Comment on student's performance28",
    "Can send announcements29",
    "Can send announcements30",
    "Can register students31",
    "Can register students32",
    "Comment on student's performance33",
    "Comment on student's performance34",
    "Can send announcements35",
    "Can send announcements36"
  ]
});

export const mutations = {
  ADD_PERMISSION: ({ state }, permission) => {
    state.permissions.push(permission);
  }
};

export const actions = {
  addPermission: ({ commit }, permission) => {
    commit("ADD_PERMISSION", permission);
  }
};
