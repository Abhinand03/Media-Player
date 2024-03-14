import React, { useEffect, useState } from 'react'
import { getcatagory,getspecificvideo, updatecategory } from '../service/allApi'
import { deleteCat } from '../service/allApi'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function Addcatogori({catstatus}) {
  const [catvideos,setcatvideos]=useState([])

  const [delcat,setdelcat]=useState([])


 
  const getDatacat=async()=>
  {
    const res=await getcatagory()
    setcatvideos(res.data)
  }

  const delcatvideo=async (id)=>{
    console.log(id);
    const res= await deleteCat(id)
    // console.log(res);
    if(res.status>=200 && res.status<300)
    {
      setdelcat(res)
      toast.success("video delete successfully")
    }
    else
    {
      toast.error("failed")
    }
  }

  useEffect(()=>
  {
    getDatacat()

  },[getDatacat,delcat])
  
  const handleDrop=async(e,id)=>{
    console.log("category id="+id)
    const vid=e.dataTransfer.getData("videoID")
    console.log("dropped video id:"+vid);
    let catgory = catvideos.find(item=>item.id==id)
    console.log(catgory);
    const res= await getspecificvideo(vid)
    // console.log(res.data);
    catgory.video.push(res.data)
    console.log(catgory);
    const rescat=await updatecategory(catgory,id)
    if(rescat.status>=200 && rescat.status<300){
      toast.success(`${res.data.caption} is added to ${catgory.name}` )
      getDatacat()
    }
    else
    {
      toast.error("video adding failed")
    }

  }
  const handleDragHover=(e)=>{
    e.preventDefault()
    console.log("draging over categoriy");
  }
  return (
    <>
    <div>
      {
        catvideos?
        catvideos.map(item=>(
          
          <div className='p-2 border border-3  mt-3 shadow text-center rounded bg-dark' onDragOver={e=>{handleDragHover(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}} >
          <div>
          <h5>{item.name}<i className="fa-solid fa-trash float-end" onClick={()=>{delcatvideo(item.id)}}></i></h5>


          </div>
          <div>
            {
              item?.video.map(v=>(
                <Videocard video={v} cat={true}/>
              ))
            }
          </div>
          
        </div>

        )):
        <h1>NO Categorie</h1>
      }
        
    
    </div>
    </>
    )
}

export default Addcatogori