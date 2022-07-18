import { FC } from 'react'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { Button } from '@mui/material'
import { UserRegistration } from '@models'

/**
 * Components for registering settings。
 */
export const SettingsRegister: FC = () => {
  const { handleSubmit } = useFormContext<UserRegistration>()

  const onSubmit: SubmitHandler<UserRegistration> = (data) => {
    console.log(data)
  }

  return (
    <Button variant="contained" onClick={handleSubmit(onSubmit)}>
      Submit
    </Button>
  )
}
