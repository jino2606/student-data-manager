import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllStudents, getStudent } from '../services/allApi'
import './home.css'



function Home() {

  const [studentData, setStudentData] = useState([])
  const [results, setResults] = useState()
 
  const fetchData = async(value)=>{
    
    const response = await getAllStudents()
    
    const {data} = response

    const results = data.filter((student)=> {
      return value && student && student.name && student.name.toLowerCase().includes(value)
    })
    setResults(results)
  }

  const handleSearch = (value)=>{
    // setInput(value)
    fetchData(value)
  }

  
  
  const getFilteredStudent = async(id)=>{

    const response = await getStudent(id)
    const {data} = response
    setStudentData([data])
    setResults()

  }

  // useEffect(()=>{
    
  // }, [studentData])
const navigate = useNavigate();

const updateStudentData = (data)=>{
  
  // using the navigate function to go to the '/addstudent' route with data as state
  navigate('/addstudent', { state: { data } });
}

  return (
    <React.Fragment>
      <section className="contact-search">
        <div className="container">
          <div className="grid">
            <div className="col">
              <center>
                <p className="h3 fw-bold">All Student Data </p>
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
                    <div className="mb2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
          {

          studentData?.length>0?
          studentData?.map((item) =>(

            <div className="col-md-6">
 
                <div className="card">
                  <div className="card-body">
                   
                        <div className="row align-items-center d-flex justify-content-around">
                          <div className="col-md-4">
                            <img
                              src="https://images.unsplash.com/photo-1548783094-f92d7c8ae2d3"
                              alt="Not Found"
                              className="contact-img"
                            />
                          </div>
                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">{item.name}</span>
                              </li>
                              
                              <li className="list-group-item list-group-item-action">
                                Gender : <span className="fw-bold">{item.gender}</span>
                              </li>

                              <li className="list-group-item list-group-item-action">
                                RollNo : <span className="fw-bold">{item.rollno}</span>
                              </li>

                              <li className="list-group-item list-group-item-action">
                                Group : <span className="fw-bold">{item.group}</span>
                              </li>

                            </ul>
                          </div>
                          <div className="col-md-1 d-flex flex-column align-items-center">
                            <Link
                              to={"/student-detais"}
                              className="btn btn-warning my-1"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>

                            
                              {/* to={{
                                 pathname: '/addstudent',
                                 state: { data: updateData },
                               }} */}
                            <button className="btn btn-primary my-1" onClick={()=> updateStudentData(item)}>
                              <i className="fa fa-pen"></i>
                            </button>

                            <button className="btn btn-danger my-1">
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                    
                    
                  </div>
                </div>
            </div>
              )):<h2 className='text-center'>Nothing To Display</h2>

            }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home
