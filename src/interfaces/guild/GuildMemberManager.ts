import { Collection } from '@mineralts/api'
import GuildMember from './GuildMember'
import { Snowflake } from '../../types'

export default interface GuildMemberManager {
  cache: Collection<Snowflake, GuildMember>
}