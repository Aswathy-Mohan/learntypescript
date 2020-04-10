export interface IStudentState {
    studentList:IStudent[],
    student:IStudent,
    error:string
  }
  interface IStudent{
    fname:string,
    lname:string,
    age:number
  }