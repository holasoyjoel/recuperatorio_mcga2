
// const initialState = {
//     count : 0
// }

import { createSlice } from "@reduxjs/toolkit"

export const userSlice =  createSlice({
    name:"users",
    initialState:{
        error:false,
        cant: 0,
        usuarios: []
    },
    reducers:{
        getUsers: async(state)=>{

            const resp = await fetch("http://localhost:3001/users")
            const data = await resp.json();
            console.log("data",data)
            
            state.error = data.error;
            state.cant = data.cant;
            state.usuarios = data.usuarios;
        
        }
    }
})

export const {getUsers} = userSlice.actions;
