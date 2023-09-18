import { useState } from "react"

import { Todo } from "./model"
import { generateId } from "@/shared/lib"

interface useTodosOptions {
  /**
   * @param {string} initialTodos
   */
  initialTodos?: Todo[]
}


type AddTodo = (title: Todo['title']) => void
type CompleteTodo = (id: Todo['id']) => void

interface useTodosReturnType {
  todos: Todo[];
  addTodo: AddTodo;
  toggleIsCompleted: CompleteTodo;
}


export const useTodos = (options?: useTodosOptions):useTodosReturnType => {
  const [ todos, setTodos ] = useState(options?.initialTodos || [])

  const addTodo: AddTodo = (title) => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      createdAd: Date.now(),
      isCompleted: false,
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const toggleIsCompleted: CompleteTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }

      return todo
    })

    setTodos(newTodos)
  }
  
  return {
    todos,
    addTodo,
    toggleIsCompleted,
  } as useTodosReturnType
}