import { create } from 'zustand'

let nextZIndex = 10

const useWindowStore = create((set, get) => ({
    windows: {},
    startMenuOpen: false,

    openWindow: (id, config) => set((state) => {
        if (state.windows[id]) {
            // Already open — just focus it and unminimize
            return {
                windows: {
                    ...state.windows,
                    [id]: {
                        ...state.windows[id],
                        minimized: false,
                        zIndex: ++nextZIndex,
                    },
                },
                startMenuOpen: false,
            }
        }
        return {
            windows: {
                ...state.windows,
                [id]: {
                    id,
                    title: config.title,
                    icon: config.icon,
                    component: config.component,
                    x: config.x ?? 80 + Object.keys(state.windows).length * 30,
                    y: config.y ?? 40 + Object.keys(state.windows).length * 30,
                    width: config.width ?? 600,
                    height: config.height ?? 420,
                    minimized: false,
                    maximized: false,
                    zIndex: ++nextZIndex,
                },
            },
            startMenuOpen: false,
        }
    }),

    closeWindow: (id) => set((state) => {
        const rest = { ...state.windows }
        delete rest[id]
        return { windows: rest }
    }),

    minimizeWindow: (id) => set((state) => ({
        windows: {
            ...state.windows,
            [id]: { ...state.windows[id], minimized: true },
        },
    })),

    maximizeWindow: (id) => set((state) => ({
        windows: {
            ...state.windows,
            [id]: {
                ...state.windows[id],
                maximized: !state.windows[id].maximized,
            },
        },
    })),

    focusWindow: (id) => set((state) => ({
        windows: {
            ...state.windows,
            [id]: { ...state.windows[id], zIndex: ++nextZIndex },
        },
    })),

    updateWindowPosition: (id, x, y) => set((state) => ({
        windows: {
            ...state.windows,
            [id]: { ...state.windows[id], x, y },
        },
    })),

    updateWindowSize: (id, width, height) => set((state) => ({
        windows: {
            ...state.windows,
            [id]: { ...state.windows[id], width, height },
        },
    })),

    toggleStartMenu: () => set((state) => ({
        startMenuOpen: !state.startMenuOpen,
    })),

    closeStartMenu: () => set({ startMenuOpen: false }),
}))

export default useWindowStore
