import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { Box, CardMedia, Skeleton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Link, routes, navigate } from '@redwoodjs/router'

const ProductCardItem = ({ item }) => {
  // console.log('item', item)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const currencyId = item?.currency_id

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currencyId,
      minimumFractionDigits: 0,
    })
    return formatter.format(price)
  }

  const imgUrl = `https://http2.mlstatic.com/D-NQ-NP-${item?.thumbnail_id}-O.webp`

  const handleClick = () => {
    navigate(routes.productDetails({ id: item.id }))
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '16px',
          alignItems: 'flex-start',
          borderBottom: '1px solid #eeeeee',
          cursor: 'pointer',
        }}
        onClick={() => handleClick()}
      >
        <Box
          sx={{
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: ['150px', '200px'],
            height: ['150px', '200px'],
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              height: ['150px', '200px'],
              objectFit: 'contain',
              minWidth: ['150px', '200px'],
            }}
            image={imgUrl}
            alt={item?.title}
          />
        </Box>
        <Box
          sx={{
            flex: '1',
            paddingTop: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: '22px',
                fontWeight: '400',
              }}
            >
              {formatPrice(item?.price)}
            </Typography>
            {item?.original_price && (
              <Typography
                variant="body1"
                sx={{
                  color: '#999999',
                  fontSize: '12px',
                  textDecoration: 'line-through',
                }}
              >
                {formatPrice(item?.original_price)}
              </Typography>
            )}
            {item?.shipping?.free_shipping && (
              <Box
                sx={{
                  height: '24px',
                  width: '24px',
                  background: '#05a651',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  borderRadius: '30px',
                }}
              >
                <LocalShippingIcon
                  sx={{ fontSize: '14px', color: '#dfffe1' }}
                />
              </Box>
            )}
          </Box>

          {item?.installments && (
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  color: '#7c7c7c',
                }}
              >
                en {item?.installments?.quantity}x{' '}
                {formatPrice(item?.installments?.amount)}
              </Typography>
            </Box>
          )}
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              mt: '12px',
              textWrap: 'wrap',
            }}
          >
            {item?.title}
          </Typography>
        </Box>
        {matches && (
          <Box
            sx={{
              minWidth: '180px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                color: '#999999',
                pt: '16px',
              }}
            >
              {item?.seller?.nickname}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  )
}

export default ProductCardItem
