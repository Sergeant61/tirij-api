interface IOptions {
    BASE_URL: string;
}
interface IRequestOptionsPagination {
    currentPage: number;
    pageItems: number;
}
declare enum ESortingType {
    ASC = "asc",
    DESC = "desc"
}
interface IRequestOptionsSorting {
    sortField: string;
    sortOrder: ESortingType;
}
interface IRequestOptions {
    pagination: IRequestOptionsPagination;
    sorting?: IRequestOptionsSorting;
    filtering?: any;
}
export { IOptions, IRequestOptions };
