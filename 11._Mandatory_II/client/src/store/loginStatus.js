import { BASE_URL } from "./global.js";
import { writable } from 'svelte/store';
import { getRequest } from "../store/fetchStore.js";

//Writable isLoggedIn variable
export const isLoggedIn = writable(false);

//The function that is called by handleLogin in Login.
export async function updateLoginStatus(){
    console.log("updatelogin hit")
    console.log(await loginStatusCheck());
    const loginStatus = await loginStatusCheck();
    console.log(loginStatus);
    isLoggedIn.set(loginStatus)
}

// Backend login status check 
async function loginStatusCheck (){
    try {
        console.log("statuscheck hit")
        const response = await getRequest("/api/auth/login/guard")
       console.log("fetchedLoginStatus:", response)
        /* const response = await fetch(BASE_URL + "/api/auth/login/guard", {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }); */
     
        if(response === 200) {
            return true;
        } else {
            console.log("Response:", response);
            return false;
        }
    } catch (error){
        throw new Error(`Status check error. Status: ${error}`);
    }
}