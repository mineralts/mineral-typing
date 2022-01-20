import User from '../user'

export default interface IntegrationApplication {
  id: string
  name: string
  description: string
  icon: string | undefined
  summary: string
  bot: User
}