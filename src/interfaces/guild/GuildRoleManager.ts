import { Collection } from '@mineralts/api'
import { RoleOption, Snowflake } from '../../types'
import Role from '../roles'

export default interface GuildRoleManager {
  readonly cache: Collection<Snowflake, Role>

  create (options: RoleOption): Promise<void>
}