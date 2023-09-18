import { Center, Container, Flex, Title } from '@mantine/core'

import { TodoList } from '@/widgets/TodoList'

export const TodosPage = () => {
  return (
    <Container>
      <Center component={Flex} direction='column'>
        <Title order={2}>Задачи</Title>
        <TodoList />
      </Center>
    </Container>
  )
}