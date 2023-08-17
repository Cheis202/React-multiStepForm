/* eslint-disable react/prop-types */
const Addon = ({addonInfo,addonPrice})=>{

    return(
        <div className="addon">
            <p className="addonInfo">{addonInfo}</p>
            <h3 className="addonPrice">{addonPrice}</h3>
        </div>
    )
}

export default Addon