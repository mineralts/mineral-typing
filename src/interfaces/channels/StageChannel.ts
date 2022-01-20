import { RTC_Region } from '../../types'
import Channel from './Channel'

export default interface StageChannel extends Channel {
  readonly maxUser: number
  readonly region: keyof typeof RTC_Region
  readonly rateLimitPerUser: number
  readonly permission: any[]
  readonly bitrate: number
}