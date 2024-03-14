import React, { useEffect, useState } from 'react'
import { hisdelete, historyget } from '../service/allApi'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

function History() {
  const [his,sethis]=useState([])
  const [delstatus,setdelstatus]=useState([])

  useEffect(()=>{
    getData()
  },[delstatus])
  const getData=async()=>{
    const res=await historyget()
    sethis(res.data)
    console.log(his);

    
  }
  const delhis=async(id)=>{
    const del=await hisdelete(id)
    if(del.status>=200 && del.status<300)
    {
      setdelstatus(del)
      // alert("fnvf")

      toast.success("delete successfully")
    }
    else
    {
      toast.error("failed")
    }
    
  }
  
  return (
    <>
   
     <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">url</th>
      <th scope="col">Date </th>
      <th scope="col">Delete </th>
      
    </tr>
  </thead>
  <tbody>
    {
      his?
      his.map(item=>(
        <tr>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.dateTime}</td>
          <td><i class="fa-solid fa-trash-can" onClick={()=>delhis(item.id)} style={{color:'#c11010'}}></i></td>

        </tr>
      )):<tr>
        <p>no Data</p>
      </tr>
    }
  

    
        
     
   
  </tbody>
</table>
<ToastContainer/>
    
    
    </>
   
    
  )
}

export default History