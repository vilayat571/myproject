// url='https://api.safarovacademy.com/api/v1/blog/categories/';

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateOfCategories {
  categoires: any;
  loading: false;
  error: any;
}

export const fetchCategories = createAsyncThunk(
  "/fetchCategories",
  async () => {
    const url = "https://api.safarovacademy.com/api/v1/blog/categories/";
    return fetch(url).then((res) => res.json());
  }
);

const initialState: InitialStateOfCategories = {
  categoires: "",
  loading: false,
  error: "",
};

const fetchAllcategories = createSlice({
  name: "fetchAllcategories",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction) => {
        state.categoires = action.payload;
      }
    );
  },
});

export default fetchAllcategories.reducer;

// heftede bir defe - nene-baba-dayilar-bibiler ile danismaq
