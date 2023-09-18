import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TodosPage } from '.'

describe('TodosPage', () => {
  it('should be in document', () => {
    render(<TodosPage />)
    expect(screen.getByText('Задачи')).toBeInTheDocument()
  })
})