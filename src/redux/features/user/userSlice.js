import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Mr Anik',
    email: "anik@gmail.com",

}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    },
})

export default userSlice.reducer;