import { render } from '@redwoodjs/testing/web'

import ProductGallery from './ProductGallery'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductGallery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductGallery />)
    }).not.toThrow()
  })
})
