import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './features/ReservationSlice';
import customerReducer from './features/CustomerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
