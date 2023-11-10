import { BASE_URL } from "./global.js";
import { writable } from 'svelte/store';

//Writable isAdminStatus variable
export const isAdmin = writable(false);

//the function that is called by handleLogin in Login
export async function updateAdminStatus(){
    const adminStatus = await adminStatusCheck();
    isAdmin.set(adminStatus);
}

// Backend login status check 
async function adminStatusCheck (){
    const response = await fetch(BASE_URL + "/auth/admin", {
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