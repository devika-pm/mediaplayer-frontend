import { serverURL } from "./serverURL"
import { commonAPI } from "./commonAPI"

// upload a video 
export const uploadVideo = async(reqBody)=>{
    //make post http request to "http://localhost:4000/" to add vodeo in json server and return response to add component
   return await commonAPI("POST",`${serverURL}/videos`,reqBody)

}

//get all videos from json server
export const getAllVideos =async()=>{
        //make get http request to "http://localhost:4000/" to get all vodeo from json server and return response to view component
        return await commonAPI("GET",`${serverURL}/videos`,"")


}

//get a video from json server
export const getVideo =async(id)=>{
    //make get http request to "http://localhost:4000/" to get all vodeo from json server and return response to video card component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")


}
// get allvdeos from json server
export const deleteAVideo = async (id)=>{
    // make a get http request to http://localhost:4000/video to get a video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}


export const addToHistory = async (videoDetails)=>{
    // make a get http request to http://localhost:4000/history to add a video history from json server and return response to watch history  component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}


export const getAllHistory = async ()=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

export const deleteHistory = async (id)=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


export const addCategory = async (reqBody)=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

export const getAllCategory = async ()=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

export const deleteCategory = async (id)=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

export const updateCategory = async (id,body)=>{
    // make a get http request to http://localhost:4000/history to get a video history from json server and return response to watch history  component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}
