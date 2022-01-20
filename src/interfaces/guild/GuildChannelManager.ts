import { Collection } from '@mineralts/api'
import { ChannelOptionResolvable, ChannelResolvable, Snowflake } from '../../types'

export default interface GuildChannelManager {
  cache: Collection<Snowflake, ChannelResolvable>

  create (channel: ChannelOptionResolvable)
}