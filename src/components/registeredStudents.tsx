import React,{Component} from 'react';
import {Table} from "react-bootstrap";


class RegisteredStudents extends Component<IStudentListProps>{
    render(){
        const{studentList}=this.props;
        return(<Table striped bordered hover size="sm" className="mt-3">
            <thead>
            <tr>
                 <td>FirstName</td>
                 <td>LastName</td>
                 <td>Age</td>
            </tr>
            </thead>
            <tbody>
            {studentList.map(({fname,lname,age})=>
            <tr>
               
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{age}</td>
            </tr>)}
            </tbody>
        </Table>)
    }
 }

export default RegisteredStudents;

interface IStudentProps{
    fname:string,
    lname:string,
    age:number
  }
interface IStudentListProps{
    studentList:IStudentProps[]
}