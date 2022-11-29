import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, getUsersThunk, getUserThunk, postUserThunk, putUserThunk } from "../../store/reducers/thunk";
import './User.css'
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
        <div className="userContainer">

            <h3>
                cantidad de usuarios: {user.usuarios.length}
                {/* <button onClick={()=>dispatch(postUserThunk(nuevoUsuario))}>Nuevo Usuario</button> */}
            </h3>
            

            <table className="tableUser">
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
                                    {/* <td onClick={()=>dispatch(getUserThunk(usuario.id))}>{usuario.apellido}</td> */}
                                    <td>{usuario.apellido}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.fechaNacimiento}</td>
                                    <td>{usuario.dni}</td>
                                    <td>{usuario.edad}</td>
                                    <td>{usuario.nacionalidad}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <button className="btnEditarUsuario">
                                            <Link to={`/editUser/${usuario.id}`} className='link'>
                                                Editar
                                            {/* <button onClick={()=>dispatch(putUserThunk(usuario.id , editarUsuario))}>Editar</button> */}
                                            </Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btnEliminarUser" onClick={()=>dispatch(deleteUserThunk(usuario.id))}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                <Link to="/newUser" className='link'>
                    <button className="btnNuevoUsuario">
                        Nuevo Usuario
                    </button>
                </Link>
        </div>
    )
}

export default Users;