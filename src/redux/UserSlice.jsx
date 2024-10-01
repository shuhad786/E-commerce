import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    return data; // Return the list of users
});

// Async thunk to add a new user
export const addUser = createAsyncThunk("user/addUser", async (userData) => {
    const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data; // Return the newly created user
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload; // Store the fetched users
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users.push(action.payload); // Add the new user to the users array
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
