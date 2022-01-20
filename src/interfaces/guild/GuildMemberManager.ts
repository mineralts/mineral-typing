import { Collection } from '@mineralts/api'
import GuildMember from './GuildMember'
import { Snowflake } from '../../types'

export default interface GuildMemberManager {
  readonly cache: Collection<Snowflake, GuildMember>
}