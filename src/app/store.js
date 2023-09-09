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
import { combineReducers } from "redux";
import postsReducer from '../features/postsSlice';
import usersReducer from '../features/users/usersSlice';

const reducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});
