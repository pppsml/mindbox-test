

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type AddTodo = (title: Todo['title']) => void
export type ToggleTodoComplete = (id: Todo['id']) => void
export type DeleteTodo = (id: Todo['id']) => void