export default interface VoiceRegion {
  id: string
  name: string
  optimal: boolean
  custom: boolean
  deprecated: boolean

  isOptimal (): boolean
  isCustom (): boolean
  isDeprecated (): boolean
}