import { useCallback, useEffect, useRef, useState } from 'react'
import { Rnd } from 'react-rnd'
import useWindowStore from '../store/windowStore'

export default function Window({ id }) {
    const win = useWindowStore((s) => s.windows[id])
    const focusWindow = useWindowStore((s) => s.focusWindow)
    const closeWindow = useWindowStore((s) => s.closeWindow)
    const minimizeWindow = useWindowStore((s) => s.minimizeWindow)
    const updateWindowPosition = useWindowStore((s) => s.updateWindowPosition)
    const updateWindowSize = useWindowStore((s) => s.updateWindowSize)
    const allWindows = useWindowStore((s) => s.windows)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [])

    const isFocused = (() => {
        let maxZ = -1
        let topId = null
        Object.entries(allWindows).forEach(([wid, w]) => {
            if (!w.minimized && w.zIndex > maxZ) {
                maxZ = w.zIndex
                topId = wid
            }
        })
        return topId === id
    })()

    if (!win || win.minimized) return null

    const ContentComponent = win.component

    if (isMobile) {
        return (
            <div
                className="xp-window xp-boot-in"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 38,
                    zIndex: win.zIndex,
                    borderRadius: 0,
                }}
                onMouseDown={() => focusWindow(id)}
                onTouchStart={() => focusWindow(id)}
            >
                <div className={`xp-titlebar ${isFocused ? '' : 'inactive'}`} style={{ borderRadius: 0 }}>
                    {win.icon && <img src={win.icon} alt="" className="xp-titlebar-icon" />}
                    <span className="xp-titlebar-text">{win.title}</span>
                    <div className="xp-titlebar-buttons">
                        <button className="xp-btn xp-btn-close" onClick={() => closeWindow(id)}>
                            ✕
                        </button>
                    </div>
                </div>
                <div className="xp-window-body" style={{ flex: 1 }}>
                    <ContentComponent />
                </div>
            </div>
        )
    }

    if (win.maximized) {
        return (
            <div
                className="xp-window xp-boot-in"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 38,
                    zIndex: win.zIndex,
                    borderRadius: 0,
                }}
                onMouseDown={() => focusWindow(id)}
            >
                <div className={`xp-titlebar ${isFocused ? '' : 'inactive'}`} style={{ borderRadius: 0 }}>
                    {win.icon && <img src={win.icon} alt="" className="xp-titlebar-icon" />}
                    <span className="xp-titlebar-text">{win.title}</span>
                    <div className="xp-titlebar-buttons">
                        <button className="xp-btn xp-btn-minimize" onClick={() => minimizeWindow(id)}>
                            <span style={{ position: 'relative', top: '3px' }}>_</span>
                        </button>

                        <button className="xp-btn xp-btn-close" onClick={() => closeWindow(id)}>
                            ✕
                        </button>
                    </div>
                </div>
                <div className="xp-window-body" style={{ flex: 1 }}>
                    <ContentComponent />
                </div>
            </div>
        )
    }

    return (
        <Rnd
            className="xp-window xp-boot-in"
            style={{ zIndex: win.zIndex }}
            size={{ width: win.width, height: win.height }}
            position={{ x: win.x, y: win.y }}
            onDragStop={(e, d) => updateWindowPosition(id, d.x, d.y)}
            onResizeStop={(e, direction, ref, delta, position) => {
                updateWindowSize(id, parseInt(ref.style.width), parseInt(ref.style.height))
                updateWindowPosition(id, position.x, position.y)
            }}
            onMouseDown={() => focusWindow(id)}
            dragHandleClassName="xp-titlebar"
            minWidth={300}
            minHeight={200}
            bounds="parent"
            enableResizing={{
                top: true, right: true, bottom: true, left: true,
                topRight: true, topLeft: true, bottomRight: true, bottomLeft: true,
            }}
        >
            <div className={`xp-titlebar ${isFocused ? '' : 'inactive'}`}>
                {win.icon && <img src={win.icon} alt="" className="xp-titlebar-icon" />}
                <span className="xp-titlebar-text">{win.title}</span>
                <div className="xp-titlebar-buttons">
                    <button className="xp-btn xp-btn-minimize" onClick={() => minimizeWindow(id)}>
                        <span style={{ position: 'relative', top: '3px' }}>_</span>
                    </button>

                    <button className="xp-btn xp-btn-close" onClick={() => closeWindow(id)}>
                        ✕
                    </button>
                </div>
            </div>
            <div className="xp-window-body" style={{ flex: 1 }}>
                <ContentComponent />
            </div>
        </Rnd>
    )
}
