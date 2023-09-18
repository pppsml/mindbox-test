import { AppShell, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import { TodosPage } from '@/pages/todos'
import { HeaderWidget } from './widgets/Header'

function App() {
  const [ colorScheme, setColorScheme ] = useLocalStorage<ColorScheme>({ key: 'colorScheme', defaultValue: 'light' })

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark'
    setColorScheme(newColorScheme)
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles theme={{ colorScheme }}>
        <AppShell header={<HeaderWidget />}>
          <TodosPage />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
