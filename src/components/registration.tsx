import React from 'react';
import {Form,Row,Col,Button} from "react-bootstrap"

interface IProps{
    handleSubmit: any;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    error:string;
}

const Registration = (props:IProps) =>{
const {handleChange,handleSubmit,error}=props;
 return(<Form onSubmit={handleSubmit}>
            <Row >
              <Col>
              <Form.Control type="text" 
              className="input-control" 
              placeholder="enter firstname" 
              name="fname" 
              onChange={handleChange}
              />
              </Col>
              <Col>
              <Form.Control
                type="text"
                className="input-control"
                placeholder="enter lastname"
                name="lname"
                onChange={handleChange}
              />
              </Col>
            </Row>
            <Form.Group>
              <Form.Control
                type="number"
                className="input-control mt-3"
                placeholder="enter age"
                name="age"
                onChange={handleChange}
              />
              </Form.Group>
            
            <Button variant="primary" type="submit"  block>
              Submit
            </Button>
            {error && <span className="error">{error}</span>}
          </Form>)
  
 }
export default Registration;



