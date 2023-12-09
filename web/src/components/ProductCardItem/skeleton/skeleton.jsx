import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import {
  Box,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
  Skeleton,
} from '@mui/material'

const ProductCardSkeleton = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
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
          width: '200px',
          height: '200px',
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={matches ? '200px' : '150px'}
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
            <Skeleton variant="text" width="80px" />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#999999',
              fontSize: '12px',
              textDecoration: 'line-through',
            }}
          >
            <Skeleton variant="text" width="50px" />
          </Typography>
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
            <LocalShippingIcon sx={{ fontSize: '14px', color: '#dfffe1' }} />
          </Box>
        </Box>

        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              color: '#7c7c7c',
            }}
          >
            <Skeleton variant="text" width="100px" />
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            mt: '12px',
            textWrap: 'wrap',
          }}
        >
          <Skeleton variant="text" width="80%" />
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
            <Skeleton variant="text" width="100px" />
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ProductCardSkeleton
