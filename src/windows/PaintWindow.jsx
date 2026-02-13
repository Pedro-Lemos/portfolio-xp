import useLanguageStore from '../store/languageStore'
import { translations } from '../i18n/translations'

const PAINT_COLORS = [
    '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
    '#808040', '#004040', '#0080ff', '#0040ff', '#804000', '#c0c0c0',
    '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff',
    '#ffff80', '#00ff80', '#80ffff', '#8080ff', '#ff0080', '#ff8040',
]

export default function PaintWindow() {
    const language = useLanguageStore((s) => s.language)
    const t = translations[language].paint

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Menu bar */}
            <div className="xp-menubar">
                <span className="xp-menubar-item">File</span>
                <span className="xp-menubar-item">Edit</span>
                <span className="xp-menubar-item">View</span>
                <span className="xp-menubar-item">Image</span>
                <span className="xp-menubar-item">Colors</span>
                <span className="xp-menubar-item">Help</span>
            </div>

            {/* Main area */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                {/* Toolbox */}
                <div style={{
                    background: '#ece9d8',
                    padding: '4px',
                    borderRight: '1px solid #aca899',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                }}>
                    <div className="paint-toolbox">
                        {['✏️', '🪣', '🔍', '✂️', '📏', '🖌️', '📝', '⬜', '⭕', '🔶'].map((tool, idx) => (
                            <button key={idx} className={`paint-tool-btn ${idx === 5 ? 'active' : ''}`}>
                                {tool}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Canvas area */}
                <div className="paint-canvas-area">
                    <div className="paint-canvas" style={{ position: 'relative' }}>
                        <img
                            src="/image.png"
                            alt="Pedro Lemos"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                display: 'block',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>

            {/* Color palette */}
            <div className="paint-color-palette">
                <div className="paint-active-colors">
                    <div className="paint-fg-color" style={{ background: '#000000' }} />
                    <div className="paint-bg-color" style={{ background: '#ffffff' }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', maxWidth: '240px' }}>
                    {PAINT_COLORS.map((color, idx) => (
                        <div
                            key={idx}
                            className="paint-color-box"
                            style={{ background: color }}
                        />
                    ))}
                </div>
            </div>

            {/* Status bar */}
            <div style={{
                background: '#ece9d8',
                borderTop: '1px solid #aca899',
                padding: '2px 8px',
                fontSize: '10px',
                color: '#808080',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <span>{t.fileName}</span>
                <span>{t.dimensions}</span>
            </div>
        </div>
    )
}
