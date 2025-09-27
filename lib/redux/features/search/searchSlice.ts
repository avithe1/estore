import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SearchType = {
  searchTerm: string;
};

const initialState: SearchType = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<{ search: string }>) {
      state.searchTerm = action.payload.search;
    },
    clearSearchTerm(state) {
      state.searchTerm = "";
    },
  },
});

export default searchSlice.reducer;
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
