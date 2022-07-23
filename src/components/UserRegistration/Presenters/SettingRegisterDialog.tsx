import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
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
 * Properties of components for indicator dialog of the registering settings.
 */
type Props = {
  /**
   * Value indicating that the dialog is displayed.
   */
  open: boolean
  /**
   * Occurs when the OK button is clicked.
   */
  onClickOk: () => void
  /**
   * Processing results.
   */
  result: {
    /**
     * E-mail.
     */
    email: string
    /**
     * Message of processing results.
     */
    message: string
  }
}

/**
 * Components for indicator dialog of the registering settings.
 */
export const SettingsRegisterDialog: FC<Props> = ({
  open,
  onClickOk,
  result,
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<UserRegistration>()

  return (
    <Dialog open={open}>
      <DialogTitle>{isSubmitting ? 'Register...' : 'Completed!!'}</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '20rem',
        }}
      >
        {isSubmitting ? (
          <FadeLoader />
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              {result.email}
            </Typography>
            <Typography>{result.message}</Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" disabled={isSubmitting} onClick={onClickOk}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
