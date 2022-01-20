import { Snowflake } from '../../types'
import GuildMember from '../guild/GuildMember'
import Client from '../client'
import Reaction from './Reaction'
import { Collection } from '@mineralts/api'

export default interface ReactionManager {
  readonly cache: Collection<Snowflake, Reaction[]>

  remove (member: Snowflake | GuildMember | Client): Promise<void>
}