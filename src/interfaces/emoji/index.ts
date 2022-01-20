import { Snowflake } from '../../types'
import Role from '../roles'

export default interface Emoji {
  id: Snowflake
  label: string
  managed: boolean
  available: boolean
  animated: boolean
  roles: Role[]
}