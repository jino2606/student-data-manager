import React, { useEffect, useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { Button, Modal } from 'react-bootstrap';
import { deleteGroupData, getAllGroups } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './groups.css'
import CreateGroup from '../Components/CreateGroup';

function Groups() {

  /* State Lifting */
  const [addCategory, setAddCategory] = useState(false)

  /* For the Delete Confirmation */
  const [showPopup, setShowPopup] = useState(false);

  const popupClose = () => setShowPopup(false);
  const popupShow = () => setShowPopup(true);

  const [idToDelete, setIdToDelete] = useState(null);


  /* To store Groups Data */
  const [groupsData, setGroupsData] = useState()

  const fetchData = async()=>{
    
    const response = await getAllGroups()
    
    const {data} = response

    setGroupsData(data)
  }

  useEffect(()=>{
    setAddCategory(false)
    fetchData()
  }, [addCategory])
  
  const deleteGroup = async(id)=>{
    const response = await deleteGroupData(id)
    fetchData()
    if(response.status>=200 && response.status<300){
      toast.success(`Group Deleted Successfully`)
    }
    else{
      toast.error(`Failed to Delete group`)
    }
    // setAddGroup()
    fetchData()
  }

  const showConfirmation = (id)=>{

    // Set the id of the group to delete
    setIdToDelete(id);
    // Open the confirmation popup
    setShowPopup(true);

  }

  const confirmDelete = ()=>{
    // Handle delete only when the user confirms
    if (idToDelete) {
      deleteGroup(idToDelete);
      setIdToDelete(null); // Reset the id after deletion
    }
    setShowPopup(false); // Close the modal after deletion
  }

  const cancelDelete = () => {
    setIdToDelete(null); // Reset the id if the user cancels
    setShowPopup(false); // Close the modal if the user cancels
  };

  return (

<>

      <div className='container'>

        <CreateGroup setAddCategory={setAddCategory} />

        <div className='mx-5 bg-white shadow-lg rounded-4 mt-4 p-5'>
          <table className='w-100' style={{ borderCollapse: 'separate', borderSpacing: '0 15px', minHeight: '250px' }}>
            <thead className='mb-5'>
              <tr className='my-3'>
                <th scope='col' style={{width: '80%', fontSize:'1.5em'}}>Group &gt;</th>
                <th scope="col" style={{width: '20%', fontSize:'1.5em'}} className='text-center'>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className='mt-5 position-relative' >
                {
                  groupsData?.length>0? 
                  groupsData?.map((item)=>(
                  <tr className='hoverEffects'>
                    <td colspan="1" style={{fontWeight: '500' }}>{item.groupName}</td>
                    <td colspan="1" className='text-center'>                
                      <button onClick={()=>showConfirmation(item.id)} style={{border:"none" , background:"none" }} className='delete_button' >
                        <i style={{color: '#dc3545'}} class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  )):<h2 className='position-absolute top-50 start-50 translate-middle'>No Groups Added</h2>
                }
            </tbody>
          </table>
        </div>  
      </div>

      {/* Modal for confirming the delete */}

      <Modal
        show={showPopup}
        onHide={popupClose}
        backdrop="static"
        keyboard={false}
        style={{zIndex: '9999', border: 'none'}}
        className='shadow-lg'
      >

      <Modal.Header Header>
      <Modal.Title className='text-center' style={{fontWeight: '600'}}><GroupsIcon className='me-3 fs-1'/> Do you really want to delete this group? </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container d-flex justify-content-center">
          <Button variant="" onClick={cancelDelete} className="btn btn-outline-secondary me-4">
              Close
          </Button>
          <Button variant="danger" onClick={confirmDelete} >Delete</Button>
        </div>
      </Modal.Body> 
      </Modal>
      <ToastContainer position='top-right' theme='colored'/>
</>
  
  )
}

export default Groups