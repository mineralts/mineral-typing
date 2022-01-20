import { Snowflake } from '../../types'
import GuildMember from '../guild/GuildMember'
import VoiceChannel from '../channels/VoiceChannel'
import Guild from '../guild/Guild'

export default interface VoiceState {
  member: GuildMember
  sessionId: string
  suppress: boolean
  video: boolean
  mute: boolean
  deaf: boolean
  channelId: Snowflake
  channel: VoiceChannel | undefined
  guild: Guild

  isSuppress (): boolean
  hasVideo (): boolean
  isMute (): boolean
  isDeaf (): boolean
  setMute(value: boolean): Promise<void>
  setDeaf(value: boolean): Promise<void>
  move(channel: VoiceChannel | Snowflake): Promise<void>
}