import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-play fa-beat fa-xl me-3" style={{color: '#3fcfd9'}}></i>
           {' '}
             <span className='text-white'>Media Player 2024</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      
    </div>
  )
}

export default Header