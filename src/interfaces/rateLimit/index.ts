import { DateTime } from 'luxon'

export default interface RateLimit {
  message: string
  retryAfter: DateTime
  global: boolean

  isGlobal (): boolean
}