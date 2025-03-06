import { createSlice } from '@reduxjs/toolkit';

const personalHomepageSlice = createSlice({
  name: 'personalHomepage',
  initialState: {
    repositories: null,
    status: "idle",
  },
  reducers: {
    fetchRepositories: (state, action) => {
      state.status = "loading";
      state.repositories = null;
    },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.status = "success";
      state.repositories = repositories;
    },
    fetchRepositoriesError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
