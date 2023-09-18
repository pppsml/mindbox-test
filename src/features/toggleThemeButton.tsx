import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { TbSun, TbMoon } from 'react-icons/tb'

export const ColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon onClick={() => toggleColorScheme()}>
      { colorScheme === 'dark' ? <TbSun /> : <TbMoon />  }
    </ActionIcon>
  )
}