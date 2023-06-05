import { createSlice } from '@reduxjs/toolkit';

export type ApiKeysType = string[];

interface ConfigState {
  apiKeys: ApiKeysType;
  activeApiKey: string;
}

const keys = [
  'k_cta6yf13',
  'k_sl97avk8', //Dmytro 1 user12345
  'k_cta6yf13', //Dmytro 2 dmytro123
  'k_10zfa02h', //Dmytro 3 mdm-12345
  'k_3kkf3myc', //Alex
];

const initialState: ConfigState = {
  apiKeys: keys,
  activeApiKey: keys[0],
};

const apiKeysSlice = createSlice({
  name: 'apiKeys',
  initialState,
  reducers: {
    setNextApiKey: (state) => {
      const currentIndex = state.apiKeys.indexOf(state.activeApiKey);

      state.activeApiKey =
        state.apiKeys[(currentIndex + 1) % state.apiKeys.length];
    },
  },
});

export const { setNextApiKey } = apiKeysSlice.actions;
export default apiKeysSlice.reducer;
