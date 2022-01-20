import Activity from '../activity'
import GuildMember from '../guild/GuildMember'
import { PresenceStatus } from '../../types'

export default interface Presence {
  member: GuildMember
  status: keyof typeof PresenceStatus
  web: string | null
  desktop: string | null
  mobile: string | null
  activities: Activity[]
}