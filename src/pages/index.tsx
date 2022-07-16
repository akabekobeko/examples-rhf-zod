import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { SampleFormContainer } from '@components'

/**
 * Component fot het home page.
 */
const Home: NextPage = () => (
  <Box sx={{ width: '100wh', height: '100vh' }}>
    <SampleFormContainer />
  </Box>
)

export default Home
