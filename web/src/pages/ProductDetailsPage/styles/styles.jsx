const stylesProductDetailsPage = {
  container: {
    background: 'white',
    boxShadow: '0px 20px 20px #a8a8a840',
    mb: '16px',
    mt: '30px',
    p: '0 0 ',
    ml: ['-15px', '0'],
    mr: ['-15px', '0'],
  },
  descriptionBox: {
    padding: '15px 26px',
    marginTop: '10px',
    marginBottom: '26px',
  },
  priceBox: {
    mt: '28px',
  },
  buyButton: {
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
  },
}

export default stylesProductDetailsPage
