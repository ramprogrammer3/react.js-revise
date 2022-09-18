
import { configureStore } from "@reduxjs/toolkit";
import {bookService} from './services/bookService'

const store = configureStore({
    reducer: {
        [bookService.reducerPath]: bookService.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(bookService.middleware),
})

export default store;