import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@mui/material'
import { UserRegistration } from '@models'

/**
 * Components for registering settings.
 */
export const SettingsRegister: FC = () => {
  const {
    formState: { isValid },
  } = useFormContext<UserRegistration>()
  return (
    <Button variant="contained" type="submit" disabled={!isValid}>
      Submit
    </Button>
  )
}
