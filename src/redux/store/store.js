import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../reducers/auth/authReducer";
import notificationReducer from "../reducers/notification/notificationReducer";
import catReducer from "../reducers/cat/catReducer";

const rootReducer = combineReducers({ auth: authReducer, cat: catReducer, notification: notificationReducer });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persiStor = persistStore(store);

export { store, persiStor };
