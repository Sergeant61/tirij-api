import { EExpireType } from './module/interfaces/ILinkCreate';
import { LinkService, Link } from './module/services/linkServices';
declare const linkApi: {
    LinkService: typeof LinkService;
    Link: {
        BASE_URL: string;
        http(method: string, path: string, data?: any, headers?: any): Promise<any>;
        create(longUrl: string): Promise<any>;
    };
    EExpireType: typeof EExpireType;
};
export default linkApi;
export { LinkService, Link, EExpireType };
