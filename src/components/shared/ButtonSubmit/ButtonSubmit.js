
const ButtonSubmit = ({value , type})=>{
    return(
        <>
            <button type={type} className="btnAgregar">
                {value}
            </button>
        </>
    )
}

export default ButtonSubmit;