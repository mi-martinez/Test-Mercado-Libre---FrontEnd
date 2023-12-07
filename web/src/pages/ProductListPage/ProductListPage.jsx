import { useEffect, useState } from 'react'

import { Box, Grid } from '@mui/material'
import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'

const ProductListPage = ({ search }) => {
  // let [item, setItem] = useState(search)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = async (item) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${item}`
    setLoading(true)
    try {
      const response = await axios.get(url)
      const data = await response.data
      console.log(data)
      setProducts(data)
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
        <Breadcrumbs />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {JSON.stringify(products)}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductListPage
