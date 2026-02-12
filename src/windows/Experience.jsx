const experiences = [
    {
        role: 'Engenheiro de Software',
        company: 'Itaú Unibanco',
        period: 'Set 2025 — Atual',
        icon: '🚀',
        highlights: [
            'Liderando a modernização de sistemas legados para arquitetura cloud-native na AWS',
            'Atuação Fullstack: Angular, TypeScript, React (Frontend) + AWS Lambda, Python, Java (Backend)',
            'Modelagem de dados e integração de microsserviços para escalabilidade e performance',
        ],
    },
    {
        role: 'Engenheiro de Software Júnior',
        company: 'Itaú Unibanco',
        period: 'Mai 2024 — Set 2025',
        icon: '⭐',
        highlights: [
            'Nova jornada de portabilidade de crédito consignado no SuperApp Itaú',
            'Microsserviços em Kotlin com Spring, AWS ECS, SQS, Kafka e DynamoDB',
            'Tolerância a falhas com Resilience4j e observabilidade com Datadog e Grafana',
            'Microsserviços em Python com AWS Lambda, EKS e Glue Jobs',
            '🏆 Prêmio PRAD — Reconhecimento de Alto Desempenho no primeiro ano',
        ],
    },
    {
        role: 'Estagiário de Dados Analytics',
        company: 'Itaú Unibanco',
        period: 'Mai 2023 — Mai 2024',
        icon: '📊',
        highlights: [
            'Desenvolvimento de plataformas internas low-code (IULearn e IUBOX) com Power Apps',
            'Automação de processos e tomada de decisão baseada em dados via Power Platform',
        ],
    },
    {
        role: 'Jovem Aprendiz de Dados Analytics',
        company: 'Itaú Unibanco',
        period: 'Set 2022 — Mai 2023',
        icon: '📈',
        highlights: [
            'Indicadores de qualidade e visualização de dados com metodologia Lean Agile',
            'Experiência com Automation Anywhere, Alteryx, SQL Server e Salesforce',
        ],
    },
]

export default function Experience() {
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
                        Experiência Profissional
                    </h2>
                    <p style={{ fontSize: '10px', color: '#808080' }}>
                        Trajetória no Itaú Unibanco — Set 2022 até o presente
                    </p>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Timeline line */}
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
                        {/* Timeline dot */}
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

                        {/* Content card */}
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
                    🎓 <strong>Formação:</strong> Bacharelado em Ciência da Computação — Universidade FECAP (Previsão: Dez 2027)
                </p>
            </div>
        </div>
    )
}
