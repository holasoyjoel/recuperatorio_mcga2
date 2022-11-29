import { deleteUser, getUser, getUsers, postUser, putUser } from "./Users";


export const getUsersThunk = ()=>{
    return async(dispatch , getState)=>{
        const resp = await fetch("http://localhost:3001/users");
        const data = await resp.json();
        dispatch(getUsers({
            error: data.error,
            usuarios: data.usuarios
        }))
    }
};


export const getUserThunk = (id)=>{
    return async(dispatch,getState)=>{
        const resp = await fetch(`http://localhost:3001/users/user/${id}`);
        const data = await resp.json();
        dispatch(getUser({
            error: data.error,
            usuarios:data.usuarios
        }))
    }
}

export const postUserThunk = (body)=>{
    console.log("body" , body)
    return async(dispatch)=>{
        const configPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }

        const resp = await fetch("http://localhost:3001/users/user" , configPost )
        const data = await resp.json();
        dispatch(postUser({
            error: data.error,
            usuarios: data.usuarios
        }))
    }
}

export const putUserThunk = (id,body)=>{
    return async(dispatch)=>{
        const configPost = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }

        const resp = await fetch(`http://localhost:3001/users/user/${id}` , configPost )
        const data = await resp.json();
        dispatch(putUser())
        window.location.replace("/users")
    }
}

export const deleteUserThunk = (id)=>{
    console.log("eliminado usuario:" , id)
    return async(dispatch)=>{
        const configDelete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const resp = await fetch(`http://localhost:3001/users/user/${id}` , configDelete)
        const data = await resp.json();
        console.log("data delete" , data)
        dispatch(deleteUser());
        dispatch(getUsersThunk());
        
    }
}