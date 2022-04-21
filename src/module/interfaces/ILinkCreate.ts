/* eslint-disable no-unused-vars */
interface ILinkCreateClickCount {
  max: number,
  count: number
}

enum EExpireType {
  NEVER = 'never',
  DATE = 'date',
  COUNT = 'count'
}

enum ELinkType {
  SHORT = 'short',
  LONG = 'long'
}

enum ELinkQrType {
  PNG = 'png',
  JPEG = 'jpeg',
  WEBP = 'webp',
  SVG = 'svg',
}

interface ILinkQrOptions {
  width?: number;
  height?: number;
  margin?: number;
  type?: ELinkQrType;
  image?: string;
  qrOptions?: any;
  imageOptions?: any;
  dotsOptions?: any;
  cornersSquareOptions?: any;
  backgroundOptions?: any;
}
interface ILinkCreate {
  longUrl: string;
  expireType: EExpireType;
  expireAt?: string;
  clickCount?: ILinkCreateClickCount;
}

export { ILinkCreate, ILinkCreateClickCount, ILinkQrOptions, EExpireType, ELinkType }
