import { MdCancel } from 'react-icons/md'
import { IoIosColorPalette } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { navy,black,green,pink,yellow,red } from '../../redux/slices/ColourSlice'

const Themebox = () => {
    const [state, setState] = useState(true)
    const dispatch = useDispatch()

    return <>
        <div className='theme-cont'>{
            state ? <div>
                <AiFillSetting className='colorIcon' onClick={() => setState(false)} />
            </div> :
                <div className={`themebox `}>
                    <div className={`colorBox`}>
                        <IoIosColorPalette onClick={()=>dispatch(navy())} className='colorIcon' style={{color:'navy'}}/>
                        <IoIosColorPalette onClick={()=>dispatch(black())} className='colorIcon' style={{color:'black'}}/>
                        <IoIosColorPalette onClick={()=>dispatch(green())} className='colorIcon' style={{color:'green'}}/>
                        <IoIosColorPalette onClick={()=>dispatch(pink())} className='colorIcon' style={{color:'rgb(99, 4, 62)'}}/>
                        <IoIosColorPalette onClick={()=>dispatch(yellow())} className='colorIcon' style={{color:'rgb(236, 236, 10)'}}/>
                        <IoIosColorPalette onClick={()=>dispatch(red())} className='colorIcon' style={{color:'rgb(239, 12, 50)'}}/>
                    </div>
                    <div className='cancelBox'><MdCancel className='mdIcon2' onClick={() => setState(true)} /></div>
                </div>
        }
        </div>
    </>
}

export default Themebox