export interface IStudentState {
    studentList:IStudent[],
    student:IStudent,
    error:string
  }
export interface IStudent{
    fname:string,
    lname:string,
    age:number
  }