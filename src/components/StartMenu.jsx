import useWindowStore from '../store/windowStore'
import useLanguageStore from '../store/languageStore'
import { translations } from '../i18n/translations'
import AboutMe from '../windows/AboutMe'
import Projects from '../windows/Projects'
import Skills from '../windows/Skills'
import Experience from '../windows/Experience'
import Contact from '../windows/Contact'

export default function StartMenu() {
    const startMenuOpen = useWindowStore((s) => s.startMenuOpen)
    const closeStartMenu = useWindowStore((s) => s.closeStartMenu)
    const openWindow = useWindowStore((s) => s.openWindow)
    const language = useLanguageStore((s) => s.language)

    const t = translations[language].menu

    if (!startMenuOpen) return null

    const openAndClose = (id, config) => {
        openWindow(id, config)
        closeStartMenu()
    }

    return (
        <>
            <div
                style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
                onClick={closeStartMenu}
            />
            <div className="xp-start-menu xp-boot-in">
                <div className="xp-start-menu-header">
                    <img src="/image.png" alt="Pedro" className="xp-start-menu-avatar" />
                    <span className="xp-start-menu-username">Pedro Lemos</span>
                </div>

                <div className="xp-start-menu-body">
                    <div className="xp-start-menu-left">
                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('about', {
                                title: language === 'pt' ? 'Sobre Mim — Pedro Lemos' : 'About Me — Pedro Lemos',
                                icon: '/icons/User Accounts.png',
                                component: AboutMe,
                                width: 680, height: 500,
                            })}
                        >
                            <img src="/icons/User Accounts.png" alt="" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.aboutMe}</div>
                                <div style={{ fontSize: '10px', color: '#808080' }}>{t.aboutMeDesc}</div>
                            </div>
                        </div>

                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('projects', {
                                title: language === 'pt' ? 'Meus Projetos' : 'My Projects',
                                icon: '/icons/My Documents.png',
                                component: Projects,
                                width: 720, height: 500,
                            })}
                        >
                            <img src="/icons/My Documents.png" alt="" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.projects}</div>
                                <div style={{ fontSize: '10px', color: '#808080' }}>{t.projectsDesc}</div>
                            </div>
                        </div>

                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('skills', {
                                title: language === 'pt' ? 'Habilidades — System Properties' : 'Skills — System Properties',
                                icon: '/icons/System Properties.png',
                                component: Skills,
                                width: 500, height: 520,
                            })}
                        >
                            <img src="/icons/System Properties.png" alt="" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.skills}</div>
                                <div style={{ fontSize: '10px', color: '#808080' }}>{t.skillsDesc}</div>
                            </div>
                        </div>

                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('experience', {
                                title: language === 'pt' ? 'Experiência Profissional' : 'Professional Experience',
                                icon: '/icons/Certificate.png',
                                component: Experience,
                                width: 700, height: 500,
                            })}
                        >
                            <img src="/icons/Certificate.png" alt="" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.experience}</div>
                                <div style={{ fontSize: '10px', color: '#808080' }}>{t.experienceDesc}</div>
                            </div>
                        </div>

                        <div className="xp-start-menu-separator" />

                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('contact', {
                                title: language === 'pt' ? 'Contato — Outlook Express' : 'Contact — Outlook Express',
                                icon: '/icons/Outlook Express.png',
                                component: Contact,
                                width: 550, height: 400,
                            })}
                        >
                            <img src="/icons/Outlook Express.png" alt="" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.contact}</div>
                                <div style={{ fontSize: '10px', color: '#808080' }}>{t.contactDesc}</div>
                            </div>
                        </div>
                    </div>

                    <div className="xp-start-menu-right">
                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('about', {
                                title: language === 'pt' ? 'Sobre Mim — Pedro Lemos' : 'About Me — Pedro Lemos',
                                icon: '/icons/User Accounts.png',
                                component: AboutMe,
                                width: 680, height: 500,
                            })}
                        >
                            <img src="/icons/My Documents.png" alt="" />
                            <span>{t.myDocuments}</span>
                        </div>
                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('projects', {
                                title: language === 'pt' ? 'Meus Projetos' : 'My Projects',
                                icon: '/icons/My Documents.png',
                                component: Projects,
                                width: 720, height: 500,
                            })}
                        >
                            <img src="/icons/My Computer.png" alt="" />
                            <span>{t.myComputer}</span>
                        </div>
                        <div
                            className="xp-menu-item"
                            onClick={() => openAndClose('skills', {
                                title: language === 'pt' ? 'Habilidades — System Properties' : 'Skills — System Properties',
                                icon: '/icons/System Properties.png',
                                component: Skills,
                                width: 500, height: 520,
                            })}
                        >
                            <img src="/icons/Control Panel.png" alt="" />
                            <span>{t.controlPanel}</span>
                        </div>

                        <div className="xp-start-menu-separator" />

                        <div
                            className="xp-menu-item"
                            onClick={() => window.open('https://github.com/Pedro-Lemos', '_blank')}
                        >
                            <img src="/icons/Internet Explorer 6.png" alt="" />
                            <span>{t.github}</span>
                        </div>
                        <div
                            className="xp-menu-item"
                            onClick={() => window.open('https://linkedin.com/in/pedrohnlemos', '_blank')}
                        >
                            <img src="/icons/My Network Places.png" alt="" />
                            <span>{t.linkedin}</span>
                        </div>
                    </div>
                </div>

                <div className="xp-start-menu-footer">
                    <button onClick={() => window.open('https://github.com/Pedro-Lemos', '_blank')}>
                        <img src="/icons/Logout.png" alt="" />
                        {t.github}
                    </button>
                    <button onClick={() => window.open('https://linkedin.com/in/pedrohnlemos', '_blank')}>
                        <img src="/icons/Power.png" alt="" />
                        {t.linkedin}
                    </button>
                </div>
            </div>
        </>
    )
}
