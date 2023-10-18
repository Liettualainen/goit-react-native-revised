import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice} from "../auth/authSlice.js"

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  });
  
  
  // export const persistor = persistStore(store);