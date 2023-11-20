module.exports = {
  apps: [
    {
      name: "artemiy-talks",
      script: "./index.js",
    },
  ],
  deploy: {
    production: {
      user: "szelenov",
      host: ["158.160.8.0"],
      ref: "origin/main",
      repo: "git@github.com:js-tasks-ru/nodejs-20230925-workshop.git",
      path: "/home/szelenov/application",
      "post-deploy": "npm install",
    },
  },
};
