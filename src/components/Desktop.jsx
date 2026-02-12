import DesktopIcon from './DesktopIcon'
import Window from './Window'
import Taskbar from './Taskbar'
import StartMenu from './StartMenu'
import useWindowStore from '../store/windowStore'

import AboutMe from '../windows/AboutMe'
import Projects from '../windows/Projects'
import Skills from '../windows/Skills'
import Experience from '../windows/Experience'
import PaintWindow from '../windows/PaintWindow'
import RecycleBin from '../windows/RecycleBin'
import Contact from '../windows/Contact'

const desktopIcons = [
    {
        id: 'about',
        icon: '/icons/My Computer.png',
        label: 'Sobre Mim',
        windowConfig: {
            title: 'Sobre Mim — Pedro Lemos',
            icon: '/icons/My Computer.png',
            component: AboutMe,
            width: 680,
            height: 500,
        },
    },
    {
        id: 'projects',
        icon: '/icons/My Documents.png',
        label: 'Meus Projetos',
        windowConfig: {
            title: 'Meus Projetos',
            icon: '/icons/My Documents.png',
            component: Projects,
            width: 720,
            height: 500,
        },
    },
    {
        id: 'skills',
        icon: '/icons/Control Panel.png',
        label: 'Habilidades',
        windowConfig: {
            title: 'Habilidades — System Properties',
            icon: '/icons/Control Panel.png',
            component: Skills,
            width: 500,
            height: 520,
        },
    },
    {
        id: 'experience',
        icon: '/icons/Folder Closed.png',
        label: 'Experiência',
        windowConfig: {
            title: 'Experiência Profissional',
            icon: '/icons/Folder Closed.png',
            component: Experience,
            width: 700,
            height: 500,
        },
    },
    {
        id: 'contact',
        icon: '/icons/Outlook Express.png',
        label: 'Contato',
        windowConfig: {
            title: 'Contato — Outlook Express',
            icon: '/icons/Outlook Express.png',
            component: Contact,
            width: 550,
            height: 400,
        },
    },
    {
        id: 'paint',
        icon: '/icons/Paint.png',
        label: 'Minha Foto',
        windowConfig: {
            title: 'untitled - Paint',
            icon: '/icons/Paint.png',
            component: PaintWindow,
            width: 620,
            height: 520,
        },
    },
    {
        id: 'recycle',
        icon: '/icons/Recycle Bin (full).png',
        label: 'Lixeira',
        windowConfig: {
            title: 'Lixeira',
            icon: '/icons/Recycle Bin (full).png',
            component: RecycleBin,
            width: 550,
            height: 400,
        },
    },
    {
        id: 'github',
        icon: '/icons/Internet Explorer 6.png',
        label: 'GitHub',
        onDoubleClick: () => window.open('https://github.com/Pedro-Lemos', '_blank'),
    },
    {
        id: 'linkedin',
        icon: '/icons/My Network Places.png',
        label: 'LinkedIn',
        onDoubleClick: () => window.open('https://linkedin.com/in/pedrohnlemos', '_blank'),
    },
    {
        id: 'bototrace',
        icon: '/icons/Internet Shortcut.png',
        label: 'BotoTrace',
        onDoubleClick: () => window.open('https://www.bototrace.app', '_blank'),
    },
    {
        id: 'autono',
        icon: '/icons/Internet Shortcut.png',
        label: 'Autôno',
        onDoubleClick: () => window.open('https://www.souautono.app', '_blank'),
    },
    {
        id: 'notepad',
        icon: '/icons/Notepad.png',
        label: 'README.txt',
        windowConfig: {
            title: 'README.txt — Notepad',
            icon: '/icons/Notepad.png',
            component: () => (
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: '12px', padding: '8px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                    {`=================================
  PORTFÓLIO — Pedro Lemos
=================================

Bem-vindo ao meu portfólio!

Este site foi construído como um
desktop do Windows XP para trazer
um toque nostálgico à apresentação
das minhas habilidades e projetos.

-------------------------------
COMO NAVEGAR:
-------------------------------
• Clique duas vezes nos ícones
  para abrir as janelas
• Use o Menu Iniciar para
  navegar entre as seções
• Arraste e redimensione as
  janelas como no XP real!

-------------------------------
FEITO COM:
-------------------------------
• React + Vite
• Tailwind CSS v4
• Zustand (State Management)
• react-rnd (Drag & Resize)
• ♥ e muita nostalgia

Obrigado por visitar! 🖥️`}
                </div>
            ),
            width: 400,
            height: 420,
        },
    },
]

export default function Desktop() {
    const windows = useWindowStore((s) => s.windows)
    const closeStartMenu = useWindowStore((s) => s.closeStartMenu)

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(/xp-bliss.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                overflow: 'hidden',
            }}
            onClick={() => closeStartMenu()}
        >
            {/* Desktop Icons */}
            <div
                style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    bottom: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    gap: '4px',
                    padding: '4px',
                }}
            >
                {desktopIcons.map((item) => (
                    <DesktopIcon
                        key={item.id}
                        id={item.id}
                        icon={item.icon}
                        label={item.label}
                        windowConfig={item.windowConfig}
                        onDoubleClick={item.onDoubleClick}
                    />
                ))}
            </div>

            {/* Windows */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 38,
                    pointerEvents: 'none',
                }}
            >
                <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
                    {Object.keys(windows).map((id) => (
                        <Window key={id} id={id} />
                    ))}
                </div>
            </div>

            {/* Taskbar */}
            <Taskbar />

            {/* Start Menu */}
            <StartMenu />
        </div>
    )
}
