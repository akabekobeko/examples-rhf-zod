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
  displayName: z.string().optional(),
  /**
   * User profile.
   */
  profile: z.string().optional(),
})

/**
 * Type of user registration data..
 */
export type UserRegistration = z.infer<typeof userRegistrationScheme>

/**
 * Result of `RegisterUser` API.
 */
export type RegisterUserResult = {
  /**
   * E-mail.
   */
  email: string
  /**
   * Message.
   */
  message: string
}

/**
 * Register a user account.
 * @param data - Account data.
 * @returns Results of account registration process.
 */
export type RegisterUser = (
  data: UserRegistration
) => Promise<RegisterUserResult>
