import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Button, Card, Col, Row } from 'react-bootstrap'
import '../buttonStyles.css'
import { ReactComponent as Banner } from '../banner.svg'
import { ReactComponent as Search } from '../assets/svg/search.svg'
import { ReactComponent as Group } from '../assets/svg/groups.svg'
import { ReactComponent as Edit } from '../assets/svg/edit.svg'
import featureImage from "../assets/images/Features.jpg"
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigateByUrl = useNavigate()
  return (
    <>
    <Header/>
    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Col></Col>

        <Col lg={5}>
            <h3 className='mb-4 sansFont'>Welcome to <span className='appName'>AppName</span></h3>
            <p className='landing-mainText sansFont'>Elevate your student data management.</p>
            <p className='landing-subText sansFont'>Sign up for a free trial.</p>

            <Button variant="outline-dark" className='mt-5 me-2'>Sign Up</Button>

            <Button className='mt-5 border-0 pink-violet-button' onClick={()=>navigateByUrl('/home')}> Get Started <i class="fa-solid fa-arrow-right ms-3 text-white"></i> </Button>
        </Col>

        <Col lg={5} className=''>
            <Banner />
        </Col>

        <Col></Col>
    </Row>

    <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
    <h3 style={{fontWeight:'600'}}>Features</h3>

    <Row className='cards d-flex align-items-center justify-content-evenly w-100 my-5'>

        <Col sm="12" lg="4" className='mb-3 d-flex align-items-center justify-content-center'>
            <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
                <Search style={{width:'100%', height:'55rem'}}/>
                <Card.Body>
                    <Card.Title className='text-center'>Search Any Data</Card.Title>
                </Card.Body>
            </Card>
        </Col>

        <Col sm="12" lg="4" className='mb-3 d-flex align-items-center justify-content-center'>
            <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
             <Group style={{width:'100%', height:'55rem'}}/>
            <Card.Body>
                <Card.Title className='text-center'>Manage Groups</Card.Title>
            </Card.Body>
            </Card>
        </Col>

        <Col sm="12" lg="4" className='d-flex align-items-center justify-content-center'>
            <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
             <Edit style={{width:'100%', height:'55rem'}}/>
            <Card.Body>
                <Card.Title className='text-center'>Modify Data</Card.Title>
            </Card.Body>
            </Card>
        </Col>

    </Row>

    </div>

    <Row className='my-5 shadow-sm rounded bg-white p-5 d-flex align-items-center justify-content-between'>

        <Col lg="5">
            <h3 className='mb-5 features' style={{}}>Simple Fast and Easy to Use</h3>
            <p className='mb-3'><span style={{fontSize:'25px'}}>Search Data :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>
            <p className='mb-3'><span style={{fontSize:'25px'}}>Organise Groups :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>
            <p className='mb-3'><span style={{fontSize:'25px'}}>Modify Data :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>

        </Col>
        <Col lg="5">
            <img width="100%" height="400" src={featureImage}></img>
        </Col>

    </Row>
    <Footer/>
    </>
  )
}

export default LandingPage
