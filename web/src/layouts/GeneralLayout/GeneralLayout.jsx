import { Container } from '@mui/material'

import HeaderBox from 'src/components/HeaderBox/HeaderBox'

const GeneralLayout = ({ children }) => {
  return (
    <>
      <HeaderBox />
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
