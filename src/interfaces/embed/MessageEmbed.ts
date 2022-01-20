import { EmbedField } from '../../types'
import EmbedAuthor from './EmbedAuthor'
import EmbedImage from './EmbedImage'
import EmbedThumbnail from './EmbedThumbnail'
import { DateTime } from 'luxon'
import EmbedVideo from './EmbedVideo'
import EmbedFooter from './EmbedFooter'
import Color from '../colors'

export default interface MessageEmbed {
  title: string | undefined
  description: string | undefined
  color: keyof typeof Color
  fields: EmbedField[]
  author: EmbedAuthor | undefined
  image: EmbedImage | undefined
  thumbnail: EmbedThumbnail | undefined
  timestamp: DateTime | undefined
  video: EmbedVideo | undefined
  url: string | undefined
  footer: EmbedFooter | undefined

  setTitle (value: string): this
  setDescription (value: string): this
  setColor (color: keyof typeof Color | string): this
  addField (name: string, value: string, inline: boolean): this
  setAuthor (options: { name?: string, url?: string | null, icon_url?: string | null, proxy_icon_url?: string}): this
  setImage (options: { url?: string | null, proxy_url?: string }): this
  setThumbnail (options: { url?: string | null, proxy_url?: string }): this
  setTimestamp (): this
  setUrl (url: string): this
  setFooter (options: { text: string, iconUrl?: string | null, proxyIconUrl?: string }): this
}