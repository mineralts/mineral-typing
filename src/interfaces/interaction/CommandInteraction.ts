import {
  ComponentType,
  InteractionType,
  MessageOption,
  Snowflake
} from '../../types'
import Message from '../message'
import GuildMember from '../guild/GuildMember'
import CommandOptions from './CommandOptions'

export default interface CommandInteraction {
  commandOptions: CommandOptions
  id: Snowflake
  version: number
  type: keyof typeof InteractionType
  token: string
  customId: string | undefined
  componentType: keyof typeof ComponentType | undefined
  message: Message | undefined
  member: GuildMember

  reply (messageOption: MessageOption): Promise<void>
}