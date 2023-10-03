import { useSelector } from "react-redux"

function LineBar(prop) {
    const { func, val1, val2 } = prop
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)

    return <>
        <select className={`btn ${colour3}`} onChange={(e) => func(e.target.value)}>
            <option defaultChecked value={true}>{val1}</option>
            <option value={false}>{val2}</option>
        </select>
    </>
}

export default LineBar