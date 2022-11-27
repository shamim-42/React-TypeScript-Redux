import { CharecterType } from './types';
import { createSlice } from '@reduxjs/toolkit';



export interface CharecterState {
    status: 'idle' | 'loading' | 'failed';
    totalCharecterCount: number;
    allCharecters: CharecterType[];
}

const initialState: CharecterState = {
    status: 'idle',
    totalCharecterCount: 0,
    allCharecters: [],
};


export const charecterSlice = createSlice({
    name: 'charecters',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.totalCharecterCount += 1;
        },
    }
});



// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const totalCharecterCount = (state: RootState) => state.charecters.totalCharecterCount;

export default charecterSlice.reducer; // This is for configureStore
