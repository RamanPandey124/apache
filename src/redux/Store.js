import {configureStore} from "@reduxjs/toolkit"
import ColourSlice from "./slices/ColourSlice"
import NavbarSlice from "./slices/NavbarSlice"

const Store = configureStore({
    reducer:{
        Colour: ColourSlice.reducer,
        navdis:NavbarSlice.reducer
    }
})

export default Store