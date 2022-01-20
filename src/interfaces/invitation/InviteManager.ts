import { Collection } from '@mineralts/api'
import Invite from './Invite'

export default interface InviteManager {
  cache: Collection<string, Invite>
}