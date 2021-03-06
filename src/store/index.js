import { createStore, applyMiddleware } from "redux"
import { persistStore, persistCombineReducers } from "redux-persist/es"
import storage from "redux-persist/es/storage"
import thunk from "redux-thunk"
import rootReducer from "./reducer"

const config = {
  key: "root",
  storage,
  blacklist: ["playlist", "root", "search"]
}

const reducer = persistCombineReducers(config, rootReducer)

export const configStore = () => {
  let store = createStore(reducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { persistor, store }
}
