import { CharecterType } from './types';
import { createSlice } from '@reduxjs/toolkit';



export const enum FilterCharecterBy {
    DEAD = 'dead',
    ALIVE ='alive',
    UNKNOWN = 'unknown',
}
export interface CharecterState {
    darkMood: boolean;
    filterCharacterBy: FilterCharecterBy; 
    status: 'idle' | 'loading' | 'failed';
    totalCharecterCount: number;
    allCharecters: CharecterType[];
}

const initialState: CharecterState = {
    darkMood: false,
    filterCharacterBy: FilterCharecterBy.ALIVE,
    status: 'idle',
    totalCharecterCount: 0,
    allCharecters: [],
};


export const charecterSlice = createSlice({
    name: 'charecters',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleDarkMood: (state) => {
            state.darkMood = !state.darkMood;
        },
        filterCharacterBy: (state, action) => {
            state.filterCharacterBy = action.payload;
        }
    }
});


export const {
    toggleDarkMood,
    filterCharacterBy
 } = charecterSlice.actions
  
  export const getDarkMood = (state: { charecters: CharecterState }) => state.charecters.darkMood
  export const getFilterCharacterBy = (state: { charecters: CharecterState }) => state.charecters.filterCharacterBy



// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const totalCharecterCount = (state: RootState) => state.charecters.totalCharecterCount;

export default charecterSlice.reducer; // This is for configureStore
