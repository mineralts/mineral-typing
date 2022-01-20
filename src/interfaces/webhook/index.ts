import { Snowflake } from '../../types'
import User from '../user'
import Guild from '../guild/Guild'
import Channel from '../channels/Channel'

export default interface VoiceState {
  readonly id: Snowflake
  readonly type: number
  readonly guildId: Snowflake | undefined
  readonly channelId: Snowflake | undefined
  readonly user: User
  readonly name: string | undefined
  readonly avatar: string | undefined
  readonly token: string
  readonly applicationId: Snowflake | undefined
  readonly sourceGuild: Guild
  readonly sourceChannel: Channel
  readonly url: string
}