import { createSlice } from '@reduxjs/toolkit';

const personalHomepageSlice = createSlice({
  name: 'personalHomepage',
  initialState: {
    repositories: null,
    showSkills: true,
    showCV: false,
    showCertificates: false,
    status: "idle",
  },
  reducers: {
    toggleSkillsView: (state) => {
      state.showSkills = !state.showSkills;
      state.showCertificates = false;
      state.showCV = false;
    },  

    toggleCVview: (state) => {
      state.showCV = !state.showCV;
      state.showSkills = false;
      state.showCertificates = false;
    },   

    toggleCertificatesView: (state) => {
      state.showCertificates = !state.showCertificates;
      state.showSkills = false;
      state.showCV = false;
    },   

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
  toggleSkillsView,
  toggleCVview,
  toggleCertificatesView,
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
