import { Container } from '@mui/material'

import Header from 'src/components/Header/Header'

const GeneralLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}

export default GeneralLayout
