import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch news from the API
export const fetchnewsAsync = createAsyncThunk('list/fetchnews', async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=3b01cabfdaa646ae8d1a3076ee9d8197');
        return response.data.results;
    } catch (error) {
        throw error;
    }
});

// Fetch categories from the API
export const fetchCategoriesAsync = createAsyncThunk('list/fetchCategories', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
});

// Initial state of the slice
const initialState = {
    listItems: [],
    categories: [],
    addedItems: [],
    loading: false,
    error: null,
};

// Create the Redux slice
const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                categoryId: action.payload.categorie_id,
            };
            state.addedItems.push(newItem);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.addedItems = state.addedItems.filter(item => item.id !== itemId);
        },
    },
    extraReducers: (builder) => {
        // Handle the asynchronous action for fetching news
        builder
            .addCase(fetchnewsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchnewsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.listItems = action.payload;
            })
            .addCase(fetchnewsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        
        // Handle the asynchronous action for fetching categories
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategoriesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
