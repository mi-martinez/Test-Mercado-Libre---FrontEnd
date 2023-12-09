import { Box, Typography, Button, Grow, Alert } from '@mui/material'

const Author = () => {
  const styles = {
    alert: {
      mt: '20px',
      '& .MuiAlert-message': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      },
    },
    imageBox: {
      '& img': {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        marginRight: '10px',
      },
    },
    linkBox: {
      '& a': {
        color: '#3483fa',
        textDecoration: 'none',
      },
    },
  }

  return (
    <>
      <Alert severity="success" icon={false} sx={styles.alert}>
        <Box sx={styles.imageBox}>
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGhYQESNFGSLA/profile-displayphoto-shrink_400_400/0/1682626764637?e=1707350400&v=beta&t=Gm57FnX17U2ld-YuGSuY3F9RaRWr4O2ZGf3AQUElYsk"
            alt="Michael"
          />
        </Box>
        <Box sx={styles.linkBox}>
          Esta fue una demostración de frontEnd realizada por Michael Giovanny
          Martinez para Mercado Libre.
          <a
            href="https://www.linkedin.com/in/michael-giovanny-martinez/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Ver perfil
          </a>
        </Box>
      </Alert>
    </>
  )
}

export default Author
