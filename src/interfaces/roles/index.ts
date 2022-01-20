import { Snowflake } from '../../types'
import Guild from '../guild/Guild'

export default interface Role {
  id: Snowflake
  name: string
  unicodeEmoji: string | null
  position: number
  permissions: string
  mentionable: boolean
  managed: boolean
  icon: any
  hoist: boolean
  color: number
  guild: Guild

  isMentionable (): boolean
  isManaged (): boolean
}