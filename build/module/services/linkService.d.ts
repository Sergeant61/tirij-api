import { ILinkCreate, ILinkQrOptions, ELinkType } from '../interfaces/ILinkCreate';
import { IOptions, IRequestOptions } from '../interfaces/IOptions';
import { IAuth } from '../interfaces/IAuth';
import { BaseService } from './baseService';
export declare class LinkService extends BaseService {
    constructor(options?: IOptions | any, auth?: IAuth);
    createFree(longUrl: string): Promise<any>;
    create(slug: string, link: ILinkCreate): Promise<any>;
    createQr(slug: string, _id: string, type: ELinkType, options?: ILinkQrOptions): Promise<any>;
    delete(slug: string, _id: string): Promise<any>;
    update(slug: string, _id: string, link: ILinkCreate): Promise<any>;
    show(slug: string, _id: string): Promise<any>;
    list(slug: string, options: IRequestOptions): Promise<any>;
}
