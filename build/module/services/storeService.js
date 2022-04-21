"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresService = void 0;
const baseService_1 = require("./baseService");
class StoresService extends baseService_1.BaseService {
    constructor(options = null, auth) {
        super(options, auth);
    }
    create(store) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                store: store
            };
            return yield this.http('POST', 'api/methods/app.stores.create', body, { Authorization: this.Authorization });
        });
    }
    show(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug
            };
            return yield this.http('POST', 'api/methods/app.stores.show', body, { Authorization: this.Authorization });
        });
    }
    list(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                options: options
            };
            return yield this.http('POST', 'api/methods/app.stores.list', body, { Authorization: this.Authorization });
        });
    }
}
exports.StoresService = StoresService;
