import { Hash } from '../../types'

export default interface GuildHashes {
  readonly roles: Hash
  readonly metadata: Hash
  readonly channels: Hash
}