import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Skeleton, Typography } from '@mui/material'

const Breadcrumbs = ({ data, loading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 0px',
      }}
    >
      {loading ? (
        <Skeleton variant="text" width={100} height={28} />
      ) : (
        <>
          {data?.map((item, index) => (
            <Typography
              variant="body1"
              component="div"
              key={item + index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#88888a',
                fontWeight: '400',
                fontSize: '14px',
              }}
            >
              {item?.values[0]?.name}
              {index < data?.length - 1 && (
                <KeyboardArrowRightIcon
                  sx={{
                    color: '#bdbdbd',
                    fontSize: '18px',
                  }}
                />
              )}
            </Typography>
          ))}
        </>
      )}
    </Box>
  )
}

export default Breadcrumbs
