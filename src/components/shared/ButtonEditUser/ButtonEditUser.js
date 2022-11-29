import {
    Link
  } from "react-router-dom";
  import './ButtonEditUser.css'
const ButtonEditUser = ({value, urlRedirect})=>{
    return(
        <>
            <button className="btnEditarUsuario">
                <Link to={urlRedirect} className='link'>
                    {value}
                </Link>
            </button>
        </>
    )
}

export default ButtonEditUser;