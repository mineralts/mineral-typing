import BaseButton from './BaseButton'
import { ButtonStyle } from '../../types'

export default interface ButtonLink extends BaseButton {
  readonly url?: string
  readonly style: keyof typeof ButtonStyle

  setUrl (url: string): this
}