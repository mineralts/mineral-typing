import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Emoji from '../emoji'

export default interface GuildEmojiManager {
  readonly cache: Collection<Snowflake, Emoji>
}