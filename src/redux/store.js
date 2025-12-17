import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import userReducer from "./user/userSlice"
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = {
   key: "root",
   storage: storageSession,
};

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
   {
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
         }),

   }
);

export const persistor = persistStore(store)