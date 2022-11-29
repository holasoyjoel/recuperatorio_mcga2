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
import Inputs from "../shared/Inputs/Inputs";




const inputs = [
    {id:1 , label:"Apellido" , name:"apellido"},
    {id:2 , label:"Nombre" , name:"nombre"},
    {id:3 , label:"Fecha Nacimiento" , name: "fechaNacimiento"},
    {id:4 , label:"Dni" , name:"dni"},
    {id:5 , label:"Edad" , name:"edad"},
    {id:6 , label:"Nacionalidad" , name:"nacionalidad"},
    {id:7 , label:"Email" , name:"email"},
    {id:8 , label:"Password" , name:"password"}
]

const EditUser = () => {
    const {register, handleSubmit , setValue, watch, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    

    let { id } = useParams(); 
    useEffect(()=>{
        dispatch(getUserThunk(id))
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
                
                {
                    inputs.map(input=>{
                        return(
                            <div key={input.id}>
                                <label>{input.label}</label>
                                <Inputs key={input.id} placeholder={`Ingresar ${input.label}`} name={input.name} register={register} required/>
                            </div>
                        )
                    })
                }
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