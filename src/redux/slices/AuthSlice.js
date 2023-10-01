import { createSlice } from '@reduxjs/toolkit'
import { getCustomers, getProducts } from '../actions/AuthActions'


const initialState = {
    loading: false,
    message: null,
    products: null,
    customer:null,
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

        // customers
        builder.addCase(getCustomers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCustomers.fulfilled, (state, {payload}) => {
            state.loading = false
            state.customer = payload
        })
        builder.addCase(getCustomers.rejected, (state, { payload }) => {
            state.loading = false
            state.message = payload
        })


    }
})

export default AuthSlice