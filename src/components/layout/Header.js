import { BiAlignMiddle } from 'react-icons/bi'
import { useSelector,useDispatch } from 'react-redux'
import { navDis } from '../../redux/slices/NavbarSlice'

const Header = () => {
    const dispatch = useDispatch()
    const {navState} = useSelector((state) => state.navdis)
    return <>
        <div>
            <h1>ECHART</h1>
            <div className={`headerIcon ${navState && 'IconDisplay'}`} onClick={()=>dispatch(navDis())}>
                <BiAlignMiddle className='biIcon'/>
            </div>
        </div>
    </>
}

export default Header