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
import { useForm, SubmitHandler } from 'react-hook-form'

type RegistrationSettings = {
  email: string
  password: string
  displayName: string
  profile: string
}

/**
 * Component for user registration form.
 */
export const Presenter: FC = () => {
  const { register, handleSubmit } = useForm<RegistrationSettings>()
  const onSubmit: SubmitHandler<RegistrationSettings> = (data) => {
    console.log(data)
  }

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
          <TextField
            required
            placeholder="name@example.com"
            type="email"
            {...register('email')}
          />
        </SettingItem>
        <SettingItem label="Password *">
          <TextField
            required
            placeholder="Password"
            type="password"
            {...register('password')}
          />
        </SettingItem>
      </SettingItemGroup>
      <SettingItemGroup>
        <SettingItem label="Display Name">
          <TextField placeholder="Name" {...register('displayName')} />
        </SettingItem>
        <SettingItem label="Profile">
          <TextareaAutosize
            placeholder="Your profiles..."
            minRows={5}
            style={{
              padding: '.5rem',
            }}
            {...register('profile')}
          />
        </SettingItem>
      </SettingItemGroup>
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Box>
  )
}
