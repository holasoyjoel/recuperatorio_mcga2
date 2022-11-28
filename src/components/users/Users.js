import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, getUsersThunk, getUserThunk, postUserThunk, putUserThunk } from "../../store/reducers/thunk";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const Users = ()=>{
    const {user} = useSelector((state) => state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsersThunk());
    } , [])

    return(
        <div>

            <h1>
                cantidad de usuarios: 
                {/* <button onClick={()=>dispatch(postUserThunk(nuevoUsuario))}>Nuevo Usuario</button> */}
            </h1>

            <table>
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Nombre</th>
                        <th>Fecha Nac.</th>
                        <th>Dni</th>
                        <th>Edad</th>
                        <th>Nacionalidad</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.usuarios.map(usuario=>{
                            return(
                                <tr key={usuario.id}>
                                    <td onClick={()=>dispatch(getUserThunk(usuario.id))}>{usuario.apellido}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.fechaNacimiento}</td>
                                    <td>{usuario.dni}</td>
                                    <td>{usuario.edad}</td>
                                    <td>{usuario.nacionalidad}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <Link to={`/editUser/${usuario.id}`} className='link'>
                                            Editar
                                            {/* <button onClick={()=>dispatch(putUserThunk(usuario.id , editarUsuario))}>Editar</button> */}
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={()=>dispatch(deleteUserThunk(usuario.id))}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <></>
                </tbody>
            </table>

        </div>
    )
}

export default Users;