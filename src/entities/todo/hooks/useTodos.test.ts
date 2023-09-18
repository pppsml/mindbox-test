import { beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react'

import { useTodos } from './useTodos'

import { Todo } from '../model'

describe('useTodos', () => {
  const initialTodos: Todo[] = [
    {
      id: '1',
      title: 'new todo 1',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'new todo 2',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'new todo 3',
      isCompleted: false,
    },
    {
      id: '4',
      title: 'new todo 4',
      isCompleted: false,
    },
  ]
  it('should set the passed value as the default value', () => {
    const { result } = renderHook(() => useTodos({ initialTodos }))

    expect(result.current.todos).toBe(initialTodos)
  })

  
  it('should add new todos', () => {
    const { result } = renderHook(() => useTodos({ initialTodos }))
    
    act(() => {
      result.current.addTodo('add new todo 1')
      result.current.addTodo('add new todo 2')
    })
    
    expect(result.current.todos).toHaveLength(initialTodos.length + 2)
  })
  
  it('should delete todos', () => {
    const { result } = renderHook(() => useTodos({ initialTodos }))

    act(() => {
      result.current.deleteTodo('1')
      result.current.deleteTodo('2')
    })

    expect(result.current.todos).toHaveLength(2)
  })

  it('should toggle todo.isCompleted field', () => {
    const { result } = renderHook(() => useTodos({ initialTodos }))

    act(() => {
      result.current.toggleCompleted('1')
    })

    expect(result.current.todos[0].isCompleted).toBeTruthy()
  })
})