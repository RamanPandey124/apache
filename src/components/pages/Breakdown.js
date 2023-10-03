import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import ReactEcharts from 'echarts-for-react'
import { useEffect } from "react"

const Breakdown = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const { overview } = useSelector((state) => state.auth)

    let dataValue = []
    let total = 0
    if (overview) {
        const [{ salesByCategory }] = overview
        for (let val of Object.entries(salesByCategory)) {
            dataValue.push({ name: val[0], value: val[1] })
            total += val[1]
        }
    }
    // console.log(dataValue)
    const option = {
        legend: {
            top: 'bottom',
            textStyle: {
                color: 'white',
            }
        },
        title: {
            text: `${total} $`,
            top: 'center',
            left: 'center',
            textStyle: {
                color: 'white'
            },
        },
        series: [
            {
                type: 'pie',
                data: dataValue,
                roseType: 'area',
                radius: ['20%', '90%']
            }
        ]
    };
    useEffect(() => {
        dispatch(getOverview())
    }, [])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Breakdown</h3>
        <ReactEcharts option={option} style={{ height: '85vh', width: '100%' }} />
    </Layout>
}

export default Breakdown
