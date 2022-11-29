

const Inputs = ({defaultValue , name , placeholder ,  required})=>{
    return(
        <>
            <input value={defaultValue} name={name} placeholder={placeholder} {...register(name , {required})} />
        </>
    )
}

export default Inputs;