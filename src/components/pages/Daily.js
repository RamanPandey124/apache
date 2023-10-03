import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import LineBar from "../extraComponents/LineBar"
import ReactEcharts from 'echarts-for-react'
import { useCallback, useEffect, useState } from "react"
import Dates from "../extraComponents/Dates"
import API from "../../services/API"

const Daily = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        date: [],
        totalSales: [],
        totalUnits: []
    })

    async function getdaily() {
        const { data } = await API.get('/Overview')
        const [{ dailyData }] = data

        const [firstDate] = dailyData.filter((val) => val.date === '2021-03-11')
        const [LastDate] = dailyData.filter((val) => val.date === '2021-03-31')
        const indexA = dailyData.indexOf(firstDate)
        const indexZ = dailyData.indexOf(LastDate)

        const newData = dailyData.slice(indexA, indexZ + 1)
        const date = []
        const sale = []
        const unit = []
        for (let val of newData) {
            date.push(val.date)
            sale.push(val.totalSales)
            unit.push(val.totalUnits)
        }
        setState({
            date: date,
            totalSales: sale,
            totalUnits: unit
        })
    }
    // console.log(state)

    const typeFunc = useCallback((type) => {
        console.log(type)
    })

    const option = {
        xAxis: {
            data: state.date
        },
        yAxis: {},

        series: [
            {
                data: state.totalUnits,
                type: 'line',
                stack:'x',
                smooth:true,
                itemStyle:{
                    color:'red'
                }
           },
            {
                data: state.totalUnits,
                type: 'line',
                stack:'x',
                smooth:true
           }
        ]
    };

    useEffect(() => {
        getdaily()
    }, [])
    return <Layout>
        <div className={`inputs`}>
            <LineBar val1={'Line'} val2={'Bar'} func={typeFunc} />
            <Dates />
        </div>
        <div>
            <ReactEcharts option={option} />
        </div>
    </Layout>
}

export default Daily
