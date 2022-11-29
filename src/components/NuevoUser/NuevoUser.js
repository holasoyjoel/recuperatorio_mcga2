import { useForm } from "react-hook-form";
import './NuevoUsuario.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUserThunk } from "../../store/reducers/thunk";
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


const NuevoUser = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) =>{  
        dispatch(postUserThunk(data));
        setTimeout(()=>{
            window.location.replace("/users")
        }, 500)
    }

    setValue("apellido" , "");
    setValue("nombre" , "");
    setValue("fechaNacimiento" , "");
    setValue("dni" , "");
    setValue("edad" , "");
    setValue("nacionalidad" , "");
    setValue("email" , "");
    setValue("password" , "");

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

export default NuevoUser;