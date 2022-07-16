import { FC } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { styled } from '@mui/system'

const Panel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
})

/**
 * Components that care about how data is shown to the user.
 */
export const Presenter: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: '#FBFCFA',
        color: '#34495E',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
        }}
      >
        User Registration
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          gap: '1rem',
          border: 'solid 2px #34495E',
          borderRadius: '.3rem',
        }}
      >
        <Panel>
          <Typography variant="h3">Account</Typography>
          <TextField placeholder="Account Name" />
        </Panel>
        <Panel>
          <Typography variant="h3">Password</Typography>
          <TextField placeholder="Password" type="password" />
        </Panel>
      </Box>
    </Box>
  )
}
