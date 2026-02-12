import useWindowStore from '../store/windowStore'

export default function DesktopIcon({ id, icon, label, windowConfig, onDoubleClick }) {
    const openWindow = useWindowStore((s) => s.openWindow)

    const handleDoubleClick = () => {
        if (onDoubleClick) {
            onDoubleClick()
        } else if (windowConfig) {
            openWindow(id, windowConfig)
        }
    }

    return (
        <div
            className="desktop-icon"
            onDoubleClick={handleDoubleClick}
            onTouchEnd={(e) => {
                // Single tap on mobile acts as double-click
                e.preventDefault()
                handleDoubleClick()
            }}
        >
            <img src={icon} alt={label} draggable={false} />
            <span className="desktop-icon-label">{label}</span>
        </div>
    )
}
