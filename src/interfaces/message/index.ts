import { MessageOption, Snowflake } from '../../types'
import { DateTime } from 'luxon'
import GuildMember from '../guild/GuildMember'
import Guild from '../guild/Guild'
import TextChannel from '../channels/TextChannel'
import Emoji from '../emoji'
import MessageAttachment from './MessageAttachment'
import ReactionManager from '../reaction/ReactionManager'
import MessageEmbed from '../embed/MessageEmbed'
import MentionResolvable from '../mention/MentionResolvable'

export default interface Message {
  reactions: ReactionManager
  id: Snowflake
  type: number
  flags: string[]
  tts: boolean
  createdAt: DateTime | null
  updatedAt: DateTime | null
  referencedMessage: Message | null | undefined
  pinned: boolean
  mentions: MentionResolvable
  author: GuildMember | undefined
  guild: Guild | undefined
  channel: TextChannel
  content: string
  attachment: MessageAttachment
  components: any[]
  embeds: MessageEmbed[]

  isTTS (): boolean
  isPinned (): boolean
  crossPost (): Promise<void>
  pin (): Promise<void>
  unPin (): Promise<void>
  delete (): Promise<void>
  edit (message: MessageOption): Promise<void>
  reload (): Promise<void>
  react (emoji: string | Emoji): Promise<void>
}