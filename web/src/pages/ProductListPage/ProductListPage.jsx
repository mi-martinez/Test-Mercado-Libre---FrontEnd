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
    getProducts(search)
  }

  const getProducts = async (item) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${item}&limit=${pagination.limit}&offset=${pagination.offset}`
    setLoading(true)
    try {
      const response = await axios.get(url)
      const data = await response.data
      // console.log(data)
      setProducts(data)
      setPagination({
        ...pagination,
        total: data.paging.total,
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts(search)
  }, [search])

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
            mt: '16px',
          }}
        >
          <Grid container spacing={2}>
            {products?.results?.map((item, i) => (
              <Grid item xs={12} key={i}>
                <ProductCardItem />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Pagination
          count={pagination.total}
          onChange={(e, page) => changePage(e, page)}
          page={pagination.offset / pagination.limit + 1}
        />
      </Box>
    </>
  )
}

export default ProductListPage
