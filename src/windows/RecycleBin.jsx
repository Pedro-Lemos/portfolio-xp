export default function RecycleBin() {
    const deletedItems = [
        { name: 'bugs_em_producao.exe', type: 'Aplicação', size: '404 KB', date: 'Nunca' },
        { name: 'código_sem_testes.js', type: 'JavaScript', size: '∞ KB', date: 'Ontem' },
        { name: 'css_inline_everywhere.html', type: 'HTML', size: '666 KB', date: 'Tempos antigos' },
        { name: 'deploy_na_sexta.sh', type: 'Shell Script', size: '13 KB', date: 'Sexta-feira 13' },
        { name: 'console.log(debug).ts', type: 'TypeScript', size: '999 KB', date: 'Sempre' },
        { name: 'projeto_que_ia_fazer.md', type: 'Markdown', size: '0 KB', date: 'Um dia...' },
        { name: 'stack_overflow_ctrl_c.java', type: 'Java', size: '100%', date: 'Todo dia' },
    ]

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
                    <p style={{ fontSize: '11px', fontWeight: 'bold' }}>Aviso do Sistema</p>
                    <p style={{ fontSize: '11px', color: '#666' }}>
                        Nenhum bug foi descartado aqui... ainda. Mas esses arquivos foram eliminados da carreira! 🤣
                    </p>
                </div>
            </div>

            <table className="explorer-detail-list">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Tamanho</th>
                        <th>Data de exclusão</th>
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
                💡 Dica: Os melhores devs também cometem erros — mas aprendem com eles!
            </div>
        </div>
    )
}
