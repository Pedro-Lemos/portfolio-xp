import useLanguageStore from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function RecycleBin() {
    const language = useLanguageStore((s) => s.language)
    const t = translations[language].recycleBin

    const deletedItems = t.items

    return (
        <div style={{ padding: '8px', overflow: 'auto', height: '100%' }}>
            <div style={{
                background: '#ffffcc',
                border: '1px solid #e6e600',
                padding: '8px 12px',
                marginBottom: '12px',
                borderRadius: '3px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
            }}>
                <span style={{ fontSize: '20px' }}>⚠️</span>
                <div>
                    <p style={{ fontSize: '11px', fontWeight: 'bold' }}>{t.warningTitle}</p>
                    <p style={{ fontSize: '11px', color: '#666' }}>
                        {t.warningMessage}
                    </p>
                </div>
            </div>

            <table className="explorer-detail-list">
                <thead>
                    <tr>
                        <th>{t.name}</th>
                        <th>{t.type}</th>
                        <th>{t.size}</th>
                        <th>{t.date}</th>
                    </tr>
                </thead>
                <tbody>
                    {deletedItems.map((item, idx) => (
                        <tr key={idx}>
                            <td style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>🗑️</span>
                                {item.name}
                            </td>
                            <td>{item.type}</td>
                            <td>{item.size}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{
                marginTop: '12px',
                background: '#f0f0e8',
                border: '1px solid #aca899',
                padding: '8px 12px',
                borderRadius: '3px',
                fontSize: '11px',
                color: '#808080',
                textAlign: 'center',
            }}>
                💡 {t.tip}
            </div>
        </div>
    )
}
