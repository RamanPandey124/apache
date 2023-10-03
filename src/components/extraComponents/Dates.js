import { useSelector } from "react-redux"

function Dates(){
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    
    return <>
    <div>
        <input className={`btn ${colour3}`} type='Date'/>
        <input className={`btn ${colour3}`} type='Date'/>
    </div>
    </>
}

export default Dates