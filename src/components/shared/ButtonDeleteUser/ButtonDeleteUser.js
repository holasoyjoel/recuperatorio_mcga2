import { useDispatch } from "react-redux";
import "./ButtonDeleteUser.css"
const ButtonDeleteUser = ({value , onClick})=>{
    const dispatch = useDispatch();
    return(
        <>
            <button className="btnEliminarUser" onClick={()=>dispatch(onClick)}>
                {value}
            </button>
        </>
    )
}

export default ButtonDeleteUser;