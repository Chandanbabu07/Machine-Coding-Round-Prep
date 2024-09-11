import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "appScene/getProductDetails",
  async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=100`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response");
      return response.data.products;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  employeeName: "Chandan",
  productDetails: null,
};

const appSlice = createSlice({
  name: "appScene",
  initialState,
  reducers: {
    setEmployeeName: (state, action) => {
      state.employeeName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const { setEmployeeName } = appSlice.actions;

export default appSlice.reducer;
