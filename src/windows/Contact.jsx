export default function Contact() {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Menu bar */}
            <div className="xp-menubar">
                <span className="xp-menubar-item">File</span>
                <span className="xp-menubar-item">Edit</span>
                <span className="xp-menubar-item">View</span>
                <span className="xp-menubar-item">Tools</span>
                <span className="xp-menubar-item">Message</span>
                <span className="xp-menubar-item">Help</span>
            </div>

            {/* Toolbar */}
            <div style={{
                background: '#ece9d8',
                padding: '4px 8px',
                borderBottom: '1px solid #aca899',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
            }}>
                <button style={{
                    background: 'linear-gradient(180deg, #f8f8f0 0%, #e8e4d8 100%)',
                    border: '1px solid #aca899',
                    padding: '3px 12px',
                    cursor: 'pointer',
                    fontSize: '11px',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                }}
                    onClick={() => window.open('mailto:pedro.hlemos2003@gmail.com', '_blank')}
                >
                    📤 Enviar
                </button>
            </div>

            {/* Email form */}
            <div style={{
                background: 'white',
                padding: '8px 12px',
                borderBottom: '1px solid #ece9d8',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <label style={{ fontSize: '11px', color: '#808080', width: '50px' }}>Para:</label>
                    <div style={{
                        flex: 1,
                        padding: '3px 6px',
                        border: '1px inset #ece9d8',
                        background: '#f8f8f0',
                        fontSize: '11px',
                    }}>
                        pedro.hlemos2003@gmail.com
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <label style={{ fontSize: '11px', color: '#808080', width: '50px' }}>CC:</label>
                    <div style={{
                        flex: 1,
                        padding: '3px 6px',
                        border: '1px inset #ece9d8',
                        background: '#f8f8f0',
                        fontSize: '11px',
                        color: '#c0c0c0',
                    }}>
                        (vazio)
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '11px', color: '#808080', width: '50px' }}>Assunto:</label>
                    <div style={{
                        flex: 1,
                        padding: '3px 6px',
                        border: '1px inset #ece9d8',
                        background: '#f8f8f0',
                        fontSize: '11px',
                    }}>
                        Olá Pedro! Vi seu portfólio XP 🖥️
                    </div>
                </div>
            </div>

            {/* Email body */}
            <div style={{
                flex: 1,
                padding: '12px 16px',
                overflow: 'auto',
                background: 'white',
                fontSize: '12px',
                lineHeight: '1.8',
                color: '#333',
            }}>
                <p>Olá! 👋</p>
                <br />
                <p>Se você chegou até aqui, provavelmente está interessado em conversar comigo.</p>
                <p>Fique à vontade para entrar em contato através dos canais abaixo:</p>
                <br />
                <div style={{
                    background: '#f0f4ff',
                    border: '1px solid #316ac5',
                    padding: '12px',
                    borderRadius: '4px',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <a
                            href="mailto:pedro.hlemos2003@gmail.com"
                            style={{ color: '#316ac5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <img src="/icons/Email.png" alt="" style={{ width: '20px', height: '20px' }} />
                            <span>pedro.hlemos2003@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/Pedro-Lemos"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#316ac5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <img src="/icons/Internet Explorer 6.png" alt="" style={{ width: '20px', height: '20px' }} />
                            <span>github.com/Pedro-Lemos</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/pedrohnlemos"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#316ac5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <img src="/icons/My Network Places.png" alt="" style={{ width: '20px', height: '20px' }} />
                            <span>linkedin.com/in/pedrohnlemos</span>
                        </a>
                    </div>
                </div>
                <br />
                <p style={{ color: '#808080', fontSize: '11px' }}>
                    — Enviado do meu Windows XP 💾
                </p>
            </div>
        </div>
    )
}
