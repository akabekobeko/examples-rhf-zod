import { FC } from 'react'
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from '@mui/material'
import { SettingItem } from './SettingItem'
import { SettingItemGroup } from './SettingItemGroup'

/**
 * Component for user registration form.
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
      <SettingItemGroup>
        <SettingItem label="E-mail *">
          <TextField required placeholder="name@example.com" type="email" />
        </SettingItem>
        <SettingItem label="Password *">
          <TextField required placeholder="Password" type="password" />
        </SettingItem>
      </SettingItemGroup>
      <SettingItemGroup>
        <SettingItem label="Display Name">
          <TextField placeholder="Name" />
        </SettingItem>
        <SettingItem label="Profile">
          <TextareaAutosize
            placeholder="Your profiles..."
            minRows={5}
            style={{
              padding: '.5rem',
            }}
          />
        </SettingItem>
      </SettingItemGroup>
      <Button variant="contained">Submit</Button>
    </Box>
  )
}
