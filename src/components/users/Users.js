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
import ButtonDeleteUser from "../shared/ButtonDeleteUser/ButtonDeleteUser";
import ButtonEditUser from "../shared/ButtonEditUser/ButtonEditUser";
import ButtonNewUser from "../shared/ButtonNewUser/ButtonNewUser";

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
                                        {/* <button className="btnEditarUsuario">
                                            <Link to={`/editUser/${usuario.id}`} className='link'>
                                                Editar
                                            </Link>
                                        </button> */}
                                        <ButtonEditUser value={"Editar"} urlRedirect={`/editUser/${usuario.id}`}/>
                                    </td>
                                    <td>
                                        {/* <button className="btnEliminarUser" onClick={()=>dispatch(deleteUserThunk(usuario.id))}>Eliminar</button> */}
                                        <ButtonDeleteUser value={"Eliminar"} onClick={deleteUserThunk(usuario.id)}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                    {/* <button className="btnNuevoUsuario">
                        <Link to="/newUser" className='link'>
                        Nuevo Usuario
                        </Link>
                    </button> */}
                    <ButtonNewUser value={"Nuevo Usuario"} urlRedirect={"/newUser"}/>

        </div>
    )
}

export default Users;