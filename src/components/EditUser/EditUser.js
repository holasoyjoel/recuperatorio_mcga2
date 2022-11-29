import { useForm } from "react-hook-form";
import './EditUser.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useParams
  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk, postUserThunk, putUserThunk } from "../../store/reducers/thunk";
import { useEffect, useState } from "react";

const EditUser = () => {
    const {register, handleSubmit , setValue, watch, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    

    
    useEffect(()=>{
        dispatch(getUserThunk(1))
        // console.log(watch("apellido"))
    },[])
    const {user} = useSelector((state) => state)
    
    const usuarioDatos = user.usuarios[0];
    

    let apellido = (usuarioDatos)? usuarioDatos.apellido : "";
    let nombre = (usuarioDatos)? usuarioDatos.nombre : "";
    let fechaNacimiento = (usuarioDatos)? usuarioDatos.fechaNacimiento : "";
    let dni = (usuarioDatos)? usuarioDatos.dni : "";
    let edad = (usuarioDatos)? usuarioDatos.edad : "";
    let nacionalidad = (usuarioDatos)? usuarioDatos.nacionalidad : "";
    let email = (usuarioDatos)? usuarioDatos.email : "";
    let password = (usuarioDatos)? usuarioDatos.password : "";
    setValue("apellido" , apellido);
    setValue("nombre" , nombre);
    setValue("fechaNacimiento" , fechaNacimiento);
    setValue("dni" , dni);
    setValue("edad" , edad);
    setValue("nacionalidad" , nacionalidad);
    setValue("email" , email);
    setValue("password" , password);




    let { id } = useParams(); 
    const onSubmit = (data) =>{ 
        console.log(data)
        dispatch(putUserThunk(id ,data));
        setTimeout(()=>{
            window.location.replace("/users")
        }, 500)
    }

    return(
        <div className="nuevoUserContainer">
            <h3>Nuevo User Work</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div>
                    <label>
                        Apellido
                    </label>
                    <input placeholder="Ingresar Apellido" name="apellido" {...register("apellido")} required={true} />
                </div>

                <div>
                    <label>
                        Nombre
                    </label>
                    <input placeholder="Ingresar Nombre" name="nombre" {...register("nombre")} required={true} />
                </div>

                <div>
                    <label>
                        Fecha Nac.
                    </label>
                    <input placeholder="Ingresar Fecha Nacimiento" name="fechaNacimiento" {...register("fechaNacimiento")} required={true} />
                </div>
                
                <div>
                    <label>
                        Dni
                    </label>
                    <input placeholder="Ingresar Dni" name="dni" {...register("dni")} required={true} />
                </div>

                <div>
                    <label>
                        Edad
                    </label>
                    <input placeholder="Ingresar Edad" name="edad" {...register("edad")} required={true} />
                </div>
                
                <div>
                    <label>
                        Nacionalidad
                    </label>
                    <input placeholder="Ingresar Nacionalidad" name="nacionalidad" {...register("nacionalidad")} required={true} />
                </div>

                <div>
                    <label>
                        Email
                    </label>
                    <input placeholder="Ingresar Email" name="email" {...register("email")} required={true} />
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input placeholder="Ingresar Password" name="password" {...register("password")} required={true} />
                </div>

                <div>
                    <button className="btnAgregar" type="submit">
                            Agregar
                    </button>

                    <button className="btnCancelar">
                        <Link to="/users" className='link'>
                            Cancelar
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUser;