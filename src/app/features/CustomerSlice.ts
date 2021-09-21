import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  name: { id: number; name: string }[];
  food: string[];
}

const initialState: CustomerState = {
  name: [],
  food: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (
      state,
      { payload }: PayloadAction<{ id: number; name: string }>
    ) => {
      state.name.push(payload);
    },
    orderFood: (state, { payload }: PayloadAction<string>) => {
      state.food.push(payload);
    },
  },
});

export const { addCustomer, orderFood } = customerSlice.actions;

export default customerSlice.reducer;
