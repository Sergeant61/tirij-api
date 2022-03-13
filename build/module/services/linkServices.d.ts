import { ILinkCreate } from '../interfaces/ILinkCreate';
import { IOptions } from '../interfaces/IOptions';
export declare class LinkService {
    private token;
    private BASE_URL;
    constructor(options?: IOptions);
    private http;
    login(email: string, password: string): Promise<this>;
    create(slug: string, data: ILinkCreate): Promise<any>;
}
