import { useCallback, useEffect, useState } from "react"
import Button from "../extraComponents/Buttons"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getTransaction } from "../../redux/actions/AuthActions"


const Transactions = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const { transactions } = useSelector((state) => state.auth)

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
        else if (type === 'next' && page < 10) {
            setPage(page + 1)
        }
    })

    useEffect(() => {
        dispatch(getTransaction(obj))
    }, [page])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Transactions</h3>
        <div className={`table-cont`}>
            <table className={` table`}>
                <thead>
                    <tr className={` ${colour3} trth`}>
                        <th className={`${colour7} th`}>SNo.</th>
                        <th className={`${colour7} th`}>UserId</th>
                        <th className={`${colour7} th`}>Cost</th>
                        <th className={`${colour7} th`}>No Of Products</th>
                        <th className={`${colour7} th`}>CreatedAt</th>
                    </tr>
                </thead>
                {transactions?.map((value, index) => {
                    return <tbody key={value._id} >
                        <tr className={`${colour4}`}>
                            <td className="th">{index + 1 + (page - 1) * 50}</td>
                            <td className="th">{value.userId}</td>
                            <td className="th">{value.cost}</td>
                            <td className="th">{value.products.length}</td>
                            <td className="th">{value.createdAt}</td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
        <Button func={propfunc} page={page} />
    </Layout>
}

export default Transactions
