import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../logo.svg';

function Footer() {
  return (
   <div className='d-flex justify-content-center align-items-center w-100 flex-column mt-5 footer'>
      <div className="d-flex justify-content-evenly align-items-top w-100 mt-5">
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3 text-white'>
            <Logo className='me-3' style={{width:'2.8rem'}} />  {' '}
            APPNAME
          </h4>
          <h6 className='footerfont'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tempore tempor.
          </h6>
        </div>
        
        <div className="links d-flex flex-column">
          <h4 className='mb-3 text-white'>Links</h4>   
          <Link to={'/'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6' >Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6'>Home Page</Link>
          <Link to={'/addstudent'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6'>Add Student</Link>  
        </div>

        <div className="guides d-flex flex-column">
          <h4 className='mb-3 text-white'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6'>REACT</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6'>REACT-BOOTSTRAP</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}} className='footerfont fs-6'>BOOTSWATCHES</Link>  

        </div> 
        <div className="contact">
          <h4 className='mb-3 text-white'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your Email'/>
            <button className='btn ms-2 border-0 pink-violet-button'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-between align-items-center mt-3'>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram fa-2x footerfont"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-whatsapp fa-2x footerfont"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin fa-2x footerfont"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-comment fa-2x footerfont"></i></Link>
          </div>

        </div>
      </div>
      <p className='mt-3 text-white' style={{fontSize:'.8em'}}>© 2023, Student Manager APP. CRUD APP. Built with REACT</p>
    </div>
  )
}           

export default Footer
