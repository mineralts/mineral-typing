import { Collection } from '@mineralts/api'
import Invite from './Invite'

export default interface InviteManager {
  readonly cache: Collection<string, Invite>
}