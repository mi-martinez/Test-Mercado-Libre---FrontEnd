import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { FormControl, TextField, Box } from '@mui/material'

import { Link, routes, navigate } from '@redwoodjs/router'

import styleGlobalSearch from './styles/styles'

const GlobalSearch = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  // Resultados de la búsqueda:“/items?search=”
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(routes.productList({ search }))
  }

  return (
    <>
      <Box sx={styleGlobalSearch.globalSearch}>
        <form onSubmit={handleSearch}>
          <FormControl fullWidth className="nav-search">
            <TextField
              id="search-input"
              className="nav-search_input"
              variant="outlined"
              placeholder="Nunca dejes de buscar"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Box
              className="nav-search__icon"
              onClick={() => navigate(routes.productList({ search }))}
            >
              <SearchIcon />
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  )
}

export default GlobalSearch
