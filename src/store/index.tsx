import { configureStore } from '@reduxjs/toolkit';
import promotionSlice from './slices/promotionSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    promotions: promotionSlice.reducer,
  },
});

export const storeActions = {
  promotions: promotionSlice.actions
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
