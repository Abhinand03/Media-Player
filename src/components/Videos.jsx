import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getvideo } from '../service/allApi'

function Videos({addstatus}) {
  const [allvideo,setallvideo]=useState([])
  const [delstatus,setdelstatus]=useState({})
  useEffect(()=>
  {
    getData()

  },[addstatus,delstatus])
  const getData=async()=>
  {
    const res=await getvideo()
    // console.log(res.data);
    setallvideo(res.data)
    // console.log(allvideo);
  }


  return (
    <div className='vicard  p-5 shadow row '>
      {
        allvideo?
        allvideo.map(item=>(
      <Videocard video={item} setdelstatus={setdelstatus}/>


        )):
        <h1>No Vdeio found</h1>
      }
      
    </div>
  )
}

export default Videos