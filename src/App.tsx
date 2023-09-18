import { useState } from 'react'
import { AppShell, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'

import { TodosPage } from '@/pages/todos'

function App() {
  const preferredColorScheme = useColorScheme((localStorage.getItem('mantine-color-scheme') as ColorScheme) || 'light')
  const [ colorScheme, setColorScheme ] = useState<ColorScheme>(preferredColorScheme)

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles theme={{ colorScheme }}>
        <AppShell>
          <TodosPage />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
