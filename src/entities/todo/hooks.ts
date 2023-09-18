import { useLocalStorage } from "@mantine/hooks";

import { AddTodo, ToggleTodoComplete, DeleteTodo, Todo } from "./model"
import { generateId } from "@/shared/lib"

interface useTodosOptions {
  /**
   * @param {string} initialTodos
   */
  initialTodos?: Todo[]
}

interface useTodosReturnType {
  todos: Todo[];
  addTodo: AddTodo;
  deleteTodo: DeleteTodo;
  toggleCompleted: ToggleTodoComplete;
}


export const useTodos = (options?: useTodosOptions):useTodosReturnType => {
  const [ todos, setTodos ] = useLocalStorage({ key: 'todos', defaultValue: options?.initialTodos || [] })

  const addTodo: AddTodo = (title) => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      isCompleted: false,
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const toggleCompleted: ToggleTodoComplete = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }

      return todo
    })

    setTodos(newTodos)
  }

  const deleteTodo: DeleteTodo = (id) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.filter(todo => todo.id !== id)

      return newTodos
    })
  }
  
  return {
    todos,
    addTodo,
    toggleCompleted,
    deleteTodo,
  } as useTodosReturnType
}