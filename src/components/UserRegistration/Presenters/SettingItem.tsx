import { FC, PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
  /**
   * Label text.
   */
  label: string
}

/**
 * Component that is a single setting item.
 */
export const SettingItem: FC<PropsWithChildren<Props>> = ({
  label,
  children,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
    }}
  >
    <Typography variant="h3">{label}</Typography>
    {children}
  </Box>
)
