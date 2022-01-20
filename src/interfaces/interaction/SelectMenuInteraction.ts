import { ComponentType, InteractionType, Snowflake } from '../../types'
import Message from '../message'
import GuildMember from '../guild/GuildMember'

export default interface SelectMenuInteraction {
  id: Snowflake
  version: number
  type: keyof typeof InteractionType
  token: string
  customId: string | undefined
  componentType: keyof typeof ComponentType | undefined
  message: Message | undefined
  member: GuildMember
}