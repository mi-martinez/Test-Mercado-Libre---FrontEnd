import { useEffect, useState } from 'react'

import { Grid, Box, Typography } from '@mui/material'
import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProductGallery from 'src/components/ProductGallery/ProductGallery'

const ProductDetailsPage = ({ id }) => {
  const [product, setProduct] = useState({
    product: {},
    description: '',
  })
  console.log('product', product)
  const [loading, setLoading] = useState(false)

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
              <ProductGallery product={product} />
              <Box
                sx={{
                  padding: '15px 26px',
                  marginTop: '10px',
                  marginBottom: '26px',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: '400',
                    mb: '12px',
                  }}
                >
                  Descripción del producto
                </Typography>
                <Typography variant="body1">
                  {product !== undefined ? product?.description : ''}
                </Typography>
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
