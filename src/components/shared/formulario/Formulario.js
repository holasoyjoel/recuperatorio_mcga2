import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import { putUserThunk } from "../../../store/reducers/thunk";

const Formulario = ()=>{
    const dispatch = useDispatch()
    const {id} = useParams();

    const usuarioNuevo = {
        nombre: "Oscar Mussio"
    }
    return(
        <>
            <h1>Editando usuario: {id}</h1>
            <button onClick={()=>dispatch(putUserThunk(id , usuarioNuevo))}>Aceptar</button>
            <Link to='/users' className='link'>cancelar</Link>
        </>
    )
}


export default Formulario;