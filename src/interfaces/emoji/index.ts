import { Snowflake } from '../../types'
import Role from '../roles'

export default interface Emoji {
  readonly id: Snowflake
  readonly label: string
  readonly managed: boolean
  readonly available: boolean
  readonly animated: boolean
  readonly roles: Role[]
}