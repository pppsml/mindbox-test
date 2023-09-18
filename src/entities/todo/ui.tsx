import { Card, Text, ActionIcon, Flex, createStyles } from "@mantine/core"
import { memo } from "react";
import { TbCheck, TbTrash, TbX } from "react-icons/tb";

import { Todo, DeleteTodo, ToggleTodoComplete } from "./model"

interface Props {
  todo: Todo;
  toggleIsCompleted: ToggleTodoComplete;
  deleteTodo: DeleteTodo;
}

const useStyles = createStyles(theme => ({
  completedText: {
    textDecoration: 'line-through',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]
  },
}))

export const TodoRow = memo(({
  todo: {
    id,
    title,
    isCompleted,
  },
  toggleIsCompleted,
  deleteTodo
}: Props) => {
  const { classes } = useStyles()

  const toggleCompleteHandler = () => {
    toggleIsCompleted(id)
  }

  const deleteHandler = () => {
    deleteTodo(id)
  }

  return (
    <Card withBorder id={`todo-${id}`}>
      <Flex align='center' justify='space-between' gap='md'>
        <Text className={isCompleted ? classes.completedText : ''}>{title}</Text>
        <Flex align='center' gap='xs'>
          <ActionIcon
            onClick={toggleCompleteHandler}
            variant='outline'
            title={isCompleted ? 'Отметить невыполненным' : 'Отметить выполненным'}
            color={isCompleted ? 'red' : 'green'}
          >
            {
              isCompleted ? <TbX size='70%' /> : <TbCheck size='70%' />
            }
          </ActionIcon>
          <ActionIcon onClick={deleteHandler} variant='outline' color='red'>
            <TbTrash size='70%' />
          </ActionIcon>
        </Flex>
      </Flex>
    </Card>
  )
})