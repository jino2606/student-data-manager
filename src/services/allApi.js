import { commonAPI } from "./commonApi";
import serverURL from "./serverURL";


export const getStudent = async(id)=>{
    return await commonAPI('GET',`${serverURL}/studentData/${id}`, "")
}

export const getAllGroups = async()=>{
    return await commonAPI('GET',`${serverURL}/groups`, "")
}

export const deleteGroupData = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/groups/${id}`, {})
}

export const saveGroupData = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/groups/`, reqBody)
}

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
  return await commonAPI('POST',`${serverURL}/studentData`,reqBody)
}

/* api to edit/update student detais */
export const editAllData = async(reqBody, id)=>{
    return await commonAPI('PUT',`${serverURL}/studentData/${id}`, reqBody)
}

/* Api to dele a student */
export const deleteStudentData = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/studentData/${id}`, {})
}
