import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    navState : true
}
const NavbarSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{
        navDis:(state)=>{
            state.navState = !state.navState
        }
    }
})

const {navDis} = NavbarSlice.actions
export {navDis}
export default NavbarSlice