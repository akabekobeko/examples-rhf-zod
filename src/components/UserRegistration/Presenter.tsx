import { FC } from 'react'
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from '@mui/material'
import { styled } from '@mui/system'

/**
 * Panel components that are groups of setting items.
 */
const GroupPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  border: 'solid 2px #34495E',
  borderRadius: '.3rem',
  backgroundColor: '#FBFCFA',
  padding: '1.5rem',
})

/**
 * Panel component that is a single setting item.
 */
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
        gap: '2rem',
        width: '40rem',
        padding: '1.5rem',
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
      <GroupPanel>
        <Panel>
          <Typography variant="h3">E-mail *</Typography>
          <TextField required placeholder="name@example.com" type="email" />
        </Panel>
        <Panel>
          <Typography variant="h3">Password *</Typography>
          <TextField required placeholder="Password" type="password" />
        </Panel>
      </GroupPanel>
      <GroupPanel>
        <Panel>
          <Typography variant="h3">Display Name</Typography>
          <TextField placeholder="Name" />
        </Panel>
        <Panel>
          <Typography variant="h3">Profile</Typography>
          <TextareaAutosize
            placeholder="Your profiles..."
            minRows={5}
            style={{
              padding: '.5rem',
            }}
          />
        </Panel>
      </GroupPanel>
      <Button variant="contained">Submit</Button>
    </Box>
  )
}
