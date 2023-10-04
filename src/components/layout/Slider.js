import { MdCancel } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiSolidDashboard } from 'react-icons/bi'
import { BsFillBarChartFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { FiMapPin } from 'react-icons/fi'
import { CgPerformance } from 'react-icons/cg'
import { AiFillShopping, AiOutlineUserAdd, AiFillMoneyCollect, AiOutlineAreaChart, AiFillPieChart, AiOutlineBarChart } from 'react-icons/ai'
import { navDis } from '../../redux/slices/NavbarSlice'
import { change1, change2, change3, change4, change5, change6, change7, change8, change9, change10, change11 } from '../../redux/slices/ActiveSlice'

const Slider = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10, colour11 } = useSelector((state) => state.Colour)
    const { navState } = useSelector((state) => state.navdis)
    const { state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11 } = useSelector((state) => state.ActiveClass)



    return <>
        <div className={`slider ${colour2} ${navState && 'sliderDisplay'}`}>
            <MdCancel className='mdIcon' onClick={() => dispatch(navDis())} />

            <div className={`slider-cont`}>
                <div className={`slider-box1 `}>
                    <Link to={'/'} className={`${colour8} ${colour10} ${state1 &&  `${colour11}`}`} onClick={(e)=>dispatch(change1())}>
                        <BiSolidDashboard />Dashboard
                    </Link>
                </div>

                <div className={`slider-box2 `}>
                    <p className={`${colour9}`}>Client Facing</p>
                    <Link to={'/Products'} className={`${colour8} ${colour10} ${state2 &&  `${colour11}`}`} onClick={(e)=>dispatch(change2())}>
                        <AiFillShopping />Products
                    </Link>
                    <Link to={'/Customers'} className={`${colour8} ${colour10} ${state3 &&  `${colour11}`}`} onClick={(e)=>dispatch(change3())}>
                        <AiOutlineUserAdd />Customers
                    </Link>
                    <Link to={'/Transactions'} className={`${colour8} ${colour10} ${state4 &&  `${colour11}`}`} onClick={(e)=>dispatch(change4())}>
                        <AiFillMoneyCollect />Transactions
                    </Link>
                    <Link to={'/Geography'} className={`${colour8} ${colour10} ${state5 &&  `${colour11}`}`} onClick={(e)=>dispatch(change5())}>
                        <FiMapPin />Geography
                    </Link>
                </div>

                <div className={`slider-box2 `}>
                    <p className={`${colour9}`}>Sales</p>
                    <Link to={'/Overview'} className={`${colour8} ${colour10} ${state6 &&  `${colour11}`}`} onClick={(e)=>dispatch(change6())}>
                        <AiOutlineAreaChart />Overview
                    </Link>
                    <Link to={'/Daily'} className={`${colour8} ${colour10} ${state7 &&  `${colour11}`}`} onClick={(e)=>dispatch(change7())}>
                        <AiOutlineBarChart />Daily
                    </Link>
                    <Link to={'/Monthly'} className={`${colour8} ${colour10} ${state8 &&  `${colour11}`}`} onClick={(e)=>dispatch(change8())}>
                        <BsFillBarChartFill />Monthly
                    </Link>
                    <Link to={'/Breakdown'} className={`${colour8} ${colour10} ${state9 &&  `${colour11}`}`} onClick={(e)=>dispatch(change9())}>
                        <AiFillPieChart />Breakdown
                    </Link>
                </div>

                <div className={`slider-box3 `}>
                    <p className={`${colour9}`}>Management</p>
                    <Link to={'/Admin'} className={`${colour8} ${colour10} ${state10 &&  `${colour11}`}`} onClick={(e)=>dispatch(change10())}>
                        <RiAdminFill />Admin
                    </Link>
                    <Link to={'/Performance'} className={`${colour8} ${colour10} ${state11 &&  `${colour11}`}`} onClick={(e)=>dispatch(change11())}>
                        <CgPerformance />Performance
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Slider