import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import { deleteVideo, historyadd,hisdelete } from '../service/allApi';
import { toast } from 'react-toastify';

function Videocard({video,setdelstatus,cat}) {
    const [show, setShow] = useState(false);
    const [history,sethistory]=useState({
      caption:video.caption,url:video.url,dateTime:"",id:video.id

    })

  const handleClose = () => {
    historyadd(history)
   
    setShow(false);
  }
  const handleShow = () => {
    
    sethistory({...history,dateTime: Date()})

    
    setShow(true);
  }
 
  const handledrag=(e,id)=>{
    console.log("video draging id="+id);
    e.dataTransfer.setData("videoID",id)
  }

  
  const delvideo=async (id)=>{
    console.log(id);
    const res= await deleteVideo(id)
    hisdelete(id)

    // console.log(res);
    if(res.status>=200 && res.status<300)
    {
      setdelstatus(res)
      toast.success("video delete successfully")
    }
    else
    {
      toast.error("failed")
    }
    

  }
  return (
    <>
   <Card className='ms-3 mb-3 p-4 car-main' style={cat?{ width: '15rem' }:{ width: '18rem' }} draggable onDragStart={(e)=>{handledrag(e,video?.id)}}>
      <Card.Img variant="top" src={video.image} onClick={handleShow}/>
      <Card.Body className='d-flex felx-row justify-content-between'>
        <Card.Title>{video.caption}</Card.Title>

        {
          !cat &&
        <i className="fa-solid fa-trash-can" onClick={()=>{delvideo(video.id)}} style={{color:'#f5493d'}}></i>


        }

       
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315"  src={video.url}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    
    
    </>
  )
}

export default Videocard