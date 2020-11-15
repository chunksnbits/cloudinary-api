import { ResourceType } from "./ResourceType";
import { StorageType } from "./StorageType";
import { Resize } from '../transformers/resize'
import { Border } from '../transformers/border'
import { CustomFunction } from '../transformers/customFunc'
import { Offset } from '../transformers/video/offset'

export interface CldOptions {
  cloud?: CloudConfig,
  transformations?: TransformerOption | TransformerVideoOption
}

export interface CloudConfig {
  apiKey?: string,
  apiSecret?: string,
  cloudName?: string,
  cname?: string,
  privateCdn?: boolean,
  resourceType?: ResourceType,
  secure?: boolean,
  secureDistribution?: string,
  storageType?: StorageType,
  shorten?: string,
  urlSuffix?: string,
  useRootPath?: boolean,
  cdnSubdomain?: boolean,
  version?: string | number,
  signature?: string,
  forceVersion?: boolean
}

export interface TransformerOption {
  rotation?: string | number,
  aspectRatio?: string,
  background?: string,
  border?: Border | string,
  effect?: string | string[],
  color?: string,
  resize?: Resize,
  colorSpace?: string,
  customFunction?: CustomFunction,
  defaultImage?: string,
  delay?: string | number,
  density?: string,
  duration?: string | number,
  dpr?: string | number,
  else?: string,
  endIf?: string,
  fallbackContent?: string,
  format?: string,
  fetchFormat?: string,
  gravity?: string,
  if?: string,
  flags?: string | string[],
  ocr?: string,
  opacity?: number,
  overlay?: string,
  page?: string,
  prefix?: string,
  quality?: string,
  radius?: number,
  rawTransformation?: string,
  chaining?: TransformerOption[],
  underlay?: string,
  variable?: string,
  variables?: string,
  x?: string | number,
  y?: string | number,
  zoom?: string | number
}

export interface TransformerVideoOption extends TransformerOption{
  audioCodec?: string,
  audioFrequency?:string,
  bitRate?: string | number,
  fps?: string,
  keyframeInterval?: string,
  offset?: Offset
  poster?: string,
  sourceTypes?: string[],
  videoCodec?: string,
  videoSampling?: string
}
