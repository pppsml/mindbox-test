import { Header, createStyles, Container, Title, ActionIcon } from '@mantine/core'
import { IoLogoGithub } from 'react-icons/io5'

import { ColorSchemeButton } from '@/features/toggleThemeButton'

const useStyles = createStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  buttonRow: {
    display: 'flex',
    gap: '.5rem'
  }
})

export const HeaderWidget = () => {
  const { classes } = useStyles()

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Title>Mindbox TODO</Title>
        <div className={classes.buttonRow}>
          <ActionIcon component='a' href='https://github.com/pppsml/mindbox-test' variant='outline' size='lg'>
            <IoLogoGithub size='70%' />
          </ActionIcon>
          <ColorSchemeButton size='lg' />
        </div>
      </Container>
    </Header>
  )
}