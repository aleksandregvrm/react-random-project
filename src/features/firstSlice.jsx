import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../utils/utils";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import randomColor from "randomcolor";

const url = "https://course-api.com/react-store-products";

const initialFilterState = [
    {
      id: "asdasd342342",
      name: "john",
      company: "liddy",
      background: "#FC1440",
      editing: false,
    },
    {
      id: "ardelda424672",
      name: "leyla",
      company: "ikea",
      background: "#804d57",
      editing: false,
    },
    {
      id: "rsdglea905671",
      name: "dachi",
      company: "sircxvilia",
      background: "#2e1218",
      editing: false,
    },

]
const initialState = {
  dachiylea:true,
  editing:false,
  editingInfo:{},
  products:[...initialFilterState],
};

const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    showLoading: (state) => {},
    addItem: (state, { payload }) => {
      const fontColor = randomColor();
      const nanoId = nanoid();
      const newItem = {
        ...payload.values,
        id: nanoId,
        color: fontColor,
        editing: false,
      };
      console.log(newItem);
      return { ...state, products: [...state.products, newItem] };
    },
    deleteItem: (state, { payload }) => {
      const itemId = payload;
      return {
        ...state,
        products: state.products.filter((item) => item.id !== itemId),
      };
    },
    editItem: (state, { payload }) => {
      const { name, id, company } = payload;

      return {
        ...state,
        editing: true,
        editingInfo: { name, id, company },
      };
    },
    clearAllItems: (state) => {
      return initialState;
    },
    editItemDone: (state, { payload }) => {
      const fontColor = randomColor();
      const { name, company, background, id } = payload;
      const editedItem = {
        color: fontColor,
        editing: false,
      };
      return {
        ...state,editing:false,
        products: state.products.map((product) =>
          product.id === id
            ? { ...product, ...editedItem, name, company, background,id }
            : product
        ),
      };
    },
  },
  extraReducers: (builder) => {},
});
export const {addItem,deleteItem,editItem,clearAllItems,editItemDone} = firstSlice.actions;

export default firstSlice.reducer;
