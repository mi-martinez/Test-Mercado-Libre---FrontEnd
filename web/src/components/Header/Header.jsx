import { Box, Link } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import GlobalSearch from '../GlobalSearch/GlobalSearch'

import logoMobile from './images/meli-isotipo.svg'
import logoDesktop from './images/mercado-libre.svg'
import stylesHeader from './styles/styles'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <Box sx={stylesHeader.header}>
        <Box className="header__container">
          <Link href="/" underline="none">
            {matches ? (
              <img src={logoDesktop} alt="Mercado Libre" />
            ) : (
              <img src={logoMobile} alt="Mercado Libre" />
            )}
          </Link>
          <GlobalSearch />
        </Box>
      </Box>
    </>
  )
}

export default Header
