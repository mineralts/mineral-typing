import { BehaviorsExpiration, Snowflake } from '../../types'
import User from '../user'
import { DateTime } from 'luxon'
import IntegrationAccount from './IntegrationAccount'
import IntegrationApplication from './IntegrationApplication'

export default interface Integration {
  id: Snowflake
  name: string
  type: 'twitch' | 'youtube' | 'discord'
  enabled: boolean
  syncing: boolean
  roleId: Snowflake
  enableEmoticons: boolean
  expireBehavior: BehaviorsExpiration
  expireGracePeriod: number
  user: User
  account: IntegrationAccount
  syncedAt: DateTime
  subscriberCount: number
  revoked: boolean
  application: IntegrationApplication

  isEnabled (): boolean
  isSyncing (): boolean
  isEnableEmoticons (): boolean
  isRevoked (): boolean
}