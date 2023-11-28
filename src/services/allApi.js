import { commonAPI } from "./commonApi";
import serverURL from "./serverURL";

/*  */

// Read all Contact
export const getAllStudents = async ()=>{
    return await commonAPI("GET",`${serverURL}/studentData`,"")
}

// get

export const getAStudents = async (id)=>{
    return await commonAPI("GET",`${serverURL}/studentData/${id}`,"")
}
//api to addstudent datas

 export const  uploadAllData =async(reqBody)=>{
  return  await commonAPI('POST',`${serverURL}/studentData`,reqBody)
}