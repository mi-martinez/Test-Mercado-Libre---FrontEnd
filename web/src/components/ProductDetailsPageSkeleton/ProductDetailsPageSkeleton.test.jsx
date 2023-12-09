import { render } from '@redwoodjs/testing/web'

import ProductDetailsPageSkeleton from './ProductDetailsPageSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductDetailsPageSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductDetailsPageSkeleton />)
    }).not.toThrow()
  })
})
