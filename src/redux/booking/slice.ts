import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: {},
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      console.log("action.payload", action.payload);
      state.booking = action.payload;
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
