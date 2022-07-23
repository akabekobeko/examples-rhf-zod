import { FC, useState } from 'react'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { FadeLoader } from 'react-spinners'
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { UserRegistration, RegisterUser, RegisterUserResult } from '@models'

/**
 * Properties of components for registering settings.
 */
export type Props = {
  /**
   * Register a user account.
   */
  registerUser: RegisterUser
}

/**
 * Components for registering settings.
 */
export const SettingsRegister: FC<Props> = ({ registerUser }) => {
  const [isOpened, setOpen] = useState<boolean>(false)
  const [registerUserResult, setRegisterUserResult] =
    useState<RegisterUserResult>({
      email: '',
      message: '',
    })
  const { handleSubmit, formState } = useFormContext<UserRegistration>()

  const onSubmit: SubmitHandler<UserRegistration> = async (data) => {
    setOpen(true)
    console.log(data)
    const result = await registerUser(data)
    setRegisterUserResult(result)
  }

  const handleClickOk = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
      <Dialog open={isOpened}>
        <DialogTitle>
          {formState.isSubmitting ? 'Register...' : 'Completed!!'}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '20rem',
          }}
        >
          {formState.isSubmitting ? (
            <FadeLoader />
          ) : (
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
            >
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                {registerUserResult.email}
              </Typography>
              <Typography>{registerUserResult.message}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            disabled={formState.isSubmitting}
            onClick={handleClickOk}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
