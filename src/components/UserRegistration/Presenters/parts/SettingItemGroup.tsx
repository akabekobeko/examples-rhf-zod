import { FC, PropsWithChildren } from 'react'
import { Box } from '@mui/material'

/**
 * Components that are groups of setting items.
 */
export const SettingItemGroup: FC<PropsWithChildren> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      border: 'solid 2px #34495E',
      borderRadius: '.3rem',
      backgroundColor: '#FBFCFA',
      padding: '1.5rem',
    }}
  >
    {children}
  </Box>
)
