import { useState, useEffect } from 'react'
import useWindowStore from '../store/windowStore'

export default function Taskbar() {
    const windows = useWindowStore((s) => s.windows)
    const focusWindow = useWindowStore((s) => s.focusWindow)
    const minimizeWindow = useWindowStore((s) => s.minimizeWindow)
    const toggleStartMenu = useWindowStore((s) => s.toggleStartMenu)
    const startMenuOpen = useWindowStore((s) => s.startMenuOpen)

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const formatTime = (d) => {
        return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }

    const handleTaskbarClick = (id, win) => {
        if (win.minimized) {
            focusWindow(id)
            useWindowStore.getState().openWindow(id, win)
        } else {
            // Check if focused
            let maxZ = -1
            let topId = null
            Object.entries(windows).forEach(([wid, w]) => {
                if (!w.minimized && w.zIndex > maxZ) {
                    maxZ = w.zIndex
                    topId = wid
                }
            })
            if (topId === id) {
                minimizeWindow(id)
            } else {
                focusWindow(id)
            }
        }
    }

    return (
        <div className="xp-taskbar">
            <button
                className="xp-start-btn"
                onClick={(e) => {
                    e.stopPropagation()
                    toggleStartMenu()
                }}
            >
                <img src="/icons/Windows Update.png" alt="" />
                <span style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: '15px', letterSpacing: '0.5px' }}>
                    start
                </span>
            </button>

            <div className="xp-taskbar-items">
                {Object.entries(windows).map(([id, win]) => {
                    let isActive = false
                    let maxZ = -1
                    Object.entries(windows).forEach(([wid, w]) => {
                        if (!w.minimized && w.zIndex > maxZ) {
                            maxZ = w.zIndex
                        }
                    })
                    isActive = !win.minimized && win.zIndex === maxZ

                    return (
                        <button
                            key={id}
                            className={`xp-taskbar-item ${isActive ? 'active' : ''}`}
                            onClick={() => handleTaskbarClick(id, win)}
                        >
                            {win.icon && <img src={win.icon} alt="" />}
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{win.title}</span>
                        </button>
                    )
                })}
            </div>

            <div className="xp-systray">
                <img
                    src="/icons/Network Connection.png"
                    alt="Network"
                    style={{ width: '16px', height: '16px' }}
                    title="Conectado"
                />
                <span className="xp-clock">{formatTime(time)}</span>
            </div>
        </div>
    )
}
