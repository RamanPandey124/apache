import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colour1: 'bgNavy',
    colour2: 'bgNavy2',
    colour3: 'bgNavy3',
    colour4: 'bgNavy4',
    colour5: 'bgNavy5',
    colour6: 'navy6',
    colour7: 'navy7',
    colour8: 'navy8',
    colour9: 'navy9',
    colour10: 'hover1',
}

const ColourSlice = createSlice({
    name: 'colour',
    initialState,
    reducers: {
        navy: (state) => {
            state.colour1 = 'bgNavy'
            state.colour2 = 'bgNavy2'
            state.colour3 = 'bgNavy3'
            state.colour4 = 'bgNavy4'
            state.colour5 = 'bgNavy5'
            state.colour6 = 'navy6'
            state.colour7 = 'navy7'
            state.colour8 = 'navy8'
            state.colour9 = 'navy9'
            state.colour10 = 'hover1'
        },
        black: (state) => {
            state.colour1 = 'bgBlack'
            state.colour2 = 'bgBlack2'
            state.colour3 = 'bgBlack3'
            state.colour4 = 'bgBlack4'
            state.colour5 = 'bgBlack5'
            state.colour6 = 'black6'
            state.colour7 = 'black7'
            state.colour8 = 'black8'
            state.colour9 = 'black9'
            state.colour10 = 'hover2'
        },
        green: (state) => {
            state.colour1 = 'bgGreen'
            state.colour2 = 'bgGreen2'
            state.colour3 = 'bgGreen3'
            state.colour4 = 'bgGreen4'
            state.colour5 = 'bgGreen5'
            state.colour6 = 'green6'
            state.colour7 = 'green7'
            state.colour8 = 'green8'
            state.colour9 = 'green9'
            state.colour10 = 'hover3'
        },
        pink: (state) => {
            state.colour1 = 'bgPink'
            state.colour2 = 'bgPink2'
            state.colour3 = 'bgPink3'
            state.colour4 = 'bgPink4'
            state.colour5 = 'bgPink5'
            state.colour6 = 'pink6'
            state.colour7 = 'pink7'
            state.colour8 = 'pink8'
            state.colour9 = 'pink9'
            state.colour10 = 'hover4'
        },
        yellow: (state) => {
            state.colour1 = 'bgYellow'
            state.colour2 = 'bgYellow2'
            state.colour3 = 'bgYellow3'
            state.colour4 = 'bgYellow4'
            state.colour5 = 'bgYellow5'
            state.colour6 = 'yellow6'
            state.colour7 = 'yellow7'
            state.colour8 = 'yellow8'
            state.colour9 = 'yellow9'
            state.colour10 = 'hover5'
        },
        red: (state) => {
            state.colour1 = 'bgRed'
            state.colour2 = 'bgRed2'
            state.colour3 = 'bgRed3'
            state.colour4 = 'bgRed4'
            state.colour5 = 'bgRed5'
            state.colour6 = 'red6'
            state.colour7 = 'red7'
            state.colour8 = 'red8'
            state.colour9 = 'red9'
            state.colour10 = 'hover6'
        },

    },
    extraReducers: {}
})

const { navy, black, green, pink, yellow, red } = ColourSlice.actions
export { navy, black, green, pink, yellow, red }
export default ColourSlice