import { useEffect, useState } from 'react'

import { Grid, Box } from '@mui/material'

const ProductGallery = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['row', 'column'],
            gap: '6px',
            padding: '16px',
            alignItems: 'flex-start',
            borderBottom: '1px solid #eeeeee',
            cursor: 'pointer',
            order: [2, 1],
          }}
        >
          {product?.product?.pictures?.map((item, i) => (
            <Box
              key={i}
              sx={{
                maxWidth: '50px',
                maxHeight: '50px',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                p: '6px',
                border: currentImage === i ? '2px solid #3483fa' : 'none',
                borderRadius: '4px',
                overflow: 'hidden', // Asegura que la imagen no se desborde del contenedor
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                },
              }}
              onClick={() => setCurrentImage(i)}
            >
              <img key={i} src={item.url} alt={product?.product?.title} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: ['400px', '600px'],
            order: [1, 2],
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          <img
            src={
              product?.product?.pictures
                ? product.product.pictures[currentImage].url
                : ''
            }
            alt={product?.product?.title}
          />
        </Box>
      </Box>
    </>
  )
}

export default ProductGallery
