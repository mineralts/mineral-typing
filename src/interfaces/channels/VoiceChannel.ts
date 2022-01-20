import { RTC_Region, VideoQuality } from '../../types'
import Channel from './Channel'

export default interface VoiceChannel extends Channel {
  maxUser: number
  region: keyof typeof RTC_Region
  rateLimitPerUser: number
  permission: any[]
  bitrate: number
  videoQuality: keyof typeof VideoQuality

  setBitrate (value: number): Promise<void>
  setRtcRegion (region: keyof typeof RTC_Region): Promise<void>
  setMaxMember (value: number | 'UNLIMITED'): Promise<void>
  setVideoQuality (quality: keyof typeof VideoQuality): Promise<void>
}