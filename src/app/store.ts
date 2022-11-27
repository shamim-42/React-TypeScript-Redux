import { fetchCharectersApi } from './../features/rickAndMorty/charecterAPI';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charecterReducer from './../features/rickAndMorty/charecterSlice';


export const store = configureStore({
  reducer: {
    [fetchCharectersApi.reducerPath]: fetchCharectersApi.reducer,
    charecters: charecterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchCharectersApi.middleware),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
