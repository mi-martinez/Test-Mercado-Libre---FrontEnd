import { useEffect, useState } from 'react'

import {
  Grid,
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  Grow,
} from '@mui/material'
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

  const [openThanks, setOpenThanks] = useState(false)

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
                  {product !== undefined && product?.description !== ''
                    ? product?.description
                    : 'Este producto no tiene descripción'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  padding: '0 20px',
                  mt: '14px',
                }}
              >
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
                  sx={{
                    fontWeight: '600',
                    mb: '12px',
                    mt: '6px',
                  }}
                >
                  {product !== undefined ? product?.product?.title : ''}
                </Typography>

                <Box
                  sx={{
                    mt: '28px',
                  }}
                >
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
                    sx={{
                      mt: '60px',
                      backgroundColor: '#3483fa',
                      width: '100%',
                      boxShadow: 'none',
                      padding: '14px 10px',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontSize: '18px',
                      fontWeight: '300',
                      '&:hover': {
                        backgroundColor: '#3483fa',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => setOpenThanks(true)}
                  >
                    Comprar
                  </Button>

                  <Grow in={openThanks}>
                    <Alert
                      severity="success"
                      icon={false}
                      sx={{
                        mt: '20px',
                        '& .MuiAlert-message': {
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          '& img': {
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            marginRight: '10px',
                          },
                        }}
                      >
                        <img
                          src="https://media.licdn.com/dms/image/D4E03AQGhYQESNFGSLA/profile-displayphoto-shrink_400_400/0/1682626764637?e=1707350400&v=beta&t=Gm57FnX17U2ld-YuGSuY3F9RaRWr4O2ZGf3AQUElYsk"
                          alt="Michael"
                        />
                      </Box>
                      <Box
                        sx={{
                          '& a': {
                            color: '#3483fa',
                            textDecoration: 'none',
                          },
                        }}
                      >
                        Esta fue una demostración de frontEnd realizada por
                        Michael Giovanny Martinez para Mercado Libre.
                        <a
                          href="https://www.linkedin.com/in/michael-giovanny-martinez/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {' '}
                          Ver perfil
                        </a>
                      </Box>
                    </Alert>
                  </Grow>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  )
}

export default ProductDetailsPage
