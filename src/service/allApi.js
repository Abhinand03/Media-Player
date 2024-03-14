import commonApi from "./commonApi";
import { BASE_URL } from "./base_url";

export const uploadvideo=async(data)=>{

    return await commonApi("POST",`${BASE_URL}/allvideo`,data)
}
 export const getvideo=async()=>{
    return await commonApi("GET",`${BASE_URL}/allvideo`,"")
 }

 export const deleteVideo=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/allvideo/${id}`,{})
 }

 export const addCatagories=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/category`,data)
 }

 export const getcatagory=async()=>
 {
   return await commonApi("GET",`${BASE_URL}/category`)
 }

 export const deleteCat=async(id)=>{
   return await commonApi("DELETE",`${BASE_URL}/category/${id}`,{})
}
export const historyadd=async(data)=>{
   return await commonApi("POST",`${BASE_URL}/history`,data)
}
export const historyget=async(data)=>{
   return await commonApi("GET",`${BASE_URL}/history`)
}

export const hisdelete=async(id)=>{
   return await commonApi("DELETE",`${BASE_URL}/history/${id}`,{})
}
export const getspecificvideo=async(id)=>{
   return await commonApi("GET", `${BASE_URL}/allvideo/${id}`,"")
}
export const updatecategory=async(data,id)=>{
   return await commonApi("PUT",`${BASE_URL}/category/${id}`,data)
}