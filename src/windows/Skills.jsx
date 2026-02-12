import { useState, useEffect } from 'react'

const skillCategories = [
    {
        name: 'Linguagens de Programação',
        icon: '💻',
        skills: [
            { name: 'Java', level: 85 },
            { name: 'Kotlin', level: 80 },
            { name: 'Python', level: 85 },
            { name: 'TypeScript', level: 90 },
            { name: 'JavaScript', level: 90 },
            { name: 'Swift', level: 65 },
            { name: 'C#/.NET', level: 60 },
        ],
    },
    {
        name: 'Cloud & DevOps',
        icon: '☁️',
        skills: [
            { name: 'AWS (Lambda, ECS, EKS)', level: 88 },
            { name: 'GCP', level: 55 },
            { name: 'Azure', level: 50 },
            { name: 'Docker', level: 80 },
            { name: 'Git', level: 90 },
        ],
    },
    {
        name: 'Frameworks & Bibliotecas',
        icon: '🧩',
        skills: [
            { name: 'React', level: 88 },
            { name: 'Angular', level: 75 },
            { name: 'Spring Boot', level: 78 },
            { name: 'Next.js', level: 82 },
        ],
    },
    {
        name: 'Observabilidade & Mensageria',
        icon: '📊',
        skills: [
            { name: 'Datadog', level: 80 },
            { name: 'Prometheus', level: 70 },
            { name: 'Grafana', level: 75 },
            { name: 'Kafka', level: 72 },
            { name: 'AWS SQS', level: 75 },
        ],
    },
    {
        name: 'Banco de Dados',
        icon: '🗄️',
        skills: [
            { name: 'DynamoDB', level: 75 },
            { name: 'SQL Server', level: 70 },
            { name: 'Salesforce', level: 55 },
        ],
    },
    {
        name: 'Certificações',
        icon: '📜',
        type: 'certificates',
        skills: [
            {
                name: 'AWS Certified Cloud Practitioner',
                provider: 'Amazon Web Services (AWS)',
                link: 'https://www.credly.com/badges/39617839-f3e1-492b-8858-a7660869a2f8/linked_in_profile'
            },
            {
                name: 'SRE - Site Reliability Engineering',
                provider: 'Itaú Unibanco',
                link: 'https://www.credly.com/badges/41ac65c4-6eee-41d3-91ea-71a5823ced7a/public_url'
            },
            {
                name: 'Data Modelling',
                provider: 'Itaú Unibanco',
                link: 'https://www.credly.com/badges/ff82b39f-a81d-44dd-965b-9507f2922efe/linked_in_profile'
            },
            {
                name: 'Cybersecurity Essentials',
                provider: 'Cisco',
                link: 'https://www.credly.com/badges/fc6bf45d-29a6-4a88-bdc0-60bf603162bd/linked_in_profile'
            },
            {
                name: 'Networking Academy',
                provider: 'Cisco',
                link: 'https://www.credly.com/badges/ef590a22-5ab4-431f-aae1-bbcadad166fb/linked_in_profile'
            },
        ],
    },
]

export default function Skills() {
    const [activeTab, setActiveTab] = useState(0)
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(false)
        const timer = setTimeout(() => setAnimated(true), 100)
        return () => clearTimeout(timer)
    }, [activeTab])

    const category = skillCategories[activeTab]

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* XP Tabs */}
            <div style={{
                display: 'flex',
                background: '#ece9d8',
                padding: '4px 8px 0',
                gap: '0',
                borderBottom: '1px solid #aca899',
            }}>
                {skillCategories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        style={{
                            padding: '4px 10px',
                            fontSize: '11px',
                            border: '1px solid #aca899',
                            borderBottom: idx === activeTab ? '1px solid white' : '1px solid #aca899',
                            background: idx === activeTab ? 'white' : '#d4d0c8',
                            borderRadius: '4px 4px 0 0',
                            cursor: 'pointer',
                            position: 'relative',
                            bottom: '-1px',
                            marginRight: '2px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {cat.icon}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{ flex: 1, overflow: 'auto', padding: '16px', background: 'white' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #ece9d8',
                }}>
                    <span style={{ fontSize: '24px' }}>{category.icon}</span>
                    <div>
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#003399' }}>
                            {category.name}
                        </h3>
                        <p style={{ fontSize: '10px', color: '#808080' }}>
                            {category.skills.length} {category.type === 'certificates' ? 'certificações' : 'habilidades nesta categoria'}
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {category.type === 'certificates' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                            {category.skills.map((cert) => (
                                <a
                                    key={cert.name}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '8px',
                                        border: '1px solid #d4d0c8',
                                        background: '#f5f5f5',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = '#e8e8e8'}
                                    onMouseOut={(e) => e.currentTarget.style.background = '#f5f5f5'}
                                >
                                    <div style={{ fontSize: '20px' }}>🏅</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#003399' }}>
                                            {cert.name}
                                        </div>
                                        <div style={{ fontSize: '10px', color: '#666' }}>
                                            {cert.provider}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#0054e3' }}>
                                        ↗
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        category.skills.map((skill) => (
                            <div key={skill.name}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '3px',
                                }}>
                                    <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{skill.name}</span>
                                    <span style={{ fontSize: '10px', color: '#808080' }}>{skill.level}%</span>
                                </div>
                                <div className="skill-bar-outer">
                                    <div
                                        className="skill-bar-inner"
                                        style={{
                                            width: animated ? `${skill.level}%` : '0%',
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* XP footer */}
            <div style={{
                background: '#ece9d8',
                padding: '8px 12px',
                borderTop: '1px solid #aca899',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '6px',
            }}>
            </div>
        </div>
    )
}
