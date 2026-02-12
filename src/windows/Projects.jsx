import { useState } from 'react'

const projects = [
    {
        id: 'bototrace',
        name: 'BotoTrace',
        icon: '/icons/Network Connection.png',
        type: 'Projeto Pessoal',
        description: 'Dashboard de observabilidade para solo founders, criadores de SaaS e projetos de vibe coding. Monitore métricas, logs e performance em um só lugar.',
        tech: ['Next.js', 'TypeScript', 'Vercel', 'Analytics'],
        url: 'https://www.bototrace.app',
        date: '2025',
    },
    {
        id: 'autono',
        name: 'Autôno',
        icon: '/icons/Scheduled Tasks.png',
        type: 'Projeto Pessoal',
        description: 'Aplicativo focado para gestão de trabalho, finanças e agenda — tudo em um só lugar — para profissionais autônomos.',
        tech: ['Swift', 'iOS', 'Mobile'],
        url: 'https://www.souautono.app',
        date: '2025',
    },
    {
        id: 'cloud-itau',
        name: 'Modernização Cloud',
        icon: '/icons/My Computer.png',
        type: 'Itaú Unibanco',
        description: 'Desenvolvimento full-stack de nova plataforma de escrituração de ativos de renda fixa e variável na AWS. Migração de sistemas legados para arquitetura cloud-native.',
        tech: ['Angular', 'TypeScript', 'React', 'AWS Lambda', 'Python', 'Java'],
        url: null,
        date: '2025 - Atual',
    },
    {
        id: 'portabilidade-itau',
        name: 'App Portabilidade',
        icon: '/icons/Chip.png',
        type: 'Itaú Unibanco',
        description: 'Nova jornada de portabilidade de crédito consignado no SuperApp Itaú. Arquitetura de microsserviços com Kotlin, Spring, AWS ECS, SQS, Kafka e DynamoDB.',
        tech: ['Kotlin', 'Spring', 'AWS ECS', 'Kafka', 'DynamoDB', 'Datadog'],
        url: null,
        date: '2024 - 2025',
    },
    {
        id: 'fecap-challenges',
        name: 'Desafios Reais FECAP',
        icon: '/icons/Certificate.png',
        type: 'Acadêmico',
        description: 'Soluções para desafios do mercado propostos por empresas como Uber e Nubank, com foco na resolução de problemas práticos.',
        tech: ['Problem Solving', 'Teamwork'],
        url: null,
        date: '2023 - 2024',
    },
]

export default function Projects() {
    const [selected, setSelected] = useState(null)

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div className="explorer-sidebar">
                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>📁 Projetos</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p style={{ fontSize: '11px', color: '#333' }}>
                            {projects.length} projeto(s) encontrado(s)
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
                                        🌐 Acessar site
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🔗 Links Rápidos</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <a href="https://www.bototrace.app" target="_blank" rel="noopener noreferrer">
                            🔍 BotoTrace
                        </a>
                        <a href="https://www.souautono.app" target="_blank" rel="noopener noreferrer">
                            📱 Autôno
                        </a>
                        <a href="https://github.com/Pedro-Lemos" target="_blank" rel="noopener noreferrer">
                            💻 GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="explorer-content">
                <div style={{ marginBottom: '8px', padding: '4px 8px', background: '#f5f5f0', border: '1px solid #e0ddd0', fontSize: '11px', color: '#666' }}>
                    📁 Projetos &gt; Todos ({projects.length} itens)
                </div>

                <table className="explorer-detail-list">
                    <thead>
                        <tr>
                            <th style={{ width: '32px' }}></th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Tecnologias</th>
                            <th>Data</th>
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
                            {selected.tech.map((t) => (
                                <span
                                    key={t}
                                    style={{
                                        background: '#d4d0c8',
                                        border: '1px solid #aca899',
                                        padding: '1px 6px',
                                        fontSize: '10px',
                                        borderRadius: '2px',
                                    }}
                                >
                                    {t}
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
                                🌐 Acessar {selected.url}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
