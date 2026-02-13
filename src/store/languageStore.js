import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang?.startsWith('en')) return 'en'
  return 'pt'
}

const useLanguageStore = create(
  persist(
    (set) => ({
      language: getBrowserLanguage(),
      
      setLanguage: (lang) => set({ language: lang }),
      
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'pt' ? 'en' : 'pt' 
      })),
    }),
    {
      name: 'language-storage',
    }
  )
)

export default useLanguageStore
