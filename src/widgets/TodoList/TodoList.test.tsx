import { act, render, renderHook, screen, } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { useTodos } from '@/entities/todo/hooks'
import { TodoList } from './index'

describe('TodoList widget', () => {
  it('add todo input should be in document', () => {
    render(<TodoList />)

    expect(screen.getByRole('textbox', {
      name: /добавить новую задачу/i
    })).toBeInTheDocument()

  })

  it('should be change value', async () => {
    render(<TodoList />)

    const input = screen.getByRole('textbox', {
      name: /добавить новую задачу/i
    })

    expect(input).toBeInTheDocument()
    await userEvent.type(input, '123')
    expect(input).toHaveValue('123')
  })
})