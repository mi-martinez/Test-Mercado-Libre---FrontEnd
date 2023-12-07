const styleGlobalSearch = {
  globalSearch: {
    width: '100%',
    '& .nav-search': {
      position: 'relative',
      width: '100%',
      margin: '0 auto',
      '& .nav-search_input': {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
        borderRadius: '0px',
        background: 'white',
        width: '100%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'red',
          },
        },
      },
      '& .nav-search__icon': {
        position: 'absolute',
        right: '0',
        top: '0',
        background: '#e6e6e699',
        width: '36px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #dbdbdb7d',
        cursor: 'pointer',
      },
    },
  },
}

export default styleGlobalSearch
