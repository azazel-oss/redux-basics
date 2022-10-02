import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthenticated: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "TOGGLE_COUNTER": {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }
//     default:
//       return state;
//   }
// };

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }),
});

export default store;
