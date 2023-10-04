import { useCallback, useEffect, useState } from "react"
import Button from "../extraComponents/Buttons"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getCustomers } from "../../redux/actions/AuthActions"

const Customers = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const { customer } = useSelector((state) => state.auth)
    // console.log(customer)

    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const obj = {
        limit: 25,
        page
    }

    const propfunc = useCallback((type) => {
        if (type === 'prev' && page > 1) {
            setPage(page - 1)
        }
        else if (type === 'next' && page < 6) {
            setPage(page + 1)
        }
    })

    useEffect(() => {
        dispatch(getCustomers(obj))
    }, [page])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Customers</h3>
        <div className={`table-cont`}>
            <table className={` table`}>
                <thead>
                    <tr className={` ${colour3} trth`}>
                        <th className={`${colour7} th`}>SNo.</th>
                        <th className={`${colour7} th`}>Name</th>
                        <th className={`${colour7} th`}>Email</th>
                        <th className={`${colour7} th`}>phone</th>
                        <th className={`${colour7} th`}>Country</th>
                        <th className={`${colour7} th`}>occupation</th>
                    </tr>
                </thead>
                {customer?.map((value, index) => {
                    return <tbody key={value._id}>
                        <tr className={`${colour4}`}>
                            <td className="th">{index + 1 + (page - 1) * 25}</td>
                            <td className="th">{value.name}</td>
                            <td className="th">{value.email}</td>
                            <td className="th">{value.phoneNumber}</td>
                            <td className="th">{value.country}</td>
                            <td className="th">{value.occupation}</td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
        <Button func={propfunc} page={page} />
    </Layout>
}

export default Customers
