import { useCallback, useEffect, useState } from "react"
import Button from "../extraComponents/Buttons"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getAdmin } from "../../redux/actions/AuthActions"

const Admin =()=>{
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const { admin } = useSelector((state) => state.auth)
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const obj = {
        limit: 50,
        page
    }

    const propfunc = useCallback((type) => {
        if (type === 'prev' && page > 1) {
            setPage(page - 1)
        }
        else if (type === 'next' && page < 4) {
            setPage(page + 1)
        }
    })

    useEffect(() => {
        dispatch(getAdmin(obj))
    }, [page])
    return <Layout>
    <h3 className={`heading ${colour8}`}>Admin</h3>
    <div className={`table-cont`}>
        <table className={` table`}>
            <thead>
                <tr className={` ${colour3} trth`}>
                    <th className={`${colour7} th`}>SNo.</th>
                    <th className={`${colour7} th`}>Name</th>
                    <th className={`${colour7} th`}>Email</th>
                    <th className={`${colour7} th`}>Role</th>
                    <th className={`${colour7} th`}>country</th>
                    <th className={`${colour7} th`}>Number</th>
                    <th className={`${colour7} th`}>Occupation</th>
                </tr>
            </thead>
            {admin?.map((value, index) => {
                return <tbody key={value._id} >
                    <tr className={`${colour4}`}>
                        <td className="th">{index + 1 + (page - 1) * 50}</td>
                        <td className="th">{value.name}</td>
                        <td className="th">{value.email}</td>
                        <td className="th">{value.role}</td>
                        <td className="th">{value.country}</td>
                        <td className="th">{value.phoneNumber}</td>
                        <td className="th">{value.occupation}</td>
                    </tr>
                </tbody>
            })}
        </table>
    </div>
    <Button func={propfunc} page={page} />
</Layout>
}

export default Admin
