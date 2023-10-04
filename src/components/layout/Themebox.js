import { MdCancel } from 'react-icons/md'
import { IoIosColorPalette } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navy, black, green, pink, yellow, red } from '../../redux/slices/ColourSlice'

const Themebox = () => {
    const [state, setState] = useState(true)
    const { colour1, colour2, colour3, colour4, colour5,
        colour6, colour7, colour8, colour9, colour10 } = useSelector((state) => state.Colour)
    
    const dispatch = useDispatch()
    return <>
        <div className='theme-cont'>{
            state ? <div>
                <AiFillSetting className='colorIcon' onClick={() => setState(false)} />
            </div> :
                <div className={`themebox ${colour1}`}>
                    <div className={`colorBox`}>
                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(navy());
                                localStorage.setItem('theme', '')
                            }}
                            className='colorIcon'
                            style={{ color: 'rgb(2, 2, 65)' }}
                        />

                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(black());
                                localStorage.setItem('theme', `{colour1:'bgBlack',colour2:'bgBlack2',colour3:'bgBlack3',colour4:'bgBlack4',colour5:'bgBlack5',colour6:'black6',colour7:'black7',colour8:'black8',colour9:'black9',colour10:'hover2'}`)
                            }}
                            className='colorIcon'
                            style={{ color: 'black' }}
                        />

                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(green());
                                localStorage.setItem('theme', `{}`)
                            }}
                            className='colorIcon'
                            style={{ color: 'green' }}
                        />

                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(pink());
                                localStorage.setItem('theme', `{}`)
                            }}
                            className='colorIcon'
                            style={{ color: 'rgb(99, 4, 62)' }}
                        />

                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(yellow());
                                localStorage.setItem('theme', `{}`)
                            }}
                            className='colorIcon'
                            style={{ color: 'rgb(236, 236, 10)' }}
                        />

                        <IoIosColorPalette
                            onClick={() => {
                                dispatch(red());
                                localStorage.setItem('theme', `{}`)
                            }}
                            className='colorIcon'
                            style={{ color: 'rgb(93, 5, 20)' }}
                        />

                    </div>
                    <div className='cancelBox'><MdCancel className='mdIcon2' onClick={() => setState(true)} /></div>
                </div>
        }
        </div>
    </>
}

export default Themebox