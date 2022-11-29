import './ButtonNewUser.css'
import {
   
    Link
  } from "react-router-dom";
const ButtonNewUser = ({value, urlRedirect})=>{
    return(
        <>
            <button className="btnNuevoUsuario">
                <Link to={urlRedirect} className='link'>
                    {value}
                </Link>
            </button>
        </>
    )
}

export default ButtonNewUser;