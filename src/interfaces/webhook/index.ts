import { Snowflake } from '../../types'
import User from '../user'
import Guild from '../guild/Guild'
import Channel from '../channels/Channel'

export default interface VoiceState {
  id: Snowflake
  type: number
  guildId: Snowflake | undefined
  channelId: Snowflake | undefined
  user: User
  name: string | undefined
  avatar: string | undefined
  token: string
  applicationId: Snowflake | undefined
  sourceGuild: Guild
  sourceChannel: Channel
  url: string
}