// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import postsReducer from '../features/postsSlice'
// import usersReducer from '../features/users/usersSlice';
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from 'redux-thunk';

// const reducer = combineReducers({
//     posts: postsReducer,
//     users: usersReducer
// });

// const persistConfig = {
//     key: 'root',
//     storage
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: [thunk]
// });

// export const persistor = persistStore(store);



import { configureStore } from "@reduxjs/toolkit";
import {createStore , applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import postsReducer from '../features/postsSlice';
import usersReducer from '../features/users/usersSlice';
import storage from "redux-persist/lib/storage";
import {persistReducer , persistStore} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";


const persistConfig = {
    key:'persist-key',
    storage
}

const reducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer,applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export { store }
export {persistor}

// export const store = configureStore({
//     reducer : persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production'
// });
