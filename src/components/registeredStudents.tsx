import React from "react";
import { Column, Table,AutoSizer} from "react-virtualized";
import { IStudent } from "../interfaces/student.interface";
import "react-virtualized/styles.css";

interface IStudentListProps {
  studentList: IStudent[];
}

const RegisteredStudents =(props:IStudentListProps)=>{
    const list = props.studentList;
    return (
        <AutoSizer>{({ width}) => (
      <Table
        rowClassName="mt-3 table-row"
        headerHeight={40}
        width={width}
        height={200}
        rowHeight={50}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
      >
        <Column label="FirstName" dataKey="fname" width={150} />
        <Column label="LastName" dataKey="lname" width={150} />
        <Column label="Age" dataKey="age" width={100} />
      </Table>)}
      </AutoSizer>
    );
  }
export default RegisteredStudents;
