import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../service/allApi';
import { toast } from 'react-toastify';

function Addvideo({setaddstatus}) {
    const [show, setShow] = useState(false);
    const [video,setvideo]= useState({
      caption:'',url:'',img:''
    })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getdata=(e)=>{
    const {name,value}=e.target
    // console.log(name,value);
    if(name==="caption")
    {
      setvideo({...video,caption:value})
    }
    if(name==="url")
    {
      let furl=value
      furl=furl.split("v=")
      console.log(furl);
      let vurl = `https://www.youtube.com/embed/${furl[1]}?si=RdNc9WyYV2ZsG-6l&autoplay=1`

      setvideo({...video,url:vurl})
    }
    if(name==="image")
    {
      setvideo({...video,image:value})
    }  
  }
  const upload= async()=>{
    const {caption,url,image}=video
    if( !caption || !url || !image)
    {
      toast.warning("Enter Valid Details")
    }
    else
    {
      const res=await uploadvideo(video)
      console.log(res);
      if(res.status>=200 && res.status<300)
      {
        setaddstatus(res.data)
        toast.success("video Uploaded")
        handleClose()
        setvideo('')
      }

      else{
        toast.error("Failed")
      }

    console.log(video);


    }
  }

  return (
    <>
    <span className='btn' onClick={handleShow}><i class="fa-solid fa-file-circle-plus fa-xl"></i></span>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Video caption" name='caption'  onChange={(e)=>{getdata(e)}} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Video URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Video URL" name='url' onChange={(e)=>{getdata(e)}} />
                  </Form.Group>  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Thumbnial URL" name='image' onChange={(e)=>{getdata(e)}} />
                  </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={upload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default Addvideo