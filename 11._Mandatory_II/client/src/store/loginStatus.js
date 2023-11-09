import { BASE_URL } from "./global.js";
import { writable } from 'svelte/store';

//Writable isLoggedIn variable
export const isLoggedIn = writable(false);

//the function that is called by handleLogin in Login
export async function updateLoginStatus(){
    const loginStatus = await loginStatusCheck();
    isLoggedIn.set(loginStatus)
}

// Backend login status check 
async function loginStatusCheck (){
    const response = await fetch(BASE_URL + "/auth/guard", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
    
    if(response.status === 200) {
        return true;
    } else {
        console.log(response.body);
        return false;
    }
}