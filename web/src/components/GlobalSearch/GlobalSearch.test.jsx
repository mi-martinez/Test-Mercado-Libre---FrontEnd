import { render } from '@redwoodjs/testing/web'

import GlobalSearch from './GlobalSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GlobalSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalSearch />)
    }).not.toThrow()
  })
})
