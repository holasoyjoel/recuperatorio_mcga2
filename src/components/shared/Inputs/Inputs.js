

const Inputs = ({ name , placeholder ,  required , register})=>{
    return(
        <>
            <input name={name} placeholder={placeholder} {...register(name , {required})} />
        </>
    )
}

export default Inputs;