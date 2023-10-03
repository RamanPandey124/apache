import { useCallback, useEffect, useState } from "react"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import LineBar from "../extraComponents/LineBar"
import ReactEcharts from 'echarts-for-react'

const Overview = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const monthData = {
        months: [],
        totalSales: [],
        totalUnits: []
    }
    const [state, setState] = useState(true)
    const { overview } = useSelector((state) => state.auth)
    // console.log(overview)
    if (overview) {
        const [{ monthlyData }] = overview
        // console.log(monthlyData)
        let Month = []
        let sum = 0
        let sum2 = 0
        let Sale = []
        let Unit = []

        for (let val of monthlyData) {
            sum += val.totalSales
            sum2 += val.totalUnits
            Month.push(val.month)
            Sale.push(sum)
            Unit.push(sum2)
        }
        // console.log(Month, Sale, Unit)
        monthData.months = Month
        monthData.totalSales = Sale
        monthData.totalUnits = Unit
    }

    const graphType = useCallback((type) => {
        if (type === 'true') { setState(true) }
        else if (type === 'false') { setState(false) }
    })
    const option = {
        xAxis: {
            data: monthData.months
        },
        yAxis: {},

        series: [
            {
                data: state ? monthData.totalSales : monthData.totalUnits,
                type: 'line',
                smooth: true,
                label: {
                    show: true,
                    position: "bottom",
                    emphasis:{
                        textStyle:{color:'red',fontSize:'22px',fontWeight:"700"}
                    }
                }
            }
        ]
    };
    // console.log(monthData)
    useEffect(() => {
        dispatch(getOverview())
    }, [])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Overview</h3>
        <div className={`inputs`}>
            <LineBar func={graphType} val1={'Sales'} val2={'Units'} />
        </div>
        <div className={`charts`}>
            <ReactEcharts option={option} style={{ height: '80vh', width: '90%' }} />
        </div>
    </Layout>
}

export default Overview
