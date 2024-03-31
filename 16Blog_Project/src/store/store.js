import {configureStore} from '@reduxjs/toolkit';
import authreducer from './authSlice.js'
const store = configureStore({
    reducer: {authreducer}
})

export default store;