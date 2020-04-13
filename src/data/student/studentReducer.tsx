import * as actions from './studentActions';
import  {IStudent} from "../../interfaces/student.interface";

export interface StudentState {
studentList:IStudent[];
} 

const initialState: StudentState = {
  studentList: []
};

export const studentReducer = (
  state: StudentState = initialState,
  action: actions.StudentAction
) => {
  switch (action.type) {
    case actions.ADD_STUDENT_SUBMITTED:
      return {...state,studentList:[...state.studentList,action.student]};
    default:
      return state;
  }
}