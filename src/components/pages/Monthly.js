import { useCallback, useEffect, useState } from "react"
import LineBar from "../extraComponents/LineBar"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import ReactEcharts from 'echarts-for-react'

const Monthly = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState(true)
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const monthData = {
        months: [],
        totalSales: [],
        totalUnits: []
    }
    const { overview } = useSelector((state) => state.auth)
    // console.log(overview)
    if (overview && overview.length) {
        const [{ monthlyData }] = overview
        // console.log(monthlyData)
        let month = []
        let Sale = []
        let Unit = []
        for (let val of monthlyData) {
            month.push(val.month)
            Sale.push(val.totalSales)
            Unit.push(val.totalUnits)
        }
        monthData.months = month
        monthData.totalSales = Sale
        monthData.totalUnits = Unit
    }

    const typeFunc = useCallback((type) => {
        if (type === 'true') { setState(true) }
        else if (type === 'false') { setState(false) }
    })

    const option = {
        legend: {
            left:'center',
            top:'bottom',
            textStyle:{
                color:'white'
            }
        },
        textStyle:{
            color:'white'
        },
        xAxis: {
            data: monthData.months
        },
        yAxis: {},

        series: [
            {
                name:'Units',
                data: monthData.totalUnits,
                type: state ? 'bar' : 'line',
                stack: 'x',
                itemStyle: {
                    color: 'gray'
                }
            },
            {
                name:"Sales",
                data: monthData.totalSales,
                type: state ? 'bar' : 'line',
                stack: state ? 'x' : 'y',
                itemStyle: {
                    color: 'red'
                }
            },
        ]
    };

    useEffect(() => {
        dispatch(getOverview())
    }, [])
    return <Layout>
        <h3 className={`heading ${colour8}`}>Monthly</h3>
        <div className={`inputs`}>
            <LineBar val1={'Bar'} val2={'Line'} func={typeFunc} />
        </div>
        <div className={`charts`}>
            <ReactEcharts option={option} style={{ height: '80vh', width: '90%' }} />
        </div>
    </Layout>
}

export default Monthly
