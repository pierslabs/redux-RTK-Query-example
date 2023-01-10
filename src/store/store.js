import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/postsApi';
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Ojo no importar getDefaultMiddleware desde @reduxjs/toolkit solo es el nombre del argumento que estamos recibiendo
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
