const stylesHeader = {
  header: {
    bgcolor: 'primary.main',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0px',
    zIndex: '99',
    width: '100%',
    WebkitOverflowScrolling: 'touch',
    overflowY: 'scroll',
    overflowX: 'hidden',
    p: '10px',
    '& .header__container': {
      maxWidth: '1200px',
      padding: ['0 0', '0 20px'],
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      },
      '& img': {
        height: '100%',
      },
    },
  },
}

export default stylesHeader
