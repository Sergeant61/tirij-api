interface ILinkCreateClickCount {
  max: number,
  count: number
}

enum EExpireType {
  NEVER = 'never',
  DATE = 'date',
  COUNT = 'count'
}

interface ILinkCreate {
  longUrl: string;
  expireType: EExpireType;
  expireAt?: string;
  clickCount?: ILinkCreateClickCount;
}

export { ILinkCreate, ILinkCreateClickCount, EExpireType }
