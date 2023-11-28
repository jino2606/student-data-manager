import { commonAPI } from "./commonApi";
import serverURL from "./serverURL";

//api to addstudent datas

 export const  uploadAllData =async(reqBody)=>{
  return  await commonAPI('POST',`${serverURL}/studentData`,reqBody)
}