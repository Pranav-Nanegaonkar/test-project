// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi } from './testService';

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface initialStateTypes {
  users: [UserType] | null;
  loading: boolean;
  error: string | null;
}

const initialState: initialStateTypes = {
  users: null,
  loading: false,
  error: null,
};

// Async Action (Thunk)
export const getUsersAction = createAsyncThunk(
  'test/getUsers',
  async (_, thunkAPI) => {
    try {
      return await getUsersApi();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const testSlice = createSlice({
  name: 'test-getUser',
  initialState,
  reducers: {
    reset(state) {
      state.users = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersAction.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsersAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reset } = testSlice.actions;
const usersReducer = testSlice.reducer;
export default usersReducer;
