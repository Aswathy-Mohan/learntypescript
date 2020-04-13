import {IStudent} from "../../interfaces/student.interface";
import * as actions from "./studentActions";

export function addStudent(student:IStudent): actions.ADDSTUDENTREQUESTACTION {
    return {
      type: actions.ADD_STUDENT_REQUESTED,
      student
    };
  }

export function addStudentSuccess(student:IStudent): actions.ADDSTUDENTSUBMITACTION {
    return {
      type: actions.ADD_STUDENT_SUBMITTED,
      student
    };
  }  