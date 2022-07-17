import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Alert,
} from '@mui/material'
import { SettingItem } from './SettingItem'
import { SettingItemGroup } from './SettingItemGroup'

/**
 * User registration settings.
 */
type RegistrationSettings = {
  /**
   * E-mail.
   */
  email: string
  /**
   * Password.
   */
  password: string
  /**
   * Display name in this service.
   */
  displayName: string
  /**
   * User profile.
   */
  profile: string
}

/**
 * Component for user registration form.
 */
export const Presenter: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSettings>()

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
            id="email"
            placeholder="name@example.com"
            type="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          {errors.email && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
        </SettingItem>
        <SettingItem label="Password *">
          <TextField
            id="password"
            placeholder="Password"
            type="password"
            {...register('password', {
              required: true,
              pattern: {
                value: /^[A-Za-z0-9]{16,64}$/,
                message:
                  'Please enter between 16 and 64 alphanumeric characters.',
              },
            })}
          />
          {errors.password && (
            <Alert severity="error">{errors.password.message}</Alert>
          )}
        </SettingItem>
      </SettingItemGroup>
      <SettingItemGroup>
        <SettingItem label="Display Name">
          <TextField
            id="displayName"
            placeholder="Name"
            {...register('displayName', {
              minLength: {
                value: 4,
                message: 'Please enter at least 4 characters.',
              },
            })}
          />
          {errors.displayName && (
            <Alert severity="error">{errors.displayName.message}</Alert>
          )}
        </SettingItem>
        <SettingItem label="Profile">
          <TextareaAutosize
            id="profile"
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
