

import { useTodos } from "@/entities/todo/hooks"
import { useState } from "react"

export const TodoList = () => {
  const [ newTodoName, setNewTodoName ] = useState<string>('')
  const { todos, addTodo, toggleIsCompleted } = useTodos()

  return (
    <>
      <input value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} />
      <button onClick={() => addTodo(newTodoName)}>Добавить задачу</button>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.isCompleted}</p>
            <button onClick={() => toggleIsCompleted(todo.id)}>{todo.isCompleted ? 'Отметить невыполненным' : 'Отметить выполненым'}</button>
          </div>
        ))
      }
    </>
  )
}