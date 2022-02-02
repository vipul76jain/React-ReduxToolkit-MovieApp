import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import MovieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSclice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state, { payload }) => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fullfiled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fullfiled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fullfiled");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});
export const { removeSelectedMovieOrShow } = movieSclice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSclice.reducer;
