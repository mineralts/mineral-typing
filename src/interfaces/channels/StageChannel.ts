import { RTC_Region } from '../../types'
import Channel from './Channel'

export default interface StageChannel extends Channel {
  maxUser: number
  region: keyof typeof RTC_Region
  rateLimitPerUser: number
  permission: any[]
  bitrate: number
}