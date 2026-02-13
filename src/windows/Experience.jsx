import useLanguageStore from '../store/languageStore'
import { translations, experienceData } from '../i18n/translations'

export default function Experience() {
    const language = useLanguageStore((s) => s.language)
    const t = translations[language].experience
    const experiences = experienceData[language]

    return (
        <div style={{ padding: '16px', overflow: 'auto', height: '100%' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '2px solid #003399',
            }}>
                <img src="/icons/Certificate.png" alt="" style={{ width: '32px', height: '32px' }} />
                <div>
                    <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#003399' }}>
                        {t.title}
                    </h2>
                    <p style={{ fontSize: '10px', color: '#808080' }}>
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    left: '15px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(180deg, #003399, #aca899)',
                }} />

                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginBottom: '16px',
                            position: 'relative',
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: idx === 0 ? '#003399' : '#d4d0c8',
                            border: '2px solid #003399',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            flexShrink: 0,
                            zIndex: 1,
                        }}>
                            {exp.icon}
                        </div>

                        <div style={{
                            flex: 1,
                            background: idx === 0 ? '#f0f4ff' : '#f5f5f0',
                            border: `1px solid ${idx === 0 ? '#003399' : '#aca899'}`,
                            borderRadius: '4px',
                            padding: '12px',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '6px',
                                flexWrap: 'wrap',
                                gap: '4px',
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '13px',
                                        fontWeight: 'bold',
                                        color: '#003399',
                                    }}>
                                        {exp.role}
                                    </h3>
                                    <p style={{ fontSize: '11px', color: '#666' }}>{exp.company}</p>
                                </div>
                                <span style={{
                                    fontSize: '10px',
                                    color: '#fff',
                                    background: idx === 0 ? '#003399' : '#808080',
                                    padding: '2px 8px',
                                    borderRadius: '10px',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {exp.period}
                                </span>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                            }}>
                                {exp.highlights.map((h, i) => (
                                    <li key={i} style={{
                                        fontSize: '11px',
                                        lineHeight: '1.7',
                                        color: '#333',
                                        paddingLeft: '12px',
                                        position: 'relative',
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: '#003399',
                                        }}>▸</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                background: '#f0f0e8',
                border: '1px solid #aca899',
                padding: '8px 12px',
                borderRadius: '3px',
                marginTop: '8px',
            }}>
                <p style={{ fontSize: '11px', color: '#666' }}>
                    🎓 <strong>{t.education}:</strong> {t.educationText}
                </p>
            </div>
        </div>
    )
}
