import { useEffect, useState } from 'react'

import { Grid, Box } from '@mui/material'
import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductDetailsPage = ({ id }) => {
  const [product, setProduct] = useState({
    product: {},
    description: '',
  })
  console.log('product', product)
  const [loading, setLoading] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const getProduct = async (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`
    const urlDescription = `https://api.mercadolibre.com/items/${id}/description`
    setLoading(true)
    try {
      const response = await axios.get(url)
      const data = await response.data
      const responseDescription = await axios.get(urlDescription)
      const dataDescription = await responseDescription.data
      setProduct({
        product: data,
        description: dataDescription.plain_text,
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  return (
    <>
      <MetaTags
        title={product !== undefined ? product.product.title : ''}
        description={product !== undefined ? product.description : ''}
      />
      <Box
        sx={{
          background: 'white',
          boxShadow: '0px 20px 20px #a8a8a840',
          mb: '16px',
          mt: '30px',
          p: '0 0 ',
          ml: ['-15px', '0'],
          mr: ['-15px', '0'],
        }}
      >
        {!loading && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '16px',
                    alignItems: 'flex-start',
                    borderBottom: '1px solid #eeeeee',
                    cursor: 'pointer',
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
                        border:
                          currentImage === i ? '2px solid #3483fa' : 'none',
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
                      <img
                        key={i}
                        src={item.url}
                        alt={product?.product?.title}
                      />
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '600px',
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
            </Grid>
            <Grid item xs={12} md={4}>
              <h1>{product !== undefined ? product?.product?.title : ''}</h1>
              <h2>{product !== undefined ? product?.product?.price : ''}</h2>
              <button>Comprar</button>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  )
}

export default ProductDetailsPage
