import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    sidebarCollapsed: boolean;
    sidebarMobileOpen: boolean;
    notificationsOpen: boolean;
    darkMode: boolean;
}

const savedDark = typeof window !== "undefined" ? localStorage.getItem("travelops-dark") === "true" : false;

const initialState: UIState = {
    sidebarCollapsed: false,
    sidebarMobileOpen: false,
    notificationsOpen: false,
    darkMode: savedDark,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },
        setSidebarCollapsed(state, action: PayloadAction<boolean>) {
            state.sidebarCollapsed = action.payload;
        },
        toggleMobileSidebar(state) {
            state.sidebarMobileOpen = !state.sidebarMobileOpen;
        },
        closeMobileSidebar(state) {
            state.sidebarMobileOpen = false;
        },
        toggleNotifications(state) {
            state.notificationsOpen = !state.notificationsOpen;
        },
        closeNotifications(state) {
            state.notificationsOpen = false;
        },
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem("travelops-dark", String(state.darkMode));
            document.documentElement.classList.toggle("dark", state.darkMode);
        },
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload;
            localStorage.setItem("travelops-dark", String(action.payload));
            document.documentElement.classList.toggle("dark", action.payload);
        },
    },
});

export const {
    toggleSidebar,
    setSidebarCollapsed,
    toggleMobileSidebar,
    closeMobileSidebar,
    toggleNotifications,
    closeNotifications,
    toggleDarkMode,
    setDarkMode,
} = uiSlice.actions;
export default uiSlice.reducer;
