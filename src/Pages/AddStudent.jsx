import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { editAllData, getAllGroups, uploadAllData } from '../services/allApi';
import { useLocation } from 'react-router-dom';
import profileImage from "../assets/images/profile-plcaeholder.jpg.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddStudent() {

  /* empty data obj */
  const initialData = {
    url: "",
    name:"",
    rollno:"",
    gender:"",
    email:"",
    address:"",
    phonenumber:"",
    city:"",
    state:"",
    place:"",
    group:"",
    id:null
  }
  
  const [isUpdateForm, setIsUpdateForm] = useState(false)

  /* Store Form Data */
  const [student, setData] = useState(initialData)

  /* To store Groups Data */
  const [groupsData, setGroupsData] = useState()

  /* Bootstrap Validation */
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // using the useLocation hook to access the current location, including the state
  const location = useLocation();
  const updateData = location.state?.data;
  const isUpdate = location.state?.isUpdate;

  const handleClear = ()=>{
    // Use the state updater function to ensure the state is updated before calling handleClear
    setData((student) => ({ ...student, ...initialData }));
    setIsUpdateForm(false)

  }

  const handleUpload=async ()=>{

    const{url,name,rollno,gender,email,address,phonenumber,city,state,place,group} = student
    if(!url || !name || !rollno || !gender || !email || !address || !phonenumber || !city || !state || !place || !group){
      toast.warning('Please fill the Form Completely')
    }
    else{

      /* To check if the page is loaded as update or as Normal add Student */
      if(isUpdateForm){

        /* If it is an edit function PUT method is called */
        const response = await editAllData(student, student.id)
        if(response.status>=200 && response.status<300){
          toast.success(`Updated Data Successfully`)
          handleClear()
        }
        else{
          toast.error('Something went wrong try again later')
        }
      }

      else{

        /* If it is a normal add Student DAta function POST method is called */
        const response = await uploadAllData(student)
        if(response.status>=200 && response.status<300){
          toast.success(`${response.data.name} is successfully Uploaded`)
          handleClear()
        }
        else{
          toast.error('Something went wrong try again later')
        }
      }
    }
  }

  const fetchData = async()=>{
    
    const response = await getAllGroups()
    
    const {data} = response

    setGroupsData(data)
  }

  useEffect(() => {
    setData((student) => ({ ...student, ...updateData }));
    setIsUpdateForm(isUpdate)
    fetchData()
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <Container className='mt-5 p-0 container-md'>
        <Row>
         <h1 className='text-center'>{isUpdateForm?"Edit Student Details": "Add a Student"}</h1>
        </Row>
        <Row className='mt-5'>
          <Col md="6" sm="12" className='d-flex flex-column justify-centent-end align-items-center'>
            <Card style={{ width: '22rem' }} className='p-md-5 p-2 border-0 rounded-4 shadow-lg'>
              <Card.Img variant="top" src={isUpdateForm && student.url ? student.url : profileImage} />
              <Card.Body>
                <Card.Title className='text-center'>Profile Picture</Card.Title>
                  <Card.Text>
                    <Form.Control type="text" value={isUpdateForm ? student.url:student.url} placeholder="Enter the Image Url" onChange={(e)=>setData({...student,url:e.target.value})}/>    
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" sm="12">
            <div className='bg-white p-md-5 p-3 rounded-4 shadow-lg mt-5 mt-md-0'>
              <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Label>Student Name</Form.Label>
                <Form.Control required value={isUpdateForm ? student.name:student.name} placeholder="First name" onChange={(e)=>setData({...student,name:e.target.value})}  />
                <Form.Label className='mt-2'>RollNo</Form.Label>
                <Form.Control required type="text" value={isUpdateForm ? student.rollno:student.rollno} placeholder="Enter the RollNo" onChange={(e)=>setData({...student,rollno:e.target.value})} />
                <Form.Label className='mt-2'>Gender</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e)=>setData({...student,gender:e.target.value})} >
                <option disabled>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Select>

                <Form.Label className='mt-2'>Email</Form.Label>
                <Form.Control required type="email" value={ isUpdateForm ? student.email:student.email} placeholder="Enter the email" onChange={(e)=>setData({...student,email:e.target.value})} />
                <Form.Label className='mt-2'>Address</Form.Label>
                <Form.Control required placeholder="1234 Main St" value={ isUpdateForm ? student.address:student.address} onChange={(e)=>setData({...student,address:e.target.value})}  />

                <Form.Label className='mt-2'>Phone Number</Form.Label>
                <Form.Control required placeholder="Enter the Phone Number" value={ isUpdateForm ? student.phonenumber:student.phonenumber} onChange={(e)=>setData({...student,phonenumber:e.target.value})} />

                <Form.Label className='mt-2'>City</Form.Label>
                <Form.Control required placeholder="Enter the City Name" value={ isUpdateForm ? student.city:student.city} onChange={(e)=>setData({...student,city:e.target.value})} />

                <Form.Label className='mt-2'>State</Form.Label>
                <Form.Control required placeholder="Enter the State Name" value={ isUpdateForm ? student.state:student.state} onChange={(e)=>setData({...student,state:e.target.value})} />

                <Form.Label className='mt-2'>Place</Form.Label>
                <Form.Control required placeholder="Enter the Place Name" value={ isUpdateForm ? student.place:student.place} onChange={(e)=>setData({...student,place:e.target.value})} />
                
                <Form.Label className='mt-2' htmlFor='show-groups'> Group/Class </Form.Label>
                <Form.Select defaultValue="Select Group" onChange={(e)=>setData({...student,group:e.target.value})} id='show-groups' >
                  <option disabled >Select Group</option>
                  {
                    groupsData?.length>0? 
                        groupsData?.map((item)=>(
                          <>
                            <option>{item.groupName}</option>
                          </>
                        )):<h2 className=''>No Groups Added</h2>
                        
                    }
                    {/* <option>
                      <button type="button" className='btn fs-6'>Add new group+</button>
                    </option> */}

                </Form.Select>
                <div className='d-flex align-item-center justify-content-evenly mt-5'>
                  <Button type='submit' className='' variant="success" onClick={handleUpload}>
                    Submit
                  </Button>
                  <Button variant="" className="btn btn-danger" onClick={handleClear}>
                      Clear Form
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position='top-right' theme='colored'/>
    </>
  )
}

export default AddStudent
