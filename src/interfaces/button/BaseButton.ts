import Emoji from '../emoji'

export default interface BaseButton {
  label?: string
  emoji?: string | Emoji
  disabled: boolean

  setLabel (value: string): this
  setEmoji (emoji: string | Emoji): this
  isDisabled (): boolean
  setDisabled (value: boolean): this
}