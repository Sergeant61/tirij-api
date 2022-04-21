import { IStoresCreate } from '../interfaces/IStoresCreate';
import { IOptions, IRequestOptions } from '../interfaces/IOptions';
import { IAuth } from '../interfaces/IAuth';
import { BaseService } from './baseService';
export declare class StoresService extends BaseService {
    constructor(options?: IOptions | null, auth?: IAuth);
    create(store: IStoresCreate): Promise<any>;
    show(slug: string): Promise<any>;
    list(options: IRequestOptions): Promise<any>;
}
