import { ActionIcon, ActionIconProps, useMantineColorScheme } from '@mantine/core'
import { TbSun, TbMoonStars } from 'react-icons/tb'

type Props = Omit<ActionIconProps, 'variant' | 'color' | 'onClick'>

export const ColorSchemeButton = (props: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
    {...props}
    variant="outline"
    color={colorScheme === 'dark' ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}>
      { colorScheme === 'dark' ? <TbSun size='70%' /> : <TbMoonStars size='1.1rem' />  }
    </ActionIcon>
  )
}