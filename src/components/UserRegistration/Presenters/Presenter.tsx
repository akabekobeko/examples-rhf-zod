import { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import { UserRegistration, userRegistrationScheme } from '@models'
import { SettingsAccount } from './SettingsAccount'
import { SettingsUserProfile } from './SettingsUserProfile'
import { SettingsRegister } from './SettingsRegister'

/**
 * Component for user registration form.
 */
export const Presenter: FC = () => {
  const methods = useForm<UserRegistration>({
    resolver: zodResolver(userRegistrationScheme),
    mode: 'onChange',
  })

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
      <FormProvider {...methods}>
        <SettingsAccount />
        <SettingsUserProfile />
        <SettingsRegister />
      </FormProvider>
    </Box>
  )
}
