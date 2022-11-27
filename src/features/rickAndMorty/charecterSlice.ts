import { CharecterType } from './types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const enum ApiStatus {
    IDLE = "idle",
    LOADING = "loading",
    SUCCEEDED = "successed",
    FAILED = "failed",
}

export const enum FilterCharecterBy {
    DEAD = 'dead',
    ALIVE ='alive',
    UNKNOWN = 'unknown',
}
export interface CharecterState {
    darkMood: boolean;
    filterCharacterBy: FilterCharecterBy; 
    status: ApiStatus;
    totalCharecterCount: number;
    allCharecters: CharecterType[];
    currentPage: number;
    searchKeyword: string,
}



export interface CharacterQueryParams {
    page: number;
    search: string;
    filterBy: string;
}

// export const fetchAllCharecters = createAsyncThunk('character/fetchCharacter', (params: CharacterQueryParams) => {
//     let characterUrl = "https://rickandmortyapi.com/api/character/";

//     if(params.page) characterUrl += `?page=${params.page}` 
//     if(params.filterBy) characterUrl += `?page=${params.page}` 
    

    
//     try {

//     } catch (err) {
//         return err.message;
//     }
// })

const initialState: CharecterState = {
    darkMood: false,
    filterCharacterBy: FilterCharecterBy.ALIVE,
    status: ApiStatus.IDLE,
    totalCharecterCount: 0,
    currentPage: 1,
    searchKeyword: "",
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
        },
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        changeSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        }
    }
});


export const {
    toggleDarkMood,
    filterCharacterBy,
    changePage,
    changeSearchKeyword
 } = charecterSlice.actions
  
  export const getDarkMood = (state: { charecters: CharecterState }) => state.charecters.darkMood
  export const getFilterCharacterBy = (state: { charecters: CharecterState }) => state.charecters.filterCharacterBy
  export const getCurrentPage = (state: { charecters: CharecterState }) => state.charecters.currentPage
  export const getSearchKeyword = (state: { charecters: CharecterState }) => state.charecters.searchKeyword



// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const totalCharecterCount = (state: RootState) => state.charecters.totalCharecterCount;

export default charecterSlice.reducer; // This is for configureStore
