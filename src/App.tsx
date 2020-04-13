import React, {useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import RegisteredStudents from "./components/registeredStudents";
import {AppState} from "./reducers";
import "./App.scss";
import Registration from "./components/registration";
import {addStudent} from "./data/student/studentActionCreator";

const App=()=> {
  const dispatch=useDispatch();
  const studentList=useSelector((state:AppState)=>state.students.studentList)
  const[student,setStudent]=useState(
    { fname: "", 
    lname: "", 
    age: 0 }
  );
  const[error,setError]=useState("");

  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setStudent({...student, [name]: value });
    setError("");
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(student).some(
        (property) => property === "null" || property === "" ||property===0
      )
    ) {
      let errorMessage = "All fields are required";
      setError(errorMessage);
    } else {
      dispatch(addStudent(student));
      setError("");
   }
  };

    return (
      <div className="App ml-3 mt-3">
        <div className="div-box">
          <Registration 
          handleSubmit={ handleSubmit }
          handleChange={ handleChange } 
          error={error}/>
          {studentList.length > 0 && (
            <RegisteredStudents studentList={studentList} />
          )}
        </div>
      </div>
    );
  }


export default App;
