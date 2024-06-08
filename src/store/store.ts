import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
