import { FC, useState } from 'react'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { FadeLoader } from 'react-spinners'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { UserRegistration, RegisterUser } from '@models'

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
  const [isRegistering, setRegistering] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const { handleSubmit } = useFormContext<UserRegistration>()

  const onSubmit: SubmitHandler<UserRegistration> = async (data) => {
    setOpen(true)
    setRegistering(true)
    console.log(data)
    const result = await registerUser(data)
    setRegistering(false)
    setMessage(result)
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
          {isRegistering ? 'Register...' : 'Completed!!'}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '20rem',
          }}
        >
          {isRegistering ? <FadeLoader /> : message}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            disabled={isRegistering}
            onClick={handleClickOk}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
