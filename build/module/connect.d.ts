import { IOptions, Client } from 'soap';
import { IAuth } from './interfaces/IAuth';
export declare class SoapConnect {
    appKey: string;
    appSecret: string;
    url: string;
    options: IOptions;
    client: Client;
    constructor(appKey: string, appSecret: string, url: string, options?: IOptions);
    connect(): Promise<this>;
    getAuth(): IAuth;
}
export default SoapConnect;
