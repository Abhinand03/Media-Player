import axios from "axios";

const commonApi= async(reqmethod,apiurl,body)=>{
    const reqconfig={
        method:reqmethod,
        url:apiurl,
        data:body,
        Headers:{'content-type':'application/json'}
    }

    return await axios(reqconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })


}
export default commonApi