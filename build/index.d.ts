import { EExpireType } from './module/interfaces/ILinkCreate';
import { LinkService } from './module/services/linkServices';
declare const linkApi: {
    LinkService: typeof LinkService;
    EExpireType: typeof EExpireType;
};
export default linkApi;
export { LinkService, EExpireType };
