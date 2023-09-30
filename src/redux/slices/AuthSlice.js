import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../actions/AuthActions'


const initialState = {
    loading: false,
    message: null,
    products: null,
    transactions: null,
    overviews: null,
    geography: null

}

const AuthSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Products
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.loading = false
            state.products = payload
        })
        builder.addCase(getProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.message = payload
        })
    }
})

export default AuthSlice