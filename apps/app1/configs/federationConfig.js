const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
    "./store": "./src/store",
    "./layout-slice": "./src/reducer",
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