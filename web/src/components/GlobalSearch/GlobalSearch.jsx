import SearchIcon from '@mui/icons-material/Search'
import { FormControl, TextField, Box } from '@mui/material'

import styleGlobalSearch from './styles/styles'

const GlobalSearch = () => {
  return (
    <>
      <Box sx={styleGlobalSearch.globalSearch}>
        <FormControl fullWidth className="nav-search">
          <TextField
            id="search-input"
            className="nav-search_input"
            variant="outlined"
            placeholder="Nunca dejes de buscar"
            size="small"
          />

          <Box className="nav-search__icon">
            <SearchIcon />
          </Box>
        </FormControl>
      </Box>
    </>
  )
}

export default GlobalSearch
