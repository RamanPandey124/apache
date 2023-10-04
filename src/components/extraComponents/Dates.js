import { useSelector } from "react-redux"

function Dates(prop) {
    const { func,int,fin } = prop
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)

    return <>
        <div className={`dates-box`}>
            <input min={'2021-01-01'} max={'2021-12-31'} defaultValue={int} className={`btn ${colour3} datebtn`} name="intial" type='Date' onChange={(e) => func(e.target)} />
            <input min={'2021-01-01'} max={'2021-12-31'} defaultValue={fin} className={`btn ${colour3} datebtn`} name="final" type='Date' onChange={(e) => func(e.target)} />
        </div>
    </>
}

export default Dates