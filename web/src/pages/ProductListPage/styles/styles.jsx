const stylesProductListPage = {
  mainContainer: {
    background: 'white',
    boxShadow: '0px 20px 20px #a8a8a840',
    mb: '16px',
    p: '0 0 ',
    ml: ['-15px', '0'],
    mr: ['-15px', '0'],
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    mb: '16px',
  },
  resultsTextContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    pl: '15px',
  },
  resultsText: {
    variant: 'body1',
    sx: { fontSize: '14px', color: '#999999' },
  },
  select: {
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
  },
  pagination: {
    '& .MuiPaginationItem-root': {
      color: '#3483fa',
    },
    '& .Mui-selected': {
      color: '#3483fa',
      background: '#fff !important',
    },
    '& .MuiPaginationItem-root:hover': {
      color: '#3483fa',
      background: '#f2f2f2',
    },
  },
}

export default stylesProductListPage
