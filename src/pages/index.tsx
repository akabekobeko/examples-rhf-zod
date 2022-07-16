import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { UserRegistration } from '@components'

/**
 * Component fot het home page.
 */
const Home: NextPage = () => (
  <Box sx={{ width: '100wh', height: '100vh' }}>
    <UserRegistration />
  </Box>
)

export default Home
