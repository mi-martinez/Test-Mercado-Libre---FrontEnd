import { useEffect, useState } from 'react'

import { Box, Grid, Pagination } from '@mui/material'
import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import ProductCardItem from 'src/components/ProductCardItem/ProductCardItem'

const ProductListPage = ({ search }) => {
  // let [item, setItem] = useState(search)
  const [products, setProducts] = useState([])
  console.log('products', products)
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
    console.log('Enta a getProducts')
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
  }, [search, pagination.offset])

  useEffect(() => {
    getProducts(search, pagination)
  }, [])

  return (
    <>
      <MetaTags
        title={`${search} | Mercado Libre`}
        description="ProductList page"
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
          <Grid container spacing={0}>
            {products?.results?.map((item, i) => (
              <Grid item xs={12} key={i}>
                <ProductCardItem item={item} loading={loading} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Pagination
          count={Math.ceil(pagination.total / pagination.limit)}
          onChange={(e, page) => {
            changePage(e, page)
          }}
          page={pagination.offset / pagination.limit + 1}
        />
      </Box>
    </>
  )
}

export default ProductListPage
