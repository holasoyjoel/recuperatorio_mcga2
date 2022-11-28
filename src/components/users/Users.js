import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/reducers/Users";


const Users = ()=>{
    const {user} = useSelector((state) => state)
    const dispatch = useDispatch();

    console.log(user)

    return(
        <>
            <h1>
                Users Works!! {user.cant}
            </h1>

           <button onClick={()=> dispatch(getUsers())}>Traer Datos</button>
        </>
    )
}

export default Users;