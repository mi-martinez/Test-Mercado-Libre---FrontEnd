import { useEffect, useState } from 'react'

import { Grid, Box, Typography, Button, Grow } from '@mui/material'
import axios from 'axios'

import { MetaTags } from '@redwoodjs/web'

import Author from 'src/components/Author/Author'
import ProductDetailsPageSkeleton from 'src/components/ProductDetailsPageSkeleton/ProductDetailsPageSkeleton'
import ProductGallery from 'src/components/ProductGallery/ProductGallery'

import stylesProductDetailsPage from './styles/styles'

const ProductDetailsPage = ({ id }) => {
  const [product, setProduct] = useState({
    product: {},
    description: '',
  })
  const [loading, setLoading] = useState(false)

  const [openThanks, setOpenThanks] = useState(false)
  const [error, setError] = useState({
    error: false,
    message: '',
  })

  const currencyId = product?.product?.currency_id || 'ARS'

  const formatPrice = (price, split) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currencyId,
      minimumFractionDigits: 0,
    })
    // hacer split en caracter ,
    const priceSplit = formatter.format(price).split(',')
    if (split && priceSplit.length > 1) {
      return (
        <>
          <Typography variant="span">{priceSplit[0]}</Typography>
          <Typography
            variant="span"
            sx={{ fontWeight: '400', fontSize: '19px', marginTop: '-4px' }}
          >
            {priceSplit[1]}
          </Typography>
        </>
      )
    }

    return formatter.format(price)
  }

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
      setError({
        error: true,
        message:
          'El producto al que intenta acceder no existe, por favor compruebe la URL',
      })
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
      <Box sx={stylesProductDetailsPage.container}>
        {!loading ? (
          <>
            {error.error ? (
              <Typography
                variant="h4"
                sx={{
                  fontSize: '14px',
                  color: '#999999',
                  textAlign: 'center',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {error.message}
              </Typography>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <ProductGallery product={product} />
                  <Box sx={stylesProductDetailsPage.descriptionBox}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: '400', mb: '12px' }}
                    >
                      Descripción del producto
                    </Typography>
                    <Typography variant="body1">
                      {product !== undefined && product?.description !== ''
                        ? product?.description
                        : 'Este producto no tiene descripción'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: '0 20px', mt: '14px' }}>
                    <Typography variant="body1">
                      {product !== undefined
                        ? product?.product?.condition === 'new'
                          ? 'Nuevo'
                          : 'Usado'
                        : ''}{' '}
                      -{' '}
                      {product !== undefined
                        ? product?.product?.initial_quantity
                        : ''}{' '}
                      vendidos
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: '600', mb: '12px', mt: '6px' }}
                    >
                      {product !== undefined ? product?.product?.title : ''}
                    </Typography>
                    <Box sx={stylesProductDetailsPage.priceBox}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: '600',
                          mt: '6px',
                          fontSize: '38px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                        }}
                      >
                        {formatPrice(product?.product?.price, true)}
                      </Typography>
                      {product?.product?.original_price && (
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#999999',
                            textDecoration: 'line-through',
                            marginTop: '8px',
                            fontSize: '16px',
                          }}
                        >
                          {formatPrice(product?.product?.original_price)}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        sx={stylesProductDetailsPage.buyButton}
                        onClick={() => setOpenThanks(true)}
                      >
                        Comprar
                      </Button>
                      <Grow in={openThanks}>
                        <Box>
                          <Author />
                        </Box>
                      </Grow>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </>
        ) : (
          <ProductDetailsPageSkeleton />
        )}
      </Box>
    </>
  )
}

export default ProductDetailsPage
