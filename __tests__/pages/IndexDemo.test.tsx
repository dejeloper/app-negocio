import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import IndexDemo from '../../src/pages/IndexDemo'

describe('IndexDemo Testing', () => {
  beforeEach(() => {
    render(<IndexDemo title="Prueba Testing" />)
  })

  test('should show message all the time', () => {
    expect(screen.getByText(/Testing/)).toBeDefined()
  })
})
