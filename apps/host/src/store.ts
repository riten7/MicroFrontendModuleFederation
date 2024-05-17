import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const federatedSlices = {
  layout: await import("app1/layout-slice").then(
    (module) => module.default.reducer
  ),
};

const initStore = async () => {
  const Store = configureStore({
    reducer: combineReducers({
      ...federatedSlices,
    }),
  });
  return Store;
};

export default initStore;
