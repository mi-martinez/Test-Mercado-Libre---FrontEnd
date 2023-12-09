import { Box, Link } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import GlobalSearch from '../GlobalSearch/GlobalSearch'

import logoMobile from './images/meli-isotipo.svg'
import logoDesktop from './images/mercado-libre.svg'
import stylesHeader from './styles/styles'

const HeaderBox = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const logo = matches ? logoDesktop : logoMobile

  return (
    <Box sx={stylesHeader.headerTop}>
      <Box className="header__container">
        <Link href="/" underline="none">
          <Box
            width={matches ? '120px' : '50px'}
            sx={{
              background: `url(${logo}) no-repeat center center`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
        </Link>
        <GlobalSearch />
      </Box>
    </Box>
  )
}

export default HeaderBox
