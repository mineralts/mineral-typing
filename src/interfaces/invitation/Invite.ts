import GuildMember from '../guild/GuildMember'
import { DateTime } from 'luxon'
import { ChannelResolvable } from '../../types'

export default interface Invite {
  owner: GuildMember
  channel: ChannelResolvable
  code: string
  count: number
  max: number
  temporary: boolean
  expireAt: DateTime
  createdAt: DateTime
}