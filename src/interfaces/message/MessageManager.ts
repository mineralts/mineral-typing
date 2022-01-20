import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Message from './index'

export default interface MessageManager {
  cache: Collection<Snowflake, Message>

  fetch (id: Snowflake): Promise<Message>
  fetch (options?: { before?: Snowflake, after?: Snowflake, around?: Snowflake, limit?: number }): Promise<void>
  fetch (value?: { before?: Snowflake, after?: Snowflake, around?: Snowflake, limit?: number } | Snowflake): Promise<Message | void>
}