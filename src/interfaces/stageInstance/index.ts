import { Snowflake } from '../../types'

export default interface StageInstance {
  id: Snowflake
  guildId: Snowflake
  channelId: Snowflake
  topic: string
  privacyLevel: number
  discoverableDisabled: boolean

  isDiscoverableDisabled (): boolean
}