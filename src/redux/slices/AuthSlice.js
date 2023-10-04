import { createSlice } from '@reduxjs/toolkit'
import { getAdmin, getCustomers, getGeography, getOverview, getProducts, getTransaction } from '../actions/AuthActions'


const initialState = {
    loading: false,
    message: null,
    products: null,
    customer:null,
    transactions: null,
    overview: null,
    geography: null,
    admin:null
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


        // geography
        builder.addCase(getGeography.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getGeography.fulfilled, (state, {payload}) => {
            state.loading = false
            state.geography = payload
        })
        builder.addCase(getGeography.rejected, (state, { payload }) => {
            console.log('working',payload)
            state.loading = false
            state.message = payload
        })


        // overview
        builder.addCase(getOverview.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getOverview.fulfilled, (state, {payload}) => {
            state.loading = false
            state.overview = payload
        })
        builder.addCase(getOverview.rejected, (state, { payload }) => {
            console.log('working',payload)
            state.loading = false
            state.message = payload
        })


        // transaction
        builder.addCase(getTransaction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getTransaction.fulfilled, (state, {payload}) => {
            state.loading = false
            state.transactions = payload
        })
        builder.addCase(getTransaction.rejected, (state, { payload }) => {
            console.log('working',payload)
            state.loading = false
            state.message = payload
        })


        // Admin
        builder.addCase(getAdmin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAdmin.fulfilled, (state, {payload}) => {
            state.loading = false
            state.admin = payload
        })
        builder.addCase(getAdmin.rejected, (state, { payload }) => {
            console.log('working',payload)
            state.loading = false
            state.message = payload
        })


    }
})

export default AuthSlice