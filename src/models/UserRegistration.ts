import { z } from 'zod'

/**
 * User registration data schema.
 */
export const userRegistrationScheme = z.object({
  /**
   * E-mail.
   */
  email: z
    .string()
    .email({ message: 'Entered value does not match email format' }),
  /**
   * Password.
   */
  password: z
    .string()
    .regex(
      /^[A-Za-z0-9]{16,64}$/,
      'Please enter between 16 and 64 alphanumeric characters.'
    ),
  /**
   * Display name in this service.
   */
  displayName: z
    .string()
    .min(4, 'Please enter at least 4 characters.')
    .optional(),
  /**
   * User profile.
   */
  profile: z.string().optional(),
})

/**
 * Type of user registration data..
 */
export type UserRegistration = z.infer<typeof userRegistrationScheme>
