import { configureStore } from "@reduxjs/toolkit";
import sceneReduces from "./reduxSlice";

export const store = configureStore({
  reducer: {
    appScene: sceneReduces,
  },
});
