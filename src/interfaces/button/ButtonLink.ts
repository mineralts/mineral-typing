import BaseButton from './BaseButton'
import { ButtonStyle } from '../../types'

export default interface ButtonLink extends BaseButton {
  url?: string
  style: keyof typeof ButtonStyle

  setUrl (url: string): this
}