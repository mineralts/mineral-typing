import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Role from '../roles'

export default interface GuildMemberRoleManager {
  readonly cache: Collection<Snowflake, Role>
}