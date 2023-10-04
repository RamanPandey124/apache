import {configureStore} from "@reduxjs/toolkit"
import ColourSlice from "./slices/ColourSlice"
import NavbarSlice from "./slices/NavbarSlice"
import AuthSlice from "./slices/AuthSlice"
import ActiveSlice from "./slices/ActiveSlice"

const Store = configureStore({
    reducer:{
        Colour: ColourSlice.reducer,
        navdis:NavbarSlice.reducer,
        auth: AuthSlice.reducer,
        ActiveClass:ActiveSlice.reducer
    }
})

export default Store