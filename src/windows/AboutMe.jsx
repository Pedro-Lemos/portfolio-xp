export default function AboutMe() {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div className="explorer-sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>📋 Informações</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Pedro Henrique N. Lemos</strong>
                        </p>
                        <p>📍 São Paulo, Brasil</p>
                        <p>🎓 Ciência da Computação</p>
                        <p>🏢 Itaú Unibanco</p>
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🔗 Links</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <a href="https://github.com/Pedro-Lemos" target="_blank" rel="noopener noreferrer">
                            🌐 GitHub
                        </a>
                        <a href="https://linkedin.com/in/pedrohnlemos" target="_blank" rel="noopener noreferrer">
                            💼 LinkedIn
                        </a>
                        <a href="mailto:pedro.hlemos2003@gmail.com">
                            ✉️ Email
                        </a>
                    </div>
                </div>

                <div className="explorer-sidebar-section">
                    <div className="explorer-sidebar-title">
                        <span>🌐 Idiomas</span>
                    </div>
                    <div className="explorer-sidebar-content">
                        <p>🇧🇷 Português (Nativo)</p>
                        <p>🇺🇸 Inglês (C1)</p>
                        <p>🇪🇸 Espanhol (Básico)</p>
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
                            <strong>Engenheiro de Software</strong> no Itaú Unibanco
                        </p>
                        <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.6', marginTop: '4px' }}>
                            Bacharelado em Ciência da Computação — FECAP (Previsão: Dez 2027)
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
                        👨‍💻 Sobre Mim
                    </h3>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333' }}>
                        Engenheiro de Software atuando no Itaú Unibanco, onde lidero a modernização de sistemas
                        legados, migrando plataformas para arquitetura nativa em nuvem na AWS. Experiência
                        fullstack com Angular, TypeScript, React no frontend, e desenvolvimento serverless
                        com AWS Lambda em Python e Java no backend.
                    </p>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333', marginTop: '8px' }}>
                        Nos meus projetos pessoais, desenvolvi o <strong>BotoTrace</strong> (dashboard de observabilidade
                        para solo founders) e o <strong>Autôno</strong> (app de gestão para profissionais autônomos).
                    </p>
                </div>

                <div style={{
                    background: '#f0f0e8',
                    border: '1px solid #aca899',
                    padding: '12px',
                    borderRadius: '3px',
                }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#003399', marginBottom: '8px' }}>
                        🏆 Conquista
                    </h3>
                    <p style={{ fontSize: '11px', lineHeight: '1.8', color: '#333' }}>
                        Reconhecido com o prêmio <strong>PRAD</strong> (Programa de Reconhecimento de Alto Desempenho)
                        no primeiro ano como Engenheiro de Software Júnior no Itaú Unibanco.
                    </p>
                </div>
            </div>
        </div>
    )
}
