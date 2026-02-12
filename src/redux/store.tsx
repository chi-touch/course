import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './api/courseQuery';
import courseReducer from './slice/courseSlice';

export const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
        course: courseReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(courseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
