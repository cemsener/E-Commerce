//redux slice for authentication stores the token and user data in the store

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserInt {
  id: string;
  email: string;
  name: string;
  image: string;
}

interface AuthState {
  token: string | null;
  user: UserInt | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: UserInt }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
