import { render } from '@redwoodjs/testing/web'

import ProductListPage from './ProductListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductListPage />)
    }).not.toThrow()
  })
})
