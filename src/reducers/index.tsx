import { combineReducers } from "redux";
import { studentReducer } from "../data/student/studentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
