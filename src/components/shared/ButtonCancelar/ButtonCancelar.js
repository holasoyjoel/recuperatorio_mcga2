import {
    Link,
} from "react-router-dom";
const ButtonCancelar = ({value , urlRedirect})=>{
    return(
        <>
            <button className="btnCancelar">
                <Link to={`${urlRedirect}`} className='link'>
                    {value}
                </Link>
            </button>
        </>
    )
}

export default ButtonCancelar;