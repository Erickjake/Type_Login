import  "./Button.css"

const Button = ({ onClick, children}:any) => {
    return(
            <button onClick={onClick} type="submit" color="gray" id="bu" >
                {children}
            </button> 

       
    )
}

export default Button