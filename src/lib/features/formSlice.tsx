import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your form state
interface FormState {
  [key: string]: any;
}

// Initial state for the form slice
const initialState: FormState = {};

// Create the form slice
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Action to update a specific field in the form
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: any }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    // Action to reset the entire form to initial state
    resetForm: () => {
      return initialState;
    },
  },
});

// Export actions
export const { updateField, resetForm } = formSlice.actions;

// Export the reducer to use in the store
export default formSlice.reducer;
