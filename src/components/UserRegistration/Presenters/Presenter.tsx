import { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import { UserRegistration, userRegistrationScheme } from '@models'
import { SettingsAccount } from './SettingsAccount'
import { SettingsUserProfile } from './SettingsUserProfile'
import {
  SettingsRegister,
  Props as SettingsRegisterProps,
} from './SettingsRegister'

/**
 * Properties of component for user registration form.
 */
type Props = SettingsRegisterProps & {
  // Define if additions are needed.
}

/**
 * Component for user registration form.
 */
export const Presenter: FC<Props> = ({ registerUser }) => {
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
        <SettingsRegister registerUser={registerUser} />
      </FormProvider>
    </Box>
  )
}
