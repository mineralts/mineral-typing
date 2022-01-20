import { ComponentType, MessageComponentResolvable } from '../../types'

export default interface EmbedRow {
  type: ComponentType
  components: MessageComponentResolvable[]

  addComponent (component: MessageComponentResolvable): this
  addComponents (components: MessageComponentResolvable[]): this
}