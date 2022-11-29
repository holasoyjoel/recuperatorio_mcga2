
// const initialState = {
//     count : 0
// }

import { createSlice } from "@reduxjs/toolkit"

export const userSlice =  createSlice({
    name:"users",
    initialState:{
        error:false,
        usuarios: []
    },
    reducers:{
        getUsers: (state , action)=>{   
            state.error = action.payload.error;
            state.usuarios = action.payload.usuarios;
        },
        getUser : (state, action)=>{
            state.error = action.payload.error;
            state.usuarios = action.payload.usuarios;
        },
        postUser : (state , action)=>{
            state.error = action.payload.error;
            state.usuarios.push(action.payload.usuarios)
        },
        putUser : (state,action)=>{
        },
        deleteUser : (state, action)=>{
        }
    }
})

export const {getUsers , getUser , postUser, putUser, deleteUser} = userSlice.actions;
