import { ChannelTypeResolvable, Snowflake } from '../../types'
import Guild from '../guild/Guild'
import CategoryChannel from './CategoryChannel'

export default interface Channel {
  id: Snowflake
  type: keyof typeof ChannelTypeResolvable
  name: string
  guildId: Snowflake
  guild: Guild | undefined
  parentId: Snowflake | undefined
  position: number
  parent?: CategoryChannel

  isText (): boolean
  isVoice (): boolean
  isNews (): boolean
  isCategory (): boolean
  isStage (): boolean
  setParent (category: CategoryChannel | Snowflake): Promise<void>
  setName (value: string): Promise<void>
  setPosition (position: number): Promise<void>
  delete (): Promise<void>
}