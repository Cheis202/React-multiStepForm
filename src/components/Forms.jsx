/* eslint-disable react/prop-types */
const Forms = ({type,text,example}) => { 


    return(
        <>
            <form className="input">
                <label>{text}</label>
                <input type={type} placeholder={example} required />
            </form>
        </>

    )

}


export default Forms