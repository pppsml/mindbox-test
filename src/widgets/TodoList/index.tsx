import { ChangeEventHandler, FormEventHandler, useMemo, useState } from 'react'
import { ActionIcon, Divider, Flex, TextInput, Tabs } from '@mantine/core'

import { useTodos } from '@/entities/todo/hooks'
import { TodoRow } from '@/entities/todo/ui'
import { TbArrowRight } from 'react-icons/tb'
import { Todo } from '@/entities/todo/model'

export const TodoList = () => {
  const [ newTodoName, setNewTodoName ] = useState<string>('')
  const { todos, addTodo, toggleCompleted, deleteTodo } = useTodos()

  const activeTodos = useMemo<Todo[]>(() => (
    todos.filter(todo => !todo.isCompleted)
  ), [todos])

  const completedTodos = useMemo<Todo[]>(() => (
    todos.filter(todo => todo.isCompleted)
  ), [todos])
  

  const newTodoNameHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTodoName(e.target.value)
  }

  const addTodoHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!newTodoName.trim()) return;

    addTodo(newTodoName)
    setNewTodoName('')
  }

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={addTodoHandler}>
        <TextInput
          rightSection={
            <ActionIcon color='blue' title='Добавить задачу' variant='filled'>
              <TbArrowRight size='70%' />
            </ActionIcon>
          }
          role='textbox'
          name='newTodoName'
          label='Добавить новую задачу'
          placeholder='Введите задачу'
          value={newTodoName}
          onChange={newTodoNameHandler}
        />
      </form>

      <Divider mt='md' mb='xl' />

      <Tabs defaultValue='all'>
        <Tabs.List mb='xs'>
          <Tabs.Tab value='all'>Все</Tabs.Tab>
          <Tabs.Tab value='active'>Активные</Tabs.Tab>
          <Tabs.Tab value='completed'>Выполненные</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='all'>
          <Flex direction='column' gap='md'>
            {todos.map(todo => (
              <TodoRow todo={todo} deleteTodo={deleteTodo} toggleIsCompleted={toggleCompleted} />
            ))}
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value='active'>
          <Flex direction='column' gap='md'>
            {activeTodos.map(todo => (
              <TodoRow todo={todo} deleteTodo={deleteTodo} toggleIsCompleted={toggleCompleted} />
            ))}
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value='completed'>
          <Flex direction='column' gap='md'>
            {completedTodos.map(todo => (
              <TodoRow todo={todo} deleteTodo={deleteTodo} toggleIsCompleted={toggleCompleted} />
            ))}
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}