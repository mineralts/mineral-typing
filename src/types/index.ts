/*
 * @mineralts/index.ts
 *
 * (c) Parmantier Baptiste
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import { DateTime } from 'luxon'
import {
  Button, CategoryChannel,
  Client,
  CommandInteraction, EmbedRow, Emoji,
  Guild,
  GuildMember, Invite,
  Message, MessageAttachment, MessageEmbed,
  Presence,
  Reaction, Role,
  SelectMenu, TextChannel, TextChannelResolvable, VoiceChannel
} from '../interfaces'
import ButtonLink from '../interfaces/button/ButtonLink'
import RateLimit from '../interfaces/rateLimit'
import ButtonInteraction from '../interfaces/interaction/ButtonInteraction'
import SelectMenuInteraction from '../interfaces/interaction/SelectMenuInteraction'
import StageChannel from '../interfaces/channels/StageChannel'
import { Color } from '@mineralts/api'

export type Snowflake = string
export type Milliseconds = number
export type LocalPath = string
export type Url = string

export enum Intent {
  GUILDS = 1,
  GUILD_MEMBERS = 2,
  GUILD_BANS = 4,
  GUILD_EMOJIS_AND_STICKERS = 8,
  GUILD_INTEGRATIONS = 16,
  GUILD_WEBHOOKS = 32,
  GUILD_INVITES = 64,
  GUILD_VOICE_STATES = 128,
  GUILD_PRESENCES = 256,
  GUILD_MESSAGES = 512,
  GUILD_MESSAGE_REACTIONS = 1024,
  GUILD_MESSAGE_TYPING = 2048,
  DIRECT_MESSAGES = 4096,
  DIRECT_MESSAGE_REACTIONS = 8192,
  DIRECT_MESSAGE_TYPING = 16384,
  ALL = 32767,
}

export type ClientOptions = {
  shardCount?: 1
  messageCacheLifetime?: 0
  messageSweepInterval?: 0
  invalidRequestWarningInterval?: 0
  intents?: 'ALL' | Exclude<keyof typeof Intent, 'ALL'>[],
  restWsBridgeTimeout?: 5000
  restRequestTimeout?: 15000
  restGlobalRateLimit?: 0
  retryLimit?: 1
  restTimeOffset?: 500
  restSweepInterval?: 60
  failIfNotExists?: true
  userAgentSuffix?: []
}

export enum ActivityType {
  'PLAYING',
  'STREAMING',
  'LISTENING',
  'WATCHING',
  'CUSTOM',
  'COMPETING'
}

export type ActivityTimestamps = { start: DateTime | undefined, end: DateTime | undefined }

export type ActivityAssets = {
  smallText: string | undefined,
  smallImage: string | undefined,
  largeText: string | undefined,
  largeImage: string | undefined,
}

export enum ChannelTypeResolvable {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS = 5,
  GUILD_STORE = 6,
  GUILD_NEWS_THREAD = 10,
  GUILD_PUBLIC_THREAD = 11,
  GUILD_PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
}

export type RequestOptions = {
  retryOnRateLimit: boolean
}

export enum VideoQuality {
  AUTO = 1,
  FULL = 2
}

export enum Region {
  FRANCE = 'fr',
  ENGLAND = 'en_US',
  SPAIN = 'es-ES',
  GERMANY = 'de',
  DENMARK = 'da',
  CROATIA = 'hr',
  ITALY = 'it',
  LITHUANIA = 'lt',
  HUNGARY = 'hu',
}

export enum RTC_Region {
  US_WEST = 'us-west',
  US_EAST = 'us-east',
  US_CENTRAL = 'us-central',
  US_SOUTH = 'us-south',
  SINGAPORE = 'singapore',
  SOUTH_AFRICA = 'southafrica',
  SYDNEY = 'sydney',
  ROTTERDAM = 'rotterdam',
  BRAZIL = 'brazil',
  HONG_KONG = 'hongkong',
  RUSSIA = 'russia',
  JAPAN = 'japan',
  INDIA = 'india',
  AUTO = 'null'
}

export enum VerificationLevel {
  NONE,
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH,
}

export enum ExplicitContentLevel {
  DISABLED,
  MEMBERS_WITHOUT_ROLES,
  ALL_MEMBERS,
}

export enum NotificationLevel {
  ALL_MESSAGES,
  ONLY_MENTIONS
}

export type MessageComponentResolvable = Button | ButtonLink | SelectMenu

export enum Feature {
  ANIMATED_ICON,
  BANNER,
  COMMERCE,
  COMMUNITY,
  DISCOVERABLE,
  FEATURABLE,
  INVITE_SPLASH,
  MEMBER_VERIFICATION_GATE_ENABLED,
  MONETIZATION_ENABLED,
  MORE_STICKERS,
  NEWS,
  PARTNERED,
  PREVIEW_ENABLED,
  PRIVATE_THREADS,
  ROLE_ICONS,
  SEVEN_DAY_THREAD_ARCHIVE,
  THREE_DAY_THREAD_ARCHIVE,
  TICKETED_EVENTS_ENABLED,
  VANITY_URL,
  VERIFIED,
  VIP_REGIONS,
  WELCOME_SCREEN_ENABLED,
}

export enum BehaviorsExpiration {
  REMOVE_ROLE,
  KICK
}

export enum SystemChannelFlag {
  SUPPRESS_JOIN_NOTIFICATIONS	= 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS =	1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
}

export interface ClientEvents {
  ready: [client: Client]
  guildCreate: [guild: Guild]
  messageCreate: [message: Message]
  messageUpdate: [before: Message | undefined, after: Message]
  messageDelete: [message: Message]
  channelCreate: [channel: ChannelResolvable]
  channelDelete: [channel: ChannelResolvable]
  channelUpdate: [before: ChannelResolvable, after: ChannelResolvable]
  rateLimit: [rateLimit: RateLimit]
  messageReactionAdd: [message: Message, reaction: Reaction]
  messageReactionRemove: [message: Message, reaction: Reaction]
  presenceUpdate: [before: Presence | undefined, after: Presence]
  voiceJoin: [member: GuildMember]
  voiceLeave: [member: GuildMember]
  memberBoostAdd: [member: GuildMember]
  memberBoostRemove: [member: GuildMember]
  memberTimeoutAdd: [member: GuildMember, duration: number]
  memberTimeoutRemove: [member: GuildMember]
  interactionButtonCreate: [interaction: ButtonInteraction]
  [key: `interactionButton::${string}`]: [interaction: ButtonInteraction]
  interactionSelectMenuCreate: [interaction: SelectMenuInteraction]
  [key: `interactionSelectMenu::${string}`]: [interaction: SelectMenuInteraction]
  interactionCommandCreate: [interaction: CommandInteraction]
  [key: `interactionCommand::${string}`]: [interaction: CommandInteraction]
  rulesAccept: [member: GuildMember]
  guildMemberJoin: [member: GuildMember, invitation?: Invite]
  guildMemberLeave: [member: GuildMember]
  inviteCreate: [invite: Invite]
  inviteDelete: [invite: Invite]
  roleCreate: [role: Role]
  roleDelete: [role: Role]
  roleUpdate: [before: Role, after: Role]
  typingStart: [member: GuildMember, channel: TextChannelResolvable]
}

export const clientEvents = [
  'ready',
  'guildCreate',
  'messageCreate',
  'messageUpdate',
  'messageDelete',
  'channelCreate',
  'channelDelete',
  'channelUpdate',
  'rateLimit',
  'messageReactionAdd',
  'messageReactionRemove',
  'presenceUpdate',
  'voiceJoin',
  'voiceLeave',
  'memberBoostAdd',
  'memberBoostRemove',
  'memberTimeoutAdd',
  'memberTimeoutRemove',
  'interactionButtonCreate',
  'interactionSelectMenuCreate',
  'interactionCommandCreate',
  'rulesAccept',
  'guildMemberJoin',
  'guildMemberLeave',
  'inviteCreate',
  'inviteDelete',
  'roleCreate',
  'roleDelete',
  'roleUpdate',
  'typingStart'
]

export enum ButtonStyle {
  PRIMARY =	1,
  SECONDARY = 2,
  SUCCESS	= 3,
  DANGER = 4,
  LINK = 5,
}

export enum CommandArgumentType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP	= 2,
  STRING	= 3,
  INTEGER	= 4,
  BOOLEAN	= 5,
  USER	= 6,
  CHANNEL =	7,
  ROLE =	8,
  MENTIONABLE	= 9,
  NUMBER = 10,
}

export enum CommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

export type ChannelResolvable = TextChannel | VoiceChannel | CategoryChannel | StageChannel

type ChannelNode<Type extends keyof ChannelOptions> = {
  name: string
  type: Type
  permissionOverwrites?: any[]
  position?: number
  options?: Type extends keyof ChannelOptions
    ? ChannelOptions[Type]
    : never
}

type ChannelOptions = {
  GUILD_TEXT: {
    nsfw?: boolean
    cooldown?: number
    topic?: string
    parentId?: Snowflake
    parent?: CategoryChannel
  },
  GUILD_VOICE: {
    userLimit?: number
    bitrate?: number
    parentId?: Snowflake
    parent?: CategoryChannel
  },
  GUILD_CATEGORY: never,
  GUILD_STAGE_VOICE: {
    userLimit?: number
    bitrate?: number
    parentId?: Snowflake
    parent?: CategoryChannel
  },
}

export type ChannelOptionResolvable = ChannelNode<'GUILD_TEXT'>
  | ChannelNode<'GUILD_VOICE'>
  | ChannelNode<'GUILD_CATEGORY'>
  | ChannelNode<'GUILD_STAGE_VOICE'>

export enum InteractionType {
  PING = 1,
  APPLICATION_COMMAND = 2,
  MESSAGE_COMPONENT = 3,
}

export enum InteractionType {
  PONG = 1,
  CHANNEL_MESSAGE_WITH_SOURCE =	4,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
  DEFERRED_UPDATE_MESSAGE = 6,
  UPDATE_MESSAGE =	7,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
}

export enum ComponentType {
  ACTION_ROW = 1,
  BUTTON = 2,
  SELECT_MENU = 3,
}

export interface EmbedField {
  name: string
  value: string
  inline?: boolean
}

export type Hash = {
  omitted: boolean,
  hash: string
}

export type GuildFeature =
  | 'ANIMATED_ICON'
  | 'BANNER'
  | 'COMMERCE'
  | 'COMMUNITY'
  | 'DISCOVERABLE'
  | 'FEATURABLE'
  | 'INVITE_SPLASH'
  | 'MEMBER_VERIFICATION_GATE_ENABLED'
  | 'MONETIZATION_ENABLED'
  | 'MORE_STICKERS'
  | 'NEWS'
  | 'PARTNERED'
  | 'PREVIEW_ENABLED'
  | 'PRIVATE_THREADS'
  | 'ROLE_ICONS'
  | 'SEVEN_DAY_THREAD_ARCHIVE'
  | 'THREE_DAY_THREAD_ARCHIVE'
  | 'TICKETED_EVENTS_ENABLED'
  | 'VANITY_URL'
  | 'VERIFIED'
  | 'VIP_REGIONS'
  | 'WELCOME_SCREEN_ENABLED'

export enum PresenceStatus {
  INACTIVE = 'idle',
  DO_NOT_DISTURB = 'dnd',
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export interface MessageOption {
  content?: string
  embeds?: MessageEmbed[]
  tts?: boolean
  components?: EmbedRow[]
  attachment?: MessageAttachment
  private?: boolean
}

export type RoleOption = {
  name: string
  everyone: boolean
  color: keyof typeof Color | string
  hoist?: boolean
  emoji?: string
  icon?: string
  isMentionable?: boolean
}

export type WelcomeChannel = {
  channelId: Snowflake
  description: string
  emojiId?: Snowflake
  emojiName?: string
}

export type WelcomeScreen = {
  description: string
  channels: WelcomeChannel[]
}

export enum OptionType {
  SUB_COMMAND =	1,
  SUB_COMMAND_GROUP =	2,
  STRING =	3,
  BOOLEAN =	5,
  USER =	6,
  CHANNEL =	7,
  ROLE =	8,
  MENTIONABLE =	9,
  NUMBER =	10,
}

// @ts-ignore
export type CommandOption<T extends keyof typeof OptionType | 'CHOICE'> = OptionWrapper[T]

interface OptionWrapper {
  STRING: StringOption
  NUMBER: NumberOption
  CHANNEL: ChannelOption
  CHOICE: ChoiceOption
}

type BaseOption = {
  name: string
  description: string
  required?: boolean
}

export type StringOption = BaseOption & {
  autocomplete?: boolean
}

export type NumberOption = BaseOption & {
  autocomplete?: boolean
  min?: number
  max?: number
}

export type ChoiceOption = BaseOption & {
  type: 'STRING' | 'NUMBER' | 'BOOLEAN'
  choices: { name: string, value: string | number }[]
}

export type ChannelOption = BaseOption & {
  channelType: (keyof ChannelOptions)[]
  autocomplete?: boolean
}

export type MenuSelectOption = {
  label: string
  value: unknown
  description?: string
  emoji?: string | Emoji
  default?: boolean
}

export type MenuSelect = {
  customId: string
  placeholder?: string
  minValues?: number
  maxValues?: number
  disabled?: boolean
  choices: MenuSelectOption[]
}