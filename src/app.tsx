import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Portifolio } from './pages/Portifolio'
import { LanguageProvider } from './styles/languages/LanguageProvider'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider>
        <GlobalStyle />
        <Portifolio/>
      </LanguageProvider>
    </ThemeProvider>  
  )
}
