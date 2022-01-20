import { Collection } from '@mineralts/api'
import {
  ExplicitContentLevel, Feature, GuildFeature, LocalPath, Milliseconds,
  NotificationLevel,
  Region,
  Snowflake, SystemChannelFlag,
  VerificationLevel
} from '../../types'
import GuildMember from './GuildMember'
import VoiceChannel from '../channels/VoiceChannel'
import TextChannel from '../channels/TextChannel'
import GuildRoleManager from './GuildRoleManager'
import GuildChannelManager from './GuildChannelManager'
import GuildStickerManager from './GuildStickerManager'
import GuildMemberManager from './GuildMemberManager'
import GuildThreadManager from './GuildThreadManager'
import GuildEmojiManager from './GuildEmojiManager'
import InviteManager from '../invitation/InviteManager'
import GuildHashes from './GuildHashes'
import { Command } from '../../../../forge'

export default interface Guild {
  commands: Collection<Snowflake, Command>
  id: Snowflake
  name: string
  icon: string | null
  banner: string | null
  splash: string | null
  discoverySplash: string | null
  description: string | undefined
  premiumTier: number
  premiumSubscriptionCount: number
  systemChannelFlags: number
  explicitContentFilter: number
  region: keyof typeof Region
  isLazy: boolean
  applicationId: string | null
  nsfw: boolean
  memberCount: number
  roles: GuildRoleManager
  stageInstances: []
  guildHashes: GuildHashes
  afkChannelId: Snowflake
  publicUpdateChannelId: Snowflake
  channels: GuildChannelManager
  verificationLevel: number
  hasPremiumProgressBarEnabled: boolean
  features: GuildFeature[]
  stickers: GuildStickerManager
  members: GuildMemberManager
  bots: GuildMemberManager
  ruleChannelId: Snowflake
  guildScheduledEvents: any[]
  defaultMessageNotifications: keyof typeof NotificationLevel
  mfaLevel: number
  threads: GuildThreadManager
  maxMemberSize: number
  emojis: GuildEmojiManager
  defaultLang: string
  ownerId: Snowflake
  owner: GuildMember | undefined
  maxVideoChannelUsers: number
  registeredCommandCount: number
  applicationCommandCount: number
  afkTimeout: number
  systemChannelId: Snowflake
  vanityUrlCode: string | null
  embeddedActivities: any[]
  invites: InviteManager

  setName (value: string): Promise<void>
  setPreferredLocale (region: keyof typeof Region): Promise<void>
  leave (): Promise<void>
  isNsfw (): boolean
  setAfkChannel (voiceChannel: VoiceChannel | Snowflake): Promise<void>
  setVerificationLevel (level: keyof typeof VerificationLevel): Promise<void>
  setNotificationLevel (level: keyof typeof NotificationLevel): Promise<void>
  setExplicitContentFilter (level: keyof typeof ExplicitContentLevel): Promise<void>
  setAfkTimeout (value: Milliseconds): Promise<void>
  hasFeature(feature: keyof typeof Feature): boolean
  setIcon (path: LocalPath): Promise<void>
  removeIcon (): Promise<void>
  setOwner (member: GuildMember | Snowflake): Promise<void>
  setSplash (path: string): Promise<void>
  setDiscoverySplash (path: string): Promise<void>
  setBanner (path: string): Promise<void>
  setSystemChannel (channel: TextChannel | Snowflake): Promise<void>
  setSystemChannelFlag (flag: keyof typeof SystemChannelFlag): Promise<void>
  setRuleChannel (channel: TextChannel | Snowflake): Promise<void>
  setPublicUpdateChannel (channel: TextChannel | Snowflake): Promise<void>
}