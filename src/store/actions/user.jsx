import axios from "../../utils/axios"

import {isLoading,isLoadingAuth,createUserSuccess,loginUserSuccess,isError,isErrorAuth,userLogoutSuccess} from "../reducers/userSlice"

export const createUser = (info)=>async(dispatch)=>{
    dispatch(isLoadingAuth())
    try {
        const {data} = await axios.post("/user/signup",info);
        dispatch(createUserSuccess(data))
    } catch (error) {    
        dispatch(isErrorAuth(error.response.data))
    }
}
export const loginUser = (info)=>async(dispatch)=>{
    dispatch(isLoadingAuth())

    try {
        const {data} = await axios.post("/user/signin",info);
        dispatch(loginUserSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(isErrorAuth(error.response.data))
    }
}
export const isUser = ()=>async(dispatch)=>{
    dispatch(isLoadingAuth())
    try {
        const {data} = await axios.get("/user/user");
        console.log(data);
        
        dispatch(loginUserSuccess(data))
    } catch (error) {
        dispatch(isErrorAuth(error.response.data))
    }
}

export const logoutUser = ()=>async(dispatch)=>{
    dispatch(isLoadingAuth())
    try {
        await axios.get("/user/logout");
        dispatch(userLogoutSuccess())
    } catch (error) {
        dispatch(isErrorAuth(error.response.data))
    }
}