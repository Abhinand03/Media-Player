import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='d-flex p-5 shadow'>
        <div className='col d-flex flex-column justify-content-center'>
          <h1>Media Plyer 2024</h1>
          <p> Media player software is a type of application software for playing youtube  audio and video files. Media players commonly display standard media control icons known from physical devices</p>
          <div>
          <Link className='btn btn-success' to={'/dash'} >Explore</Link>

          </div>

        </div>
        <div className="col ">
          <img src="https://cdn.dribbble.com/users/943550/screenshots/2373582/video-marketing_2.gif" style={{width:'400px',margin:"0px 170px"}} alt="img" className='img-fluid rounded shadow ' />
        </div>

      </div>

    </div>
    <div className='mt-3 p-5 '>
      <h1 className='text-center'>Futures</h1>
      <div className='d-flex flex-row justify-content-around mt-5'>
      <div className="card" style={{width:"18rem"}}>
  <img src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif"  className="card-img-top" style={{height:"250px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Upload Videos</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a>  */}
  </div>
  
</div>
<div className="card" style={{width:"18rem"}}>
  <img src="https://camo.githubusercontent.com/c3f096893b5f0f1c34e950a714a3b1a652f47c050ba8f89a95d4db9ebebc2aa1/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f33316139373235383733373035392e356130373730356234623536352e676966"  style={{height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Wacth Video</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  
</div>
<div className="card" style={{width:"18rem"}}>
  <img src="https://www.multivu.com/img/blog/2018/listen-to-watch/ghosue-002.gif"  style={{height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Wacth History</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  
</div>

      </div>
          

    </div>

    <div className='d-flex justify-content-center align-items-center p-5'>
      <div className="col p-5">
        <h2>Simple , fast ,secured ,</h2>
        <p style={{textAlign:"justify"}}>Media player 2024 software is a type of application software for playing youtube  audio and video files. Media players commonly display standard media control icons known from physical devices ,it is use to upload youtube videos and we can also watch</p>
      </div>
      <div className="col">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=sVd_lfWxp6qg_xoB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    
    </>
  )
}

export default Landing