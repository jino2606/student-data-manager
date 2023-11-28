import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { saveGroupData } from '../services/allApi';
import { toast } from 'react-toastify';
import GroupsIcon from '@mui/icons-material/Groups';
import 'react-toastify/dist/ReactToastify.css';

function CreateGroup({setAddCategory}) {

  /* Bootstrap modal codes */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  /* to store New group created DATA */
  const [addGroup, setAddGroup] = useState()

  const saveGroup = async()=>{
    if(addGroup){
      let body = {
        groupName:addGroup
      }

      const response = await saveGroupData(body)
      if(response.status>=200 && response.status<300){
        toast.success(`Group Added Successfully`)
        setShow(false)
      }
      else{
        toast.error(`Failed to add a group`)
        setShow(false)
      }
      setAddGroup()
      // setAddCategory
      setAddCategory(true)
    }
    else{
      toast.warning("Please Enter a Group Name")
    }
  }

  return (
    <>
      <div className='d-flex align-items-center justify-content-between mx-5 mt-5'>
        <h1>Group Management</h1>
        <button onClick={handleShow} style={{fontSize:'15px',}} className="btn btn-success btn-lg" type="button">+ Create Groups</button>
      </div>
      <div>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{zIndex: '9999', border: 'none'}}
          className='shadow-lg'
        >

        <Modal.Header Header closeButton>
        <Modal.Title className='text-center' style={{fontWeight: '600'}}><GroupsIcon className='me-3 fs-1'/>Add New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Group Name</Form.Label>
              <Form.Control onChange={(e)=>setAddGroup(e.target.value)} type="text" placeholder="Enter Group Name" />
            </Form.Group>
          </form>
        </Modal.Body> 
        <Modal.Footer>
        <Button variant="" onClick={handleClose} className="btn btn-outline-secondary">
            Close
        </Button>
        <Button variant="primary" onClick={()=>saveGroup(addGroup)}>Save</Button>
        </Modal.Footer>
          </Modal>
      </div>
    </>

  )
}

export default CreateGroup
