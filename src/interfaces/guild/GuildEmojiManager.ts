import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Emoji from '../emoji'

export default interface GuildEmojiManager {
  cache: Collection<Snowflake, Emoji>
}