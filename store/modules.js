export const state = () => ({
  // newModule: "",
  newModule: {
    icon: "",
    name: "New Module",
    summary:
      "This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed",
    dependencies: ["Grading", "CBT", "FutureX Support"],
    description:
      "This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed. This is only brief introduction of what this module is about and may not give all necessary info needed.",
    defaultModule: "No",
    permissions: [
      "Can register students1",
      "Comment on student's performance3",
      "Can send announcements5",
      "Can register students2",
      "Comment on student's performance4",
      "Can send announcements6"
    ]
  },
  editIcon: [{ img: require("../static/edit.png") }],
  modules: [
    {
      icon: require("../static/approval.png"),
      name: "Approval",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/event.png"),
      name: "Event",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/user.png"),
      name: "User management",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/course.png"),
      name: "Course",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/log.png"),
      name: "Log",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/notification.png"),
      name: "Notification",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/subject.png"),
      name: "Subject",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/layout.png"),
      name: "Layout",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/file.png"),
      name: "File management",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/grading.png"),
      name: "Grading",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/future.png"),
      name: "FutureX Support",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/admission.png"),
      name: "Admission",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/finance.png"),
      name: "Finance",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/cbt.png"),
      name: "CBT",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    },
    {
      icon: require("../static/sms.png"),
      name: "SMS",
      summary:
        "This is only brief introduction of what this module is about and may not give all necessary info needed",
      dependencies: [],
      description: "",
      defaultModule: "No",
      permissions: []
    }
  ]
});

export const mutations = {
  NEW_MODULE: (state, newModule) => {
    state.newModule = newModule;
  },
  ADD_MODULE: (state, module) => {
    state.modules.push(module);
  }
};

export const actions = {
  addModule: ({ commit }, module) => {
    commit("ADD_MODULE", module);
  },
  newModule: ({ commit }, newModule) => {
    commit("NEW_MODULE", newModule);
  }
};
