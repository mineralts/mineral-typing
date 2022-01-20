import { DateTime } from 'luxon'
import { Snowflake } from '../../types'
import Presence from '../presence'

export default interface User {
  id: Snowflake
  username: string
  discriminator: string
  tag: string
  bot: boolean
  premiumSince: DateTime | undefined
  verified: boolean
  mfaEnabled: boolean
  flags: number
  email: string | null
  avatar: string | null
  banner: string | null
  presence: Presence | undefined

  isBot (): boolean
  isVerified (): boolean
  hasMfaEnabled (): boolean
  getAvatarUrl (format: string, size?, dynamic?: boolean): string | null
  getDefaultAvatarUrl (): string
  getBannerUrl (format: string, size?, dynamic?: boolean): Promise<string | null>
  makeImageUrl (root, { format, size }: { format?: any; size?: any })
}