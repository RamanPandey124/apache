import Layout from "../layout/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { getOverview } from "../../redux/actions/AuthActions"
import LineBar from "../extraComponents/LineBar"
import ReactEcharts from 'echarts-for-react'
import { useCallback, useEffect, useState } from "react"
import Dates from "../extraComponents/Dates"
import API from "../../services/API"


const Performance = () => {
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const [dates, setDates] = useState({
        intial: '2021-12-01',
        final: '2021-12-31'
    })
    const [state, setState] = useState({
        date: [],
        data: []
    })
    const { date, data } = state

    async function getDates() {
        try {
            const { data } = await API.get('/Overview')
            const [{ dailyData }] = data

            const [firstDate] = dailyData.filter((val) => val.date === dates.intial)
            const [LastDate] = dailyData.filter((val) => val.date === dates.final)
            const indexA = dailyData.indexOf(firstDate)
            const indexZ = dailyData.indexOf(LastDate)

            const newData = dailyData.slice(indexA, indexZ + 1)
            const date = []
            const sale = [newData[0].totalSales]
            for (let i = 0; i < newData.length - 1; i++) {
                date.push(newData[i].date)
                sale.push(newData[i + 1].totalSales - newData[i].totalSales)
            }
            setState({
                date: date,
                data: sale,
            })
        } catch (error) {
            console.log(error)
        }
    }

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

    var help = [];
    var positive = [];
    var negative = [];
    for (var i = 0, sum = 0; i < data.length; ++i) {
        if (data[i] >= 0) {
            positive.push(data[i]);
            negative.push('-');
        } else {
            positive.push('-');
            negative.push(-data[i]);
        }

        if (i === 0) {
            help.push(0);
        } else {
            sum += data[i - 1];
            if (data[i] < 0) {
                help.push(sum + data[i]);
            } else {
                help.push(sum);
            }
        }
    }

    const option = {
        textStyle: { color: 'white' },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: date
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                stack: 'all',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: help
            },
            {
                name: 'positive',
                type: 'bar',
                stack: 'all',
                itemStyle: { color: 'green' },
                data: positive
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'all',
                data: negative,
                itemStyle: {
                    color: 'red'
                }
            }
        ]
    };


    useEffect(() => {
        getDates()
    }, [dateFunc])

    return <Layout>
        <h3 className={`heading ${colour8}`}>Performance</h3>
        <div className={`inputs`}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <Dates func={dateFunc} int={dates.intial} fin={dates.final} />
            </div>
        </div>
        <div className="charts">
            <ReactEcharts option={option} style={{ width: '90%', height: '80vh' }} />
        </div>
    </Layout>
}

export default Performance
