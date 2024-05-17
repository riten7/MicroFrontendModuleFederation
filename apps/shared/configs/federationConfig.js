const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "components",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};