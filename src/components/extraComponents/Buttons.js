import { useSelector } from "react-redux"
import { memo } from "react"

function Button(prop) {
    const {func,page} = prop
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    
    return <>
    <div className="button-cont">
        <div className={`btn ${colour5} ${colour10}`} onClick={()=>func('prev')}>PREV</div>
        <div className={``}>Page : {page} </div>
        <div className={`btn ${colour5} ${colour10}`} onClick={()=>func('next')}>NEXT</div>
    </div>
    </>
}

export default memo(Button)