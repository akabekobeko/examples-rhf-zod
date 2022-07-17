import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Alert,
} from '@mui/material'
import { UserRegistration, userRegistrationScheme } from '@models'
import { SettingItem } from './parts/SettingItem'
import { SettingItemGroup } from './parts/SettingItemGroup'

/**
 * Component for user registration form.
 */
export const Presenter: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>({
    resolver: zodResolver(userRegistrationScheme),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<UserRegistration> = (data) => {
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
            placeholder="name@example.com"
            type="email"
            {...register('email')}
          />
          {errors.email?.message && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
        </SettingItem>
        <SettingItem label="Password *">
          <TextField
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          {errors.password?.message && (
            <Alert severity="error">{errors.password.message}</Alert>
          )}
        </SettingItem>
      </SettingItemGroup>
      <SettingItemGroup>
        <SettingItem label="Display Name">
          <TextField placeholder="Name" {...register('displayName')} />
          {errors.displayName?.message && (
            <Alert severity="error">{errors.displayName.message}</Alert>
          )}
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
