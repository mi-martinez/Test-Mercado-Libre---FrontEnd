import { useEffect, useState } from 'react'

import {
  Box,
  Grid,
  Pagination,
  Select,
  MenuItem,
  Typography,
} from '@mui/material'
import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import ProductCardItem from 'src/components/ProductCardItem/ProductCardItem'
import ProductCardSkeleton from 'src/components/ProductCardItem/skeleton'

const ProductListPage = ({ search }) => {
  const [products, setProducts] = useState([])
  // console.log('products', products)
  const [loading, setLoading] = useState(false)

  const [pagination, setPagination] = useState({
    total: 0,
    offset: 0,
    limit: 4,
  })

  const changePage = (e, page) => {
    setPagination({
      ...pagination,
      offset: (page - 1) * pagination.limit,
    })
    getProducts(search, {
      ...pagination,
      offset: (page - 1) * pagination.limit,
    })
  }

  const getProducts = async (item, newPagination) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${item}&limit=${newPagination.limit}&offset=${newPagination.offset}`
    setLoading(true)
    try {
      const response = await axios.get(url)
      const data = await response.data
      setProducts(data)
      // console.log(data)
      setPagination({
        ...newPagination,
        total: data.paging.total,
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts(search, pagination)
  }, [search])

  return (
    <>
      <MetaTags
        title={
          search === undefined ? 'Mercado Libre' : `${search} | Mercado Libre`
        }
        description="Encuentra lo que necesitas, miles de productos de todo tipo en un solo lugar: Mercado Libre"
      />

      <Box>
        <Breadcrumbs loading={loading} data={products?.filters} />
        <Box
          sx={{
            background: 'white',
            boxShadow: '0px 20px 20px #a8a8a840',
            mb: '16px',
            p: '0 0 ',
            ml: ['-15px', '0'],
            mr: ['-15px', '0'],
          }}
        >
          {!loading ? (
            <Grid container spacing={0}>
              {products?.results?.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <ProductCardItem item={item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              {[...Array(4)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              pl: '15px',
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: '14px', color: '#999999' }}
            >
              Resultados por página:
            </Typography>
            <Select
              value={pagination.limit}
              onChange={(e) => {
                setPagination({
                  ...pagination,
                  limit: e.target.value,
                  offset: 0,
                })
                getProducts(search, {
                  ...pagination,
                  limit: e.target.value,
                  offset: 0,
                })
              }}
              sx={{
                height: '30px',
                borderRadius: '0',
                border: 'none',
                '&:focus': {
                  border: 'none',
                  outline: 'none',
                },
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </Box>
          <Pagination
            count={Math.ceil(pagination.total / pagination.limit)}
            shape="rounded"
            onChange={(e, page) => {
              changePage(e, page)
            }}
            page={pagination.offset / pagination.limit + 1}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#3483fa',
              },
              '& .Mui-selected': {
                color: '#3483fa',
                background: '#fff !important',
              },
              // hover
              '& .MuiPaginationItem-root:hover': {
                color: '#3483fa',
                background: '#f2f2f2',
              },
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default ProductListPage
