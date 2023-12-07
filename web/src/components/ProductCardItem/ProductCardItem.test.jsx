import { render } from '@redwoodjs/testing/web'

import ProductCardItem from './ProductCardItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductCardItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductCardItem />)
    }).not.toThrow()
  })
})
