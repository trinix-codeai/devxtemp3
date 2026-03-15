import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserRole } from "../types";
import { mockUsers } from "../data/mockData";

interface AuthState {
    user: User | null;
    currentRole: UserRole;
    isAuthenticated: boolean;
}


const initialState: AuthState = {
    user: null,
    currentRole: "agent",
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserRole>) {
            const user = mockUsers.find((u) => u.role === action.payload);
            if (user) {
                state.user = user;
                state.currentRole = action.payload;
                state.isAuthenticated = true;
                localStorage.setItem("travelops-role", action.payload);
            }
        },
        setRole(state, action: PayloadAction<UserRole>) {
            const user = mockUsers.find((u) => u.role === action.payload);
            if (user) {
                state.user = user;
                state.currentRole = action.payload;
                localStorage.setItem("travelops-role", action.payload);
            }
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("travelops-role");
        },
    },
});

export const { login, setRole, logout } = authSlice.actions;
export default authSlice.reducer;
