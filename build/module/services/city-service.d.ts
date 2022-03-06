import SoapConnect from '../connect';
export declare class CityService extends SoapConnect {
    constructor(appKey: string, appSecret: string);
    GetCities(): Promise<any>;
    GetCity(cityCode: number): Promise<any>;
    GetDistrict(cityCode: number): Promise<any>;
    GetNeighborhoods(districtId: number): Promise<any>;
}
