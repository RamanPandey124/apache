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

const Slider = () => {
    const dispatch = useDispatch()
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const { navState } = useSelector((state) => state.navdis)
    return <>
        <div className={`slider ${colour2} ${navState && 'sliderDisplay'}`}>
            <MdCancel className='mdIcon' onClick={() => dispatch(navDis())} />

            <div className={`slider-cont`}>
                <div className={`slider-box1 `}>
                    <Link to={'/'} className={`${colour8} ${colour10}`}>
                        <BiSolidDashboard />Dashboard
                    </Link>
                </div>

                <div className={`slider-box2 `}>
                    <p className={`${colour9}`}>Client Facing</p>
                    <Link to={'/Products'} className={`${colour8} ${colour10}`}>
                        <AiFillShopping />Products
                    </Link>
                    <Link to={'/Customers'} className={`${colour8} ${colour10}`}>
                        <AiOutlineUserAdd />Customers
                    </Link>
                    <Link to={'/Transactions'} className={`${colour8} ${colour10}`}>
                        <AiFillMoneyCollect />Transactions
                    </Link>
                    <Link to={'/Geography'} className={`${colour8} ${colour10}`}>
                        <FiMapPin />Geography
                    </Link>
                </div>

                <div className={`slider-box2 `}>
                    <p className={`${colour9}`}>Sales</p>
                    <Link to={'/Overview'} className={`${colour8} ${colour10}`}>
                        <AiOutlineAreaChart />Overview
                    </Link>
                    <Link to={'/Daily'} className={`${colour8} ${colour10}`}>
                        <AiOutlineBarChart />Daily
                    </Link>
                    <Link to={'/Monthly'} className={`${colour8} ${colour10}`}>
                        <BsFillBarChartFill />Monthly
                    </Link>
                    <Link to={'/Breakdown'} className={`${colour8} ${colour10}`}>
                        <AiFillPieChart />Breakdown
                    </Link>
                </div>

                <div className={`slider-box3 `}>
                    <p className={`${colour9}`}>Management</p>
                    <Link to={'/Admin'} className={`${colour8} ${colour10}`}>
                        <RiAdminFill />Admin
                    </Link>
                    <Link to={'/Performance'} className={`${colour8} ${colour10}`}>
                        <CgPerformance />Performance
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Slider