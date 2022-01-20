import { DateTime } from 'luxon'
import { ActivityAssets, ActivityTimestamps, ActivityType, Snowflake } from '../../types'
import Emoji from '../emoji'

export default interface Activity {
  id: string
  type: keyof ActivityType
  description: string
  name: string
  emoji: Emoji | undefined
  timestamps: ActivityTimestamps
  state: string | undefined
  detail: string | undefined
  assets: ActivityAssets
  buttons: string[]
  syncId: string | undefined
  sessionId: string | undefined
  createdAt: DateTime
  applicationId: Snowflake | undefined
}