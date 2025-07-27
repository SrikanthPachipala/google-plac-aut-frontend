import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    suggestions: [],
    selectedPlace: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
    setSelectedPlace(state, action) {
      state.selectedPlace = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setSuggestions,
  setSelectedPlace,
  setLoading,
  setError,
} = placesSlice.actions;

export default placesSlice.reducer;