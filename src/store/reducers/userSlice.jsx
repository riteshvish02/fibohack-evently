import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isAuthenticated: false,
    loading: false,
    errorAuth: null,
    error:null,
    message:null,
    messageAuth:null,
    user:null
  };
  
export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
      isLoading: (state, action) => {
        state.loading = true;
      },
      isLoadingAuth: (state, action) => {
        state.loading = true,
        state.errorAuth = null,
        state.messageAuth = null
      },
      createUserSuccess: (state, action) => {
        (state.loading = false),
          (state.isAuthenticated = true),
          (state.messageAuth = "User Created Successfully");
      },
      loginUserSuccess: (state, action) => {
        (state.loading = false),
          (state.isAuthenticated = true),
          (state.messageAuth = "User Login Successfully"),
          (state.user = action.payload.userModel);
      },
      userLogoutSuccess: (state, action) => {
        (state.loading = false), (state.isAuthenticated = false);
      },
      isError: (state, action) => {
        (state.loading = false), (state.error = action.payload.message),(state.message = null);
      },
      isErrorAuth: (state, action) => {
        state.loading = false,
        state.errorAuth = action.payload.message,
        state.messageAuth = null
      },
      clearMsg: (state, action) => {
        state.message = null;
      },
      clearMsgAuth: (state, action) => {
        state.messageAuth = null;
      },
      clearError: (state, action) => {
        state.error = null;
      },
      clearErrorAuth: (state, action) => {
        state.errorAuth = null;
      },
  },
})

// Action creators are generated for each case reducer function
export const {isLoading,isLoadingAuth,loginUserSuccess,createUserSuccess ,isError,isErrorAuth,userLogoutSuccess,clearError,clearErrorAuth,clearMsg,clearMsgAuth} = User.actions

export default User.reducer