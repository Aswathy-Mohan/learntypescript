import React, { Component } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import RegisteredStudents from "./components/registeredStudents";
import { IStudentState } from "./interfaces/student.interface";
import "./App.scss";

class App extends Component<{}, IStudentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      studentList: [],
      student: { fname: "", lname: "", age: 0 },
      error: "",
    };
  }
  
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ student: { ...this.state.student, [name]: value } ,
      error:""});
  };

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(this.state.student).some(
        (property) => property === "null" || property === "" ||property===0
      )
    ) {
      let errorMessage = "All fields are required";
      this.setState({ error: errorMessage });
    } else {
      this.setState({
        studentList: [...this.state.studentList, this.state.student],
        error: "",
      });
    }
  };

  render() {
    return (
      <div className="App ml-3 mt-3">
        <div className="div-box">
          <Form onSubmit={this.handleSubmit}>
            <Row >
              <Col>
              <Form.Control type="text" 
              className="input-control" 
              placeholder="enter firstname" 
              name="fname" 
              onChange={this.handleChange}
              />
              </Col>
              <Col>
              <Form.Control
                type="text"
                className="input-control"
                placeholder="enter lastname"
                name="lname"
                onChange={this.handleChange}
              />
              </Col>
            </Row>
            <Form.Group>
              <Form.Control
                type="number"
                className="input-control mt-3"
                placeholder="enter age"
                name="age"
                onChange={this.handleChange}
              />
              </Form.Group>
            
            <Button variant="primary" type="submit"  block>
              Submit
            </Button>
            {this.state.error && <span className="error">{this.state.error}</span>}
          </Form>
          {this.state.studentList.length > 0 && (
            <RegisteredStudents studentList={this.state.studentList} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
