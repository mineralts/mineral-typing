import { MessageOption, Milliseconds, Snowflake } from '../../types'
import Channel from './Channel'
import { DateTime } from 'luxon'
import Message from '../message'
import MessageManager from '../message/MessageManager'

export default interface TextChannelResolvable extends Channel {
  description: string | undefined
  lastMessageId: Snowflake
  lastMessage: Message | undefined
  permissionOverwrites: { [K: string]: string }[]
  cooldown: DateTime
  messages: MessageManager
  isNsfw: boolean

  setCooldown (value: Milliseconds): Promise<void>

  setDescription (value: string | null): Promise<void>

  isNSFW (): boolean

  setNSFW (bool: boolean): boolean

  send (messageOption: MessageOption): Promise<void>
}