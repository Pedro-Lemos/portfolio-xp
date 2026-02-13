import { useState, useEffect } from 'react'
import useWindowStore from '../store/windowStore'
import useLanguageStore from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function Taskbar() {
    const windows = useWindowStore((s) => s.windows)
    const focusWindow = useWindowStore((s) => s.focusWindow)
    const minimizeWindow = useWindowStore((s) => s.minimizeWindow)
    const toggleStartMenu = useWindowStore((s) => s.toggleStartMenu)
    const startMenuOpen = useWindowStore((s) => s.startMenuOpen)
    const language = useLanguageStore((s) => s.language)
    const toggleLanguage = useLanguageStore((s) => s.toggleLanguage)

    const [time, setTime] = useState(new Date())

    const t = translations[language].common

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const formatTime = (d) => {
        return d.toLocaleTimeString(language === 'pt' ? 'pt-BR' : 'en-US', { hour: '2-digit', minute: '2-digit' })
    }

    const handleTaskbarClick = (id, win) => {
        if (win.minimized) {
            focusWindow(id)
            useWindowStore.getState().openWindow(id, win)
        } else {
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
                    {t.start}
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
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        marginRight: '4px',
                    }}
                    title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                >
                    <img 
                        src={language === 'pt' ? 'https://flagcdn.com/w40/br.png' : 'https://flagcdn.com/w40/gb.png'} 
                        alt={language === 'pt' ? 'Português' : 'English'}
                        style={{ width: '16px', height: '12px', borderRadius: '1px', border: '1px solid #808080' }}
                    />
                    <span style={{ fontSize: '10px', color: '#000' }}>
                        {language.toUpperCase()}
                    </span>
                </button>
                <img
                    src="/icons/Network Connection.png"
                    alt="Network"
                    style={{ width: '16px', height: '16px' }}
                    title={t.connected}
                />
                <span className="xp-clock">{formatTime(time)}</span>
            </div>
        </div>
    )
}
