import './App.css';
import { React, useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';

function App() {
  const [firstName, setfirstName] = useState("");
  const [Applications, setApplications] = useState([]);
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [dob, setdob] = useState("");
  const [prevExp, setprevExp] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [resume, setresume] = useState("");
  const [interviewdet, setinterviewdet] = useState("");
  const [status, setstatus] = useState("");
  const [interviewerID, setinterviewerID] = useState("");

  const submitData = () => {
    Axios.post("http://localhost:3001/api/submit", { firstName: firstName, lastName: lastName, contact: contact, dob: dob, email: email, prevexp: prevExp, qual: qualifications, resume: resume, interviewdatetime: interviewdet, status: status, interviewerID: interviewerID }).then(() => {
      alert("Data inserted successfully");
    }).catch(error => console.log(error))
  };
  

  const viewApplications = () => {
    Axios.get("http://localhost:3001/viewApplications").then(res => {
      console.log(res);
      setApplications(res.data);
    });
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={(e) => { setfirstName(e.target.value); }} type="text" />
            <Form.Label>Last Name</Form.Label>
            <Form.Control onChange={(e) => { setlastName(e.target.value); }} type="text" />
            <Form.Label>Contact Number</Form.Label>
            <Form.Control onChange={(e) => { setcontact(e.target.value); }} type="number" placeholder="+1 981628664" />
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => { setemail(e.target.value); }} type="email" placeholder="name@example.com" />
            <Form.Label>DOB</Form.Label>
            <Form.Control onChange={(e) => { setdob(e.target.value); }} type="text" />
            <Form.Label>Prev Exp</Form.Label>
            <Form.Control onChange={(e) => { setprevExp(e.target.value); }} type="text" />
            <Form.Label>Qualifications</Form.Label>
            <Form.Control onChange={(e) => { setqualifications(e.target.value); }} type="text" />
            <Form.Label>Resume</Form.Label>
            <Form.Control onChange={(e) => { setresume(e.target.value); }} type="text" />
            <Form.Label>Interview Date Time</Form.Label>
            <Form.Control onChange={(e) => { setinterviewdet(e.target.value); }} type="text" />
            <Form.Label>Status</Form.Label>
            <Form.Control onChange={(e) => { setstatus(e.target.value); }} type="text" />
            <Form.Label>Interviewer ID</Form.Label>
            <Form.Control onChange={(e) => { setinterviewerID(e.target.value); }} type="text" />
          </Form.Group>
        </Form>
        {Applications.map ((data,i)=> {
          return (
            <p> {data.firstName} </p>
          )
        })}
        <Button onClick={submitData} variant="primary">Submit</Button>{' '}
        <Button onClick={viewApplications} variant="primary">View all Applications</Button>{' '}
      </Container>
    </div>
  );
}

export default App;
