import { combineReducers } from "redux";

import bookingReducer from "./booking/slice";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
