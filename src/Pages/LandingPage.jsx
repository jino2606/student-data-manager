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

    <div className='cards d-flex align-items-center justify-content-evenly w-100 my-5'>
        {/* <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card> */}

        <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
            <Search style={{width:'100%', height:'55rem'}}/>
            <Card.Body>
                <Card.Title className='text-center'>Search Any Data</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
            </Card.Body>
        </Card>

        <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
        {/* <Card.Img variant="top" style={{width:'100%', height:'55rem'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" /> */}
         <Group style={{width:'100%', height:'55rem'}}/>
        <Card.Body>
            <Card.Title className='text-center'>Manage Groups</Card.Title>
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text> */}
        </Card.Body>
        </Card>

        <Card className='border-0 bg-white shadow-sm' style={{ width: '22rem',height:'22rem' }}>
        {/* <Card.Img variant="top" style={{width:'100%', height:'55rem'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" /> */}
         <Edit style={{width:'100%', height:'55rem'}}/>
        <Card.Body>
            <Card.Title className='text-center'>Modify Data</Card.Title>
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text> */}
        </Card.Body>
        </Card>

    </div>

    </div>

    <div className='container my-5 shadow-sm rounded bg-white p-5 d-flex align-items-center justify-content-between'>

    <div className="col-lg-5">
        <h3 className='mb-5 features' style={{}}>Simple Fast and Easy to Use</h3>
        <p className='mb-3'><span style={{fontSize:'25px'}}>Search Data :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>
        <p className='mb-3'><span style={{fontSize:'25px'}}>Organise Groups :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>
        <p className='mb-3'><span style={{fontSize:'25px'}}>Modify Data :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet et eligendi unde voluptas, iste molestias adipisci.</p>

    </div>
    <div className="col-lg-5">
        <img width="100%" height="400" src={featureImage}></img>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default LandingPage
