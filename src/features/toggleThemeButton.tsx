import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { TbSun, TbMoonStars } from 'react-icons/tb'

export const ColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
    variant="outline"
    color={colorScheme === 'dark' ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}>
      { colorScheme === 'dark' ? <TbSun size='1.1rem' /> : <TbMoonStars size='1.1rem' />  }
    </ActionIcon>
  )
}