import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Dashbord() {
  const [addstatus,setaddstatus]=useState({})
  return (
    <>
    <div>
      <h1>Dashboard</h1>
      <Link to={'/his'}>History</Link>
      <Row className='p-5  w-100'>
        <Col sm='1' md='2'>
          <Addvideo setaddstatus={setaddstatus}/>
        
        </Col>
        <Col sm='4' md='7'>
          <Videos addstatus={addstatus}/>

        
        </Col>
        <Col sm='3' md='3'>
          <Categories/>
          
        
        </Col>
      </Row>

    </div>
    <ToastContainer/>
    </>
  )
}

export default Dashbord