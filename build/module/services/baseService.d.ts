import { IOptions } from '../interfaces/IOptions';
import { IAuth } from '../interfaces/IAuth';
export declare class BaseService {
    private BASE_URL;
    Authorization: string;
    constructor(options: IOptions | any, auth?: IAuth);
    private auth;
    private setOptions;
    http(method: string, path: string, data?: any, headers?: any): Promise<any>;
}
