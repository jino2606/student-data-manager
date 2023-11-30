import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteStudentData, getAllStudents, getStudent } from '../services/allApi'
import './home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  /* For the cards */
  // const [allStudents, setAllStudents] = useState([]);
  const [inputValue, setInputValue] = useState()
  const [studentData, setStudentData] = useState([])
  const [results, setResults] = useState()
  const [showFilterButton, setShowFilterButton] = useState(false)
 
  const handleSearch = async(value)=>{

    const response = await getAllStudents()
    
    const {data} = response

    const results = data.filter((student)=> {
      return value && student && student.name && student.name.toLowerCase().includes(value)
    })
    setResults(results)
    setInputValue(value)
  }

  const getFilteredStudent = async(id)=>{
    // setStudentData([])
    const response = await getStudent(id)
    const {data} = response
    setStudentData([data])
    setResults()
    setShowFilterButton(true)
  }

  // To Get Data For the cards
  const getAllUploadedStudents = async () => {
    const { data } = await getAllStudents()
    setStudentData(data);
  };

  useEffect(() => {
    getAllUploadedStudents();
  },[]);

  /* For Navigating to Edit StudentData */
  const navigate = useNavigate();

  const updateStudentData = (data)=>{
    
    // using the navigate function to go to the '/addstudent' route with data as state
    navigate('/addstudent', { state: { data, isUpdate:true  }});

  }

  /* Deleting a Student Data */
  const deleteStudent = async(id)=>{

    const response = await deleteStudentData(id)
    if(response.status>=200 && response.status<300){
      toast.success(`Student Data Deleted Successfully`)
    }
    else{
      toast.error(`Failed to Delete the Student`)
    }
    getAllUploadedStudents()
  }

  return (
    <React.Fragment>
      <section className="contact-search">
        <div className="container">
          <div className="grid">
            <div className="col my-5">
              <center>
                <p className="h1">All Student Data </p>
              </center>
            </div>
          </div>
          {/* <div className="row"> */}
            <div className="row position-relative z-1">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Student Details"
                        onChange={e => handleSearch(e.target.value)}
                      />
                    </div>
                    {/* For Search Results */}
                    <div className='search_list w-100'>
                      {
                        results?.map((result, id) =>(
                          <div onClick={()=> getFilteredStudent(result.id)} key={id} className="px-3 pb-2 w-100 bg-white hoverEffects">
                            {result.name}
                          </div>
                        ))
                      }

                    </div>

                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                      {
                        showFilterButton &&
                        <button 
                        // onClick={getAllUploadedStudents}
                        // type="submit"
                        className="btn btn-warning ms-3"
                        >
                        Clear Filter
                        {/* <i style={{color: 'white'}} class="fa-solid fa-filter"></i> */}
                        </button>
                      }
                    </div>
                  </div>
                </form>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      <section className="contact-list">
        <div className='container'>
          <div className='row'>
            { studentData.length >0 ? studentData.map((student)=>(
               <div className="col-lg-6">
               <div className="card mb-4 border-0 shadow-sm">
                 <div className="card-body">
                   <div className="row align-items-center d-flex justify-content-around">
                     <div className="col-md-4 d-flex flex-md-column justify-content-evenly align-items-center">
                       <img src={student?.url} alt="" className='contact-img' />
                     </div>
                     <div className="col-md-7 mt-3 mt-md-0">
                       <ul className='list-group'>
                         <li className='list-group-item list-group-item-action'>
                           Name : <span className='fw-bold'>{student?.name}</span>
                         </li>

                         <li className='list-group-item list-group-item-action'>
                           RollNo : <span className='fw-bold'>{student.rollno}</span>
                         </li>

                         <li className='list-group-item list-group-item-action'>
                           Group : <span className='fw-bold'>{student.group}</span>
                         </li>

                       </ul>
                     </div>
                     <div  className="col-md-1 col-sm-12 d-flex flex-md-column justify-content-evenly align-items-center">

                      {/* Can be done using just passing the value to that component like update student data */}
                       <Link to={`/student-detais/${student.id}`} className="btn btn-warning my-1">
                         <i className='fa fa-eye'></i>
                       </Link>

                       <button className="btn btn-primary my-1" onClick={()=> updateStudentData(student)}>
                          <i className="fa fa-pen"></i>
                        </button>

                       <button className="btn btn-danger my-1" onClick={()=> deleteStudent(student.id)}>
                         <i className='fa fa-trash'></i>
                       </button>

                     </div>
                   </div>
                 </div>
               </div>
             </div>
            ))
            :<h2 className='text-center'>Nothing To Display</h2>
            }

          </div>

        </div>
      </section>
      <ToastContainer position='top-right' theme='colored'/>
    </React.Fragment>
  )
}

export default Home
