import { FC } from 'react'
import { Presenter } from './Presenters/Presenter'
import { RegisterUser } from '@models'

/**
 * Stops processing for the specified time.
 * @param second - Number of time to sleep (milliseconds).
 * @sample
 */
const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second))

/**
 * Component for user registration.
 */
export const Container: FC = () => {
  const registerUser: RegisterUser = async (data) => {
    await sleep(3000)
    return `${data.email}\nSuccess user account successfully registered!`
  }

  return <Presenter registerUser={registerUser} />
}
