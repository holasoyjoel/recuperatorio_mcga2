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

const NuevoUser = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) =>{  
        dispatch(postUserThunk(data));
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
                    <input placeholder="Ingresar Apellido" name="apellido" {...register("apellido")} required={true}/>
                </div>

                <div>
                    <label>
                        Nombre
                    </label>
                    <input placeholder="Ingresar Nombre" name="nombre" {...register("nombre")} required={true}/>
                </div>

                <div>
                    <label>
                        Fecha Nac.
                    </label>
                    <input placeholder="Ingresar Fecha Nacimiento" name="fechaNacimiento" {...register("fechaNacimiento")} required={true}/>
                </div>
                
                <div>
                    <label>
                        Dni
                    </label>
                    <input placeholder="Ingresar Dni" name="dni" {...register("dni")} required={true}/>
                </div>

                <div>
                    <label>
                        Edad
                    </label>
                    <input placeholder="Ingresar Edad" name="edad" {...register("edad")} required={true}/>
                </div>
                
                <div>
                    <label>
                        Nacionalidad
                    </label>
                    <input placeholder="Ingresar Nacionalidad" name="nacionalidad" {...register("nacionalidad")} required={true}/>
                </div>

                <div>
                    <label>
                        Email
                    </label>
                    <input placeholder="Ingresar Email" name="email" {...register("email")} required={true}/>
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input placeholder="Ingresar Password" name="password" {...register("password")} required={true}/>
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

export default NuevoUser;