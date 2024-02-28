import { useState } from 'preact/hooks'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Portifolio } from './pages/Portifolio'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Portifolio/>
    </ThemeProvider>  
  )
}
