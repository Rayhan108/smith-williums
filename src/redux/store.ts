// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import bookingReducer from "./feature/booking/bookingSlice";
import { baseApi } from "./api/baseApi";
import {
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";

// Persist only the booking slice (you can add whitelist/blacklist if needed)
const persistConfig = {
  key: "booking",
  storage,
};

const persistedBookingReducer = persistReducer(persistConfig, bookingReducer);

// ✅ Create ONE store instance
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    booking: persistedBookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// ✅ Create ONE persistor from the SAME store
export const persistor = persistStore(store);

// Types based on the singleton store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
