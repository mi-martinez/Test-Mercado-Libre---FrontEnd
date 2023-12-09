import { useEffect, useState } from 'react'

import { Grid, Box, Typography, Button, Skeleton } from '@mui/material'

const ProductDetailsPageSkeleton = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Skeleton
            variant="rectangular"
            height={400}
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="text"
            width="80%"
            height={20}
            sx={{ marginBottom: 2 }}
          />
          <Skeleton variant="text" width="60%" height={20} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton
              variant="text"
              width="80%"
              height={40}
              sx={{ marginBottom: 2 }}
            />
            <Skeleton
              variant="text"
              width="60%"
              height={20}
              sx={{ marginBottom: 1 }}
            />
            <Skeleton
              variant="text"
              width="100%"
              height={30}
              sx={{ marginBottom: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ marginBottom: 2 }}
            />
            <Skeleton variant="rectangular" height={50} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductDetailsPageSkeleton
