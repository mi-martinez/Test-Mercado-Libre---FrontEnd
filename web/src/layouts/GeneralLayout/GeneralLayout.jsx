import { Container } from '@mui/material'

import Header from 'src/components/Header/Header'

const GeneralLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        sx={{
          pt: '60px',
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
    </>
  )
}

export default GeneralLayout
