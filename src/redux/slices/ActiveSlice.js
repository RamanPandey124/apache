import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state1: false,
    state2: false,
    state3: false,
    state4: false,
    state5: false,
    state6: false,
    state7: false,
    state8: false,
    state9: false,
    state10: false,
    state11: false,
}

const ActiveSlice = createSlice({
    name: 'ActiveSlice',
    initialState,
    reducers: {
        change1: (state) => {
            state.state1 = true
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change2: (state) => {
            state.state1 = false
            state.state2 = true
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change3: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = true
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change4: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = true
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change5: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = true
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change6: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = true
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change7: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = true
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change8: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = true
                state.state9 = false
                state.state10 = false
                state.state11 = false
        },
        change9: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = true
                state.state10 = false
                state.state11 = false
        },
        change10: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = true
                state.state11 = false
        },
        change11: (state) => {
            state.state1 = false
            state.state2 = false
                state.state3 = false
                state.state4 = false
                state.state5 = false
                state.state6 = false
                state.state7 = false
                state.state8 = false
                state.state9 = false
                state.state10 = false
                state.state11 = true
        },
    }
})

const { change1, change2, change3, change4, change5, change6, change7, change8, change9, change10, change11 } = ActiveSlice.actions
export { change1, change2, change3, change4, change5, change6, change7, change8, change9, change10, change11 }
export default ActiveSlice