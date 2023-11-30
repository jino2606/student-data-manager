import React, { useState } from 'react'
// import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAStudents } from '../services/allApi';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './studentDetails.css'
import Button from 'react-bootstrap/Button';

function StudentDetails() {

  const {id} = useParams()

  const [ Student, setStudents] = useState({});

  const getUploadedStudent = async () => {
    const { data } = await getAStudents(id);
    setStudents(data);
  };

  useEffect(() => {
    getUploadedStudent();
  });

  /* For Navigating to Edit StudentData */
  const navigate = useNavigate();

  const updateStudentData = (data)=>{
    
    // using the navigate function to go to the '/addstudent' route with data as state
    navigate('/addstudent', { state: { data, isUpdate:true  }});

  }

  return (
    <>
      <div className='container-md'>
      <h1 className='text-center my-5'>Student Info</h1>
        {
        /* <div className="profile d-flex justify-content-center mb-3">
          <h1>Student Details</h1>
        </div>
        <div className='container d-flex justify-content-center align-items-center mb-5 '>
          <div style={{width: '300px', height: '300px'}} className='rounded-circle overflow-hidden'>
            <img className='w-100 h-100' style={{objectFit: 'cover', objectPosition: 'center'}} src={Student.url} alt=""/>
          </div>
          <h3>{Student.name}</h3>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>RollNo</th>
              <th>Group/Class</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>State</th>
              <th>Place</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{Student.name}</td>
              <td>{Student.rollno}</td>
              <td>{Student.group}</td>
              <td>{Student.gender}</td>
              <td>{Student.email}</td>
              <td>{Student.address}</td>
              <td>{Student.phonenumber}</td>
              <td>{Student.city}</td>
              <td>{Student.state}</td>
              <td>{Student.place}</td>
            </tr>
          </tbody>
        </table> */}

        <div className="row bg-white p-3 p-md-5 rounded-4 shadow-lg">
          <div className='d-flex justify-content-between align-items-center mb-5'>
            <h4 className=''>Student Details</h4>
            <Button variant='' className='h-100' onClick={()=> updateStudentData(Student)}>
              <i style={{color: 'pink'}} className='w-100' class="fa-regular fa-pen-to-square"></i>
            </Button>
           
          </div>
         
          <Row className='mx-auto'>
            <Col lg="4">
              <div style={{width: '270px', height: '270px'}} className='rounded-circle overflow-hidden mb-4'>
                <img className='w-100 h-100' style={{objectFit: 'cover', objectPosition: 'center'}} src={Student.url} alt=""/>
              </div>

              <p className='title'>Name</p>
              <p className='details'>{Student.name}</p>
            </Col>

            <Col lg="4" className=''>
              <p className='title'>Group/Class</p>
              <p className='details'>{Student.group}</p>
              
              <p className='title'>RollNo</p>
              <p className='details'>{Student.rollno}</p>

              <p className='title'>Gender</p>
              <p className='details'>{Student.gender}</p>

              <p className='title'>Email</p>
              <p className='details'>{Student.email}</p>

              <p className='title'>Phone Number</p>
              <p className='details'>{Student.phonenumber}</p>
            </Col>

            <Col lg="4" className=''>
              <p className='title'>Address</p>
              <p className='details'>{Student.address}</p>

              <p className='title'>City</p>
              <p className='details'>{Student.city}</p>

              <p className='title'>State</p>
              <p className='details'>{Student.state}</p>

              <p className='title'>Place</p>
              <p className='details'>{Student.place}</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default StudentDetails
