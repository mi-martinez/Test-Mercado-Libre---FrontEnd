import { render } from '@redwoodjs/testing/web'

import HeaderBox from './HeaderBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderBox />)
    }).not.toThrow()
  })
})
