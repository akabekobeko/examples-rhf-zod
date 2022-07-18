import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, Alert } from '@mui/material'
import { SettingItem } from './parts/SettingItem'
import { SettingItemGroup } from './parts/SettingItemGroup'
import { UserRegistration } from '@models'

/**
 * Component for the account setting.
 */
export const SettingsAccount: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserRegistration>()

  return (
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
  )
}
