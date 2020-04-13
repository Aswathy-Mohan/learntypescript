import {IStudent} from "../../interfaces/student.interface"

export const  ADD_STUDENT_REQUESTED="ADD_STUDENT_REQUESTED";
export const  ADD_STUDENT_SUBMITTED="ADD_STUDENT_SUBMITTED";
  
export interface ADDSTUDENTREQUESTACTION {
    type: string;
    student:IStudent;
  }
export interface ADDSTUDENTSUBMITACTION {
    type: string;
    student:IStudent;
  }
export type StudentAction =
  | ADDSTUDENTREQUESTACTION
  | ADDSTUDENTSUBMITACTION;