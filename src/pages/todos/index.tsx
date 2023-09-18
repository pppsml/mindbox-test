import { Center, Container } from '@mantine/core'

import { TodoList } from '@/widgets/TodoList'

export const TodosPage = () => {
  return (
    <Container>
      <Center>
        <TodoList />
      </Center>
    </Container>
  )
}