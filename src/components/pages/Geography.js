import Layout from "../layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import geoJson from '../../services/Worldmap.json'
import { useEffect, useState } from "react";
import { getGeography } from "../../redux/actions/AuthActions";
echarts.registerMap('World', geoJson);

const Geography = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const { geography } = useSelector((state) => state.auth)
    // console.log(geography)
    let arr3 = []

    if (geography && geography.length) {
        const arr = []
        for (let val of geography) {
            arr.push(val.country)
        }
        let arr2 = [arr[0]]

        for (let val of arr) {
            if (!arr2.includes(val)) {
                arr2.push(val)
            }

        }


        for (let i = 0; i < arr2.length; i++) {
            arr3.push({ name: arr2[i], value: 0 })
        }

        for (let val of arr) {
            arr3.map((it) => {
                if (val == it.name) {
                    it.value = it.value + 1
                }
            })
        }
    }

    const mapOption = {
        visualMap: {
            textStyle: {
                color: 'white'
            },
            left: '',
            top: "",
            min: 0,
            max: 60,
            inRange: {
                color: ['rgb(211, 59, 143)', 'rgb(131, 18, 230)', 'rgb(50, 18, 230)', 'rgb(18, 128, 230)', 'rgb(18, 230, 181)', 'rgb(230, 177, 18)', 'rgb(99, 230, 18)', '#f46d43', '#d73027', '#a50026']
            },
            text: ['High', 'Low'],
            calculable: true
        },

        series: [

            {
                id: 'population',
                type: 'map',
                roam: true,
                map: 'World',
                animationDurationUpdate: 1000,
                universalTransition: true,
                data: arr3
            }
        ]
    };


    useEffect(() => {
        dispatch(getGeography())
    }, [])


    return <Layout>
        <h3 className={`heading ${colour8}`}>Geography</h3>
        <ReactEcharts option={mapOption} style={{ height: '85vh', width: '99%',border:'2px solid' }} />
    </Layout>
}

export default Geography
