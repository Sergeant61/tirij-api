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
exports.LinkService = void 0;
const baseService_1 = require("./baseService");
class LinkService extends baseService_1.BaseService {
    constructor(options = {}, auth) {
        super(options, auth);
    }
    createFree(longUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                link: {
                    longUrl: longUrl
                }
            };
            return yield this.http('POST', 'api/methods/app.links.createFree', body);
        });
    }
    create(slug, link) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                link: link
            };
            return yield this.http('POST', 'api/methods/app.links.create', body, { Authorization: this.Authorization });
        });
    }
    createQr(slug, _id, type, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                _id: _id,
                type: type,
                options: options
            };
            return yield this.http('POST', 'api/methods/app.links.createQr', body, { Authorization: this.Authorization });
        });
    }
    delete(slug, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                _id: _id
            };
            return yield this.http('POST', 'api/methods/app.links.delete', body, { Authorization: this.Authorization });
        });
    }
    update(slug, _id, link) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                _id: _id,
                link: link
            };
            return yield this.http('POST', 'api/methods/app.links.update', body, { Authorization: this.Authorization });
        });
    }
    show(slug, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                _id: _id
            };
            return yield this.http('POST', 'api/methods/app.links.show', body, { Authorization: this.Authorization });
        });
    }
    list(slug, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                slug: slug,
                options: options
            };
            return yield this.http('POST', 'api/methods/app.links.list', body, { Authorization: this.Authorization });
        });
    }
}
exports.LinkService = LinkService;
