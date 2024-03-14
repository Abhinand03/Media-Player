import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addCatagories } from '../service/allApi';
import { toast } from 'react-toastify';
import Addcatogori from './Addcatogori';


function Categories() {

  const [catstatus,setcatstaus]=useState({})
  const [catvideo,setcatvideo]=useState({
    name:'',video:[]
  })
  const getcat=(val)=>{
    // const {name,value}=e.target
    if(val){
    setcatvideo({...catvideo,name:val})


    }
    
    // console.log({...catvideo,categorie:value});




  }
  const adcat=async()=>{
    console.log(catvideo);
    if(catvideo.name)
    {
       const res = await addCatagories(catvideo) 
       if(res.status>=200 && res.status<300)
       {
        setcatstaus(res.data)
        toast.success("Categorie Added Sucessfully")
        handleClose()
        

       }
       else{
        toast.error("category Adding Failed")
       }


    }
    else{
      toast.info("Eter valid Data")
    }
  
  }


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setcatvideo({name:'',video:[]})
  }
  const handleShow = () => setShow(true);
  

  return (
    <>
    <div className='d-grid'>
      <Button variant='info' className='btn' onClick={handleShow}> Add categories </Button>
      {
        
      }
    <Addcatogori catstatus={catstatus} />



    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Categorie name</Form.Label>
                <Form.Control type="text" placeholder="Categorie"  name='categorie'  onChange={(e)=>{getcat(e.target.value)}} />
              </Form.Group>
             
        </Form>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={adcat}>save</Button>
        </Modal.Footer>
      </Modal>

    
    </>
  )
}

export default Categories