import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, TextareaAutosize, Alert } from '@mui/material'
import { SettingItem } from './parts/SettingItem'
import { SettingItemGroup } from './parts/SettingItemGroup'
import { UserRegistration } from '@models'

/**
 * Component for the user profile setting
 */
export const SettingsUserProfile: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserRegistration>()

  return (
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
  )
}
