import { Collection } from '@mineralts/api'
import { ClientOptions, Snowflake } from '../../types'
import User from '../user'
import Presence from '../presence'
import { GuildManager } from '../../../index'
import { MineralEvent } from '@mineralts/core'
import { Assembler } from '@mineralts/assembler'
import { Command } from '@mineralts/forge'

export default interface Client {
  readonly guilds: GuildManager
  readonly container: { events: Collection<string, Map<string, MineralEvent>>, commands: Collection<string, any>, subcommands: Collection<string, any>}
  readonly token: string
  readonly options: ClientOptions
  readonly user: User
  readonly sessionId: string
  readonly presences: Presence[]
  readonly application: { id: string, flags: number }
  readonly commands: Collection<Snowflake, Command>

  registerGlobalCommands (assembler: Assembler): Promise<void>
}