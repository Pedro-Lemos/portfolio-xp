import useLanguageStore from '../store/languageStore'
import { translations } from '../i18n/translations'

export default function AboutMe() {
    const language = useLanguageStore((s) => s.language)
    const t = translations[language].aboutMe

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div className="explorer-sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>📋 {t.info}</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Pedro Henrique N. Lemos</strong>
                        </p>
                        <p>📍 {t.location}</p>
                        <p>🎓 {t.degree}</p>
                        <p>🏢 Itaú Unibanco</p>
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🔗 {t.links}</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <a href="https://github.com/Pedro-Lemos" target="_blank" rel="noopener noreferrer">
                            🌐 {t.github}
                        </a>
                        <a href="https://linkedin.com/in/pedrohnlemos" target="_blank" rel="noopener noreferrer">
                            💼 {t.linkedin}
                        </a>
                        <a href="mailto:pedro.hlemos2003@gmail.com">
                            ✉️ {t.email}
                        </a>
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🌐 {t.languages}</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p>🇧🇷 {t.portuguese}</p>
                        <p>🇺🇸 {t.english}</p>
                        <p>🇪🇸 {t.spanish}</p>
                    </div>
                </div>
            </div>

            <div className="explorer-content" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <img
                        src="/image.png"
                        alt="Pedro Lemos"
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '4px',
                            border: '2px solid #aca899',
                            objectFit: 'cover',
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', color: '#003399' }}>
                            Pedro Henrique N. Lemos
                        </h2>
                        <p style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                            <strong>{t.role}</strong> {t.company}
                        </p>
                        <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.6', marginTop: '4px' }}>
                            {t.education}
                        </p>
                    </div>
                </div>

                <div style={{
                    background: '#f0f0e8',
                    border: '1px solid #aca899',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '3px',
                }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#003399', marginBottom: '8px' }}>
                        👨‍💻 {t.aboutMeTitle}
                    </h3>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333' }}>
                        {t.description1}
                    </p>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333', marginTop: '8px' }}>
                        {t.description2}
                    </p>
                </div>

                <div style={{
                    background: '#f0f0e8',
                    border: '1px solid #aca899',
                    padding: '12px',
                    borderRadius: '3px',
                }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#003399', marginBottom: '8px' }}>
                        🏆 {t.achievement}
                    </h3>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333' }}>
                        {t.achievementText}
                    </p>
                </div>
            </div>
        </div>
    )
}
