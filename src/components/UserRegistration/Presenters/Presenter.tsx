import { FC, useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import {
  UserRegistration,
  userRegistrationScheme,
  RegisterUser,
  RegisterUserResult,
} from '@models'
import { SettingsAccount } from './SettingsAccount'
import { SettingsUserProfile } from './SettingsUserProfile'
import { SettingsRegister } from './SettingsRegister'
import { SettingsRegisterDialog } from './SettingRegisterDialog'

/**
 * Properties of component for user registration form.
 */
type Props = {
  /**
   * Register a user account.
   */
  registerUser: RegisterUser
}

/**
 * Component for user registration form.
 */
export const Presenter: FC<Props> = ({ registerUser }) => {
  const [isDialogOpened, setDialogOpen] = useState<boolean>(false)
  const [registerUserResult, setRegisterUserResult] =
    useState<RegisterUserResult>({
      email: '',
      message: '',
    })

  const methods = useForm<UserRegistration>({
    resolver: zodResolver(userRegistrationScheme),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<UserRegistration> = async (data) => {
    setDialogOpen(true)
    console.log(data)
    const result = await registerUser(data)
    setRegisterUserResult(result)
  }

  const handleOnClickDialogOk = () => {
    setDialogOpen(false)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
          <SettingsAccount />
          <SettingsUserProfile />
          <SettingsRegister />
          <SettingsRegisterDialog
            open={isDialogOpened}
            result={registerUserResult}
            onClickOk={handleOnClickDialogOk}
          />
        </Box>
      </form>
    </FormProvider>
  )
}
