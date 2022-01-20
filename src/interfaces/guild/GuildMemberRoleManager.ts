import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Role from '../roles'

export default interface GuildMemberRoleManager {
  cache: Collection<Snowflake, Role>
}