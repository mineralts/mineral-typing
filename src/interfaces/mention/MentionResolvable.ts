import { Snowflake } from '../../types'
import Role from '../roles'
import { Collection } from '@mineralts/api'
import GuildMember from '../guild/GuildMember'
import Channel from '../channels/Channel'

export default interface MentionResolvable {
  everyone: boolean
  roles: Collection<Snowflake, Role>
  members: Collection<Snowflake, GuildMember>
  channels: Collection<Snowflake, Channel>
  isEveryone (): boolean
}