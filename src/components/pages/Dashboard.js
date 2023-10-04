import { useEffect } from "react"
import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import ReactEcharts from 'echarts-for-react'
import Transactions from "./Transactions"
import { getOverview, getTransaction } from "../../redux/actions/AuthActions"
import {AiFillMail} from 'react-icons/ai'


const Dashboard = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const { transactions, overview } = useSelector((state) => state.auth)
    const CatObj = []
    const Month = []
    const Sale = []
    let BoxData = {}

    if (overview) {
        const [{ totalCustomers, yearlySalesTotal, dailyData, monthlyData, salesByCategory }] = overview

        const Arr = Object.entries(salesByCategory)
        for (let i = 0; i < Arr.length; i++) {
            CatObj.push({ name: Arr[i][0], value: Arr[i][1] })
        }

        let sum = 0
        for (let val of monthlyData) {
            Month.push(val.month)
            sum += val.totalSales
            Sale.push(sum)
        }

        const monthSale = monthlyData[monthlyData.length - 2].totalSales
        // console.log(monthSale)
        const monthPercentage = Math.round((monthlyData[monthlyData.length - 5].totalSales) * 100 / monthSale - 100)
        // console.log(monthPercentage)
        const dailySale = dailyData[dailyData.length - 1].totalSales
        const dailyPercentage = Math.round(dailySale * 100 / dailyData[dailyData.length - 2].totalSales - 100)
        // console.log(dailySale, dailyPercentage)

        const AllData = {totalCustomers,yearlySalesTotal,monthSale,monthPercentage,dailySale,dailyPercentage}
        BoxData = AllData
    }
    // console.log(BoxData)
    const PieOption = {
        legend: {
            top: 'bottom',
            textStyle: {
                color: 'white',
            }
        },
        series: [

            {
                type: 'pie',
                data: CatObj
            }
        ]
    };
    const LineOption = {
        textStyle: { color: 'white' },
        xAxis: { type: 'category', data: Month },
        yAxis: {},
        series: [

            {
                type: 'line',
                data: Sale,
                areaStyle: {}
            }
        ]
    };

    useEffect(() => {
        dispatch(getTransaction({ limit: 20, page: 1 }))
        dispatch(getOverview())
    }, [])

    return <Layout>
        <div className={`dashboard-cont`}>
            <div className={`numberbox`}>
                <div className={`numbox1 ${colour4} ${colour10} overflow`}>
                    <h2>Total Customers</h2>
                    <p className={`${colour8}`}>{BoxData.totalCustomers}</p>
                </div>
                <div className={`numbox2 ${colour4} ${colour10} overflow`}>
                    <h2>Sales Today</h2>
                    <p className={`${colour8}`}>{BoxData.dailySale}</p>
                    <span>{BoxData.dailyPercentage}% Since last Day</span>
                </div>
                <div className={`numbox3 ${colour4} ${colour10} overflow`}>
                    <h2>Monthly Sales</h2>
                    <p className={`${colour8}`}>{BoxData.monthSale}</p>
                    <span >{BoxData.monthPercentage}% Since last month</span>
                </div>
                <div className={`numbox4 ${colour4} ${colour10} overflow`}>
                    <h2>Yearly Sales</h2>
                    <p className={`${colour8}`}>{BoxData.totalCustomers}</p>
                </div>
            </div>
            <div className={`areabox ${colour4} ${colour10} overflow`}>
                <ReactEcharts option={LineOption} style={{ height: '100%' }} />
            </div>
            <div className={`transactionbox ${colour3} table-cont `}>
                <table className={`table`}>
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
                                <td className="th">{index + 1 + (1 - 1) * 50}</td>
                                <td className="th">{value.userId}</td>
                                <td className="th">{value.cost}</td>
                                <td className="th">{value.products.length}</td>
                                <td className="th">{value.createdAt}</td>
                            </tr>
                        </tbody>
                    })}
                </table>
            </div>
            <div className={`piebox ${colour4} ${colour10}`}>
                <ReactEcharts option={PieOption} style={{ height: '98%' }} />
            </div>
        </div>
    </Layout>
}

export default Dashboard
