import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import LineBar from "../extraComponents/LineBar"
import ReactEcharts from 'echarts-for-react'
import { useCallback, useEffect, useState } from "react"
import Dates from "../extraComponents/Dates"
import API from "../../services/API"

const Daily = () => {
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)

    const dispatch = useDispatch()
    const [state, setState] = useState({
        date: [],
        totalSales: [],
        totalUnits: []
    })
    const [dates, setDates] = useState({
        intial: '2021-08-15',
        final: '2021-09-02'
    })
    const [chartType, setType] = useState(true)

    async function getdaily() {
        try {
            const { data } = await API.get('/Overview')
            const [{ dailyData }] = data

            const [firstDate] = dailyData.filter((val) => val.date === dates.intial)
            const [LastDate] = dailyData.filter((val) => val.date === dates.final)
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
        } catch (error) {
            console.log(error)
        }
    }

    const typeFunc = useCallback((type) => {
        if (type === 'true') { setType(true) }
        else if (type === 'false') { setType(false) }
    })

    const dateFunc = useCallback((dat) => {
        const { name, value } = dat
        console.log(name, value)
        if (name === 'intial') {
            setDates({
                intial: value,
                final: dates.final
            })
        }
        else if (name === 'final') {
            setDates({
                intial: dates.intial,
                final: value
            })
        }
    })

    const option = {
        legend: {
            top: 'bottom',
            textStyle: {
                color: "white"
            }
        },
        xAxis: {
            data: state.date
        },
        yAxis: {},
        textStyle: {
            color: 'white'
        },
        series: [
            {
                name: 'Unit',
                data: state.totalUnits,
                type: chartType ? 'line' : 'bar',
                stack: 'x',
                smooth: true,
                itemStyle: {
                    color: 'red'
                }
            },
            {
                name: 'Sales',
                data: state.totalSales,
                type: chartType ? 'line' : 'bar',
                stack: 'x',
                smooth: true
            }
        ]
    };

    useEffect(() => {
        getdaily()
    }, [typeFunc])


    return <Layout>
        <h3 className={`heading ${colour8}`}>Daily</h3>

        <div className={`inputs`}>
            <div><LineBar val1={'Line'} val2={'Bar'} func={typeFunc} /></div>
            <Dates func={dateFunc} int={dates.intial} fin={dates.final} />
        </div>
        <div className="charts">
            <ReactEcharts option={option} style={{ height: '80vh', width: '90%' }} />
        </div>
    </Layout>
}

export default Daily
