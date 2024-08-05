
// import dotenv from 'dotenv'
// dotenv.config()
import {commonApi} from './commonApi';

// const serverUrl = process.env.Server
const serverUrl = "http://localhost:4000"


//register

export const registerUserApi = async(reqBody) =>{
    return await commonApi("POST",`${serverUrl}/register`,reqBody,"")
}

//get users

export const getUsersApi = async()=>{
    return await commonApi("GET",`${serverUrl}/users`,"","")
}