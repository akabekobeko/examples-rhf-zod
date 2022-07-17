import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { UserRegistration } from '@components'

/**
 * Component fot het home page.
 */
const Home: NextPage = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <UserRegistration />
  </Box>
)

export default Home
