import { ComponentType, MenuSelect, MenuSelectOption } from '../../types'

export default interface SelectMenu {
  type: ComponentType
  customId: string | undefined
  minValues: number
  maxValues: number
  placeholder?: string
  disabled: boolean
  choices: MenuSelectOption[]

  setCustomId (identifier: string): this
  setMinimalValue (value: number): this
  setMaximalValue (value: number): this
  setPlaceholder (value: string): this
  isDisabled (): boolean
  setDisabled (value: boolean): this
  addOption (option: { label: string, value: unknown, description?: string, emoji?: any, default?: boolean }): this
}