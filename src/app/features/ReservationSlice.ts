import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ['Rachel Brosnahan'],
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    // reducer method to come here
    addReservation: (state, { payload }: PayloadAction<string>) => {
      state.value.push(payload);
    },

    removeReservation: (state, { payload }: PayloadAction<number>) => {
      state.value.splice(payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
