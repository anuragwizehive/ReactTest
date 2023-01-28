import { configureStore } from "@reduxjs/toolkit";
import { formDataSlice } from "./formDataSlice";
const store = configureStore({
  reducer: formDataSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

export default store;
