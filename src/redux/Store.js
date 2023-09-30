import {configureStore} from "@reduxjs/toolkit"
import ColourSlice from "./slices/ColourSlice"
import NavbarSlice from "./slices/NavbarSlice"
import AuthSlice from "./slices/AuthSlice"

const Store = configureStore({
    reducer:{
        Colour: ColourSlice.reducer,
        navdis:NavbarSlice.reducer,
        auth: AuthSlice.reducer
    }
})

export default Store