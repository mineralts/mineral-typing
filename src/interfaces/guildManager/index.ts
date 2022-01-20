import { Collection } from '@mineralts/api'
import { Snowflake } from '../../types'
import Guild from '../guild/Guild'

export default interface Index {
  cache: Collection<Snowflake, Guild>
}