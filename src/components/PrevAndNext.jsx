/* eslint-disable react/prop-types */
const PrevAndNext = ({prev,next,text,})=>{
    return(
        <div className="prevnext-container">
            <button onClick={prev} className="prev-B">Go Back</button>
            <button onClick={next} className="next-B">{text}</button>
        </div>
    )
}


export default PrevAndNext