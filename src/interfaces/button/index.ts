import { ButtonStyle, Snowflake } from '../../types'
import BaseButton from './BaseButton'

export default interface Button extends BaseButton {
  customId?: Snowflake
  style: Exclude<keyof typeof ButtonStyle, 'LINK'>

  setStyle (style: Exclude<keyof typeof ButtonStyle, 'LINK'>): this
  setCustomId (identifier: string): this
}