import { useCallback, useEffect, useState } from "react"
import Button from "../extraComponents/Buttons"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../redux/actions/AuthActions"
import { RiStarSLine, RiStarSFill } from 'react-icons/ri'

const Products = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const { products } = useSelector((state) => state.auth)
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const obj = {
        limit: 9,
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
        dispatch(getProducts(obj))
    }, [page])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Products</h3>
        <div className={`product-cont`}>
            {products?.map((value) => {
                const fill = []
                const line = [<RiStarSLine key={1} />, <RiStarSLine key={2} />, <RiStarSLine key={3} />, <RiStarSLine key={4} />, <RiStarSLine key={5} />]
                for (let i = 0; i < Math.round(value.rating); i++) {
                    fill.push(<RiStarSFill key={i} />)
                    line.shift()
                }
                return <div key={value._id} className={`product-box ${colour2} ${colour10}`}>
                    <p>{value.category}</p>
                    <h2>{value.name}</h2>
                    <h3>{value.price}</h3>
                    <h4>{fill.map((val) => val)}{line.map((val) => val)}</h4>
                    <p>{value.description}</p>
                </div>
            })}
        </div>
        <Button func={propfunc} page={page} />
    </Layout>
}

export default Products
