import { LinkService } from './module/services/linkService';
import { StoresService } from './module/services/storeService';
declare const linkApi: {
    LinkService: typeof LinkService;
    StoresService: typeof StoresService;
};
export default linkApi;
export { LinkService, StoresService };
