import { Snowflake } from '../../types'
import Role from '../roles'
import { Collection } from '@mineralts/api'
import GuildMember from '../guild/GuildMember'
import Channel from '../channels/Channel'

export default interface MentionResolvable {
  readonly everyone: boolean
  readonly roles: Collection<Snowflake, Role>
  readonly members: Collection<Snowflake, GuildMember>
  readonly channels: Collection<Snowflake, Channel>

  isEveryone (): boolean
}