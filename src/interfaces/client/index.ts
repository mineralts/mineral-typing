import { Collection } from '@mineralts/api'
import { ClientOptions, Snowflake } from '../../types'
import User from '../user'
import Presence from '../presence'
import { GuildManager } from '../../../index'
import { MineralEvent } from '@mineralts/core'
import { Assembler } from '@mineralts/assembler'
import { Command } from '@mineralts/forge'

export default interface Client {
  guilds: GuildManager
  container: { events: Collection<string, Map<string, MineralEvent>>, commands: Collection<string, any>, subcommands: Collection<string, any>}
  token: string
  options: ClientOptions
  user: User
  sessionId: string
  presences: Presence[]
  application: { id: string, flags: number }
  commands: Collection<Snowflake, Command>

  registerGlobalCommands (assembler: Assembler): Promise<void>
}