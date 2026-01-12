import { createSlice } from '@reduxjs/toolkit';

type initialStateTypes = {
  image: null | string;
};

const initialState: initialStateTypes = {
  image: null,
};

const cameraSlice = createSlice({
  name: 'camera/image',
  initialState,
  reducers: {
    setCameraImage(state, action) {
      state.image = action.payload;
    },
    clearCameraImage(state) {
      state.image = null;
    },
  },
});

export const { setCameraImage, clearCameraImage } = cameraSlice.actions;

export default cameraSlice.reducer;
