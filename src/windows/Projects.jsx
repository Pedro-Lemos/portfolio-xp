import { useState } from 'react'
import useLanguageStore from '../store/languageStore'
import { translations, projectsData } from '../i18n/translations'

export default function Projects() {
    const [selected, setSelected] = useState(null)
    const language = useLanguageStore((s) => s.language)
    const t = translations[language].projects
    const projects = projectsData[language]

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div className="explorer-sidebar">
                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>📁 {t.title}</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p style={{ fontSize: '11px', color: '#333' }}>
                            {projects.length} {t.found}
                        </p>
                        {selected && (
                            <div style={{ marginTop: '8px' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{selected.name}</p>
                                <p style={{ fontSize: '10px', color: '#666' }}>{selected.type}</p>
                                {selected.url && (
                                    <a
                                        href={selected.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '10px', display: 'block', marginTop: '4px' }}
                                    >
                                        🌐 {t.accessSite}
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🔗 {t.quickLinks}</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <a href="https://www.bototrace.app" target="_blank" rel="noopener noreferrer">
                            🔍 {t.bototrace}
                        </a>
                        <a href="https://www.souautono.app" target="_blank" rel="noopener noreferrer">
                            📱 {t.autono}
                        </a>
                        <a href="https://github.com/Pedro-Lemos" target="_blank" rel="noopener noreferrer">
                            💻 {t.github}
                        </a>
                    </div>
                </div>
            </div>

            <div className="explorer-content">
                <div style={{ marginBottom: '8px', padding: '4px 8px', background: '#f5f5f0', border: '1px solid #e0ddd0', fontSize: '11px', color: '#666' }}>
                    📁 {t.allItems} ({projects.length} {t.items})
                </div>

                <table className="explorer-detail-list">
                    <thead>
                        <tr>
                            <th style={{ width: '32px' }}></th>
                            <th>{t.name}</th>
                            <th>{t.type}</th>
                            <th>{t.tech}</th>
                            <th>{t.date}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr
                                key={project.id}
                                style={{
                                    cursor: 'pointer',
                                    background: selected?.id === project.id ? '#316ac5' : 'transparent',
                                    color: selected?.id === project.id ? 'white' : 'inherit',
                                }}
                                onClick={() => setSelected(project)}
                                onDoubleClick={() => {
                                    if (project.url) window.open(project.url, '_blank')
                                }}
                            >
                                <td><img src={project.icon} alt="" style={{ width: '16px', height: '16px' }} /></td>
                                <td style={{ fontWeight: 'bold' }}>{project.name}</td>
                                <td>{project.type}</td>
                                <td style={{ fontSize: '10px' }}>{project.tech.join(', ')}</td>
                                <td>{project.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selected && (
                    <div style={{
                        marginTop: '12px',
                        background: '#f0f0e8',
                        border: '1px solid #aca899',
                        padding: '12px',
                        borderRadius: '3px',
                    }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                            <img src={selected.icon} alt="" style={{ width: '32px', height: '32px' }} />
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#003399' }}>
                                    {selected.name}
                                </h3>
                                <span style={{ fontSize: '10px', color: '#666' }}>{selected.type} • {selected.date}</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333', marginBottom: '8px' }}>
                            {selected.description}
                        </p>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {selected.tech.map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        background: '#d4d0c8',
                                        border: '1px solid #aca899',
                                        padding: '1px 6px',
                                        fontSize: '10px',
                                        borderRadius: '2px',
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {selected.url && (
                            <a
                                href={selected.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '8px',
                                    fontSize: '11px',
                                    color: '#316ac5',
                                }}
                            >
                                🌐 {t.accessSite}: {selected.url}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
