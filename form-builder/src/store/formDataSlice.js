import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    customformList: {},
  },
  reducers: {
    initiateNewForm: (state, action) => {
      state.customformList = {
        ...state.customformList,
        [action.payload.id]: {},
      };
    },
    createNewField: (state, action) => {
      let temp = { ...state.customformList[action.payload.id] };
      temp = { ...action.payload.data };
      state.customformList = {
        ...state.customformList,
        [action.payload.id]: temp,
      };
    },
  },
});

export const { initiateNewForm, createNewField } = formDataSlice.actions;
