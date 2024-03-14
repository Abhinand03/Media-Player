import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='w-100 d-flex flex-column justify-content-center nav '>
      <div className=' d-flex p-5'>
        <div className='col'>
          <h4>Media Player 2024</h4>
          <p style={{textAlign:'justify'}}>
          Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause  fastforward , rewind, and stop  buttons. In addition, they generally have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file.

          </p>
        </div>
        <div className='col p-5'>
          <h4>Links</h4>
          <Link to={'/'} style={{color:'grey',textDecoration:"none"}}>Lnding</Link><br />
          <Link to={'/dash'}style={{color:'grey', textDecoration:"none"}}>Dashboard</Link><br />
          <Link to={'/his'} style={{color:'grey' ,textDecoration:"none"}}>History</Link>
        </div> 
        <div className='col p-5'>
          <h4>Reference</h4>
          <a href="https://getbootstrap.com/"  target='_blank'style={{color:'grey',textDecoration:"none"}}>Bootsrap</a><br />
          <a href="https://react-bootstrap.netlify.app/" target='_blank'style={{color:'grey',textDecoration:"none"}}>React-Bootsrap</a><br />
          <a href="https://react.dev/" target='_blank'style={{color:'grey',textDecoration:"none"}}>React</a>

        </div>
        </div>
        <div className='text-center'>
          <p>&copy; media palyer 2024</p>

        </div>

      

    </div>

    
    </>
  )
}

export default Footer
