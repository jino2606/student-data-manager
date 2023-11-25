import axios from "axios"


export const commonAPI = async(htttpMethod, url, reqBody)=> {

    let reqConfig = {
        method: htttpMethod,
        url,
        data: reqBody,
        Headers: {
            "Content-Type":"application/json"
        }
    }

    return await axios(reqConfig).then((response)=>{
        return response
    }).catch((error)=>{
        return error
    })
}