import Header from "./Header"
import Slider from "./Slider"
import Spinner from "./Spinner"
import { useSelector } from "react-redux"
import Themebox from "./Themebox"

const Layout = ({ children }) => {
    const { navState } = useSelector((state) => state.navdis)
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    const loading = false
    return <>
        <div className={`Layout-cont ${colour1} ${colour6}`}>
            <div className={`header`}><Header /></div>
            <div className={'Layout-box'}>
                <div><Themebox /></div>
                <div className={``}><Slider /></div>
                <div className={`children ${navState && 'childwidth'}`}>
                    {loading ? <Spinner /> :

                        <div>{children}</div>

                    }
                </div>
            </div>
        </div>
    </>
}

export default Layout