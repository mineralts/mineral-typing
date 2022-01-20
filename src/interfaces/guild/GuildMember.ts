import { Snowflake } from '../../types'
import User from '../user'
import { DateTime } from 'luxon'
import Guild from './Guild'
import GuildMemberRoleManager from './GuildMemberRoleManager'
import Role from '../roles'
import VoiceState from '../voice/VoiceState'

export default interface GuildMember {
  id: Snowflake
  username: string
  user: User
  guild: Guild
  roles: GuildMemberRoleManager
  highestRole: Role | null
  pending: boolean
  voice: VoiceState
  communicationTimeout: DateTime | null
  joinedAt: DateTime

  isPending (): boolean
  setUsername (value: string): Promise<void>
  exclude (date: DateTime, reason?: string): Promise<void>
  sorry (reason?: string): Promise<void>
  ban (options: { messageCount?: number, reason?: string }): Promise<void>
  unban (reason?: string): Promise<void>
  kick (reason?: string): Promise<void>
}