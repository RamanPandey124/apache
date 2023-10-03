import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/API'

const getProducts = createAsyncThunk(
    'auth-product',
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/Products', obj)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const getCustomers = createAsyncThunk(
    'auth/customer',
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/Customers', obj)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const getGeography = createAsyncThunk(
    'auth/geography',
    async () => {
        try {
            const { data } = await API.get('/Geography')
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const getOverview = createAsyncThunk(
    'auth/overview',
    async () => {
        try {
            const { data } = await API.get('/Overview')
            return data
        } catch (error) {
            console.log(error)
        }
    }
)
export { getProducts, getCustomers, getGeography, getOverview }