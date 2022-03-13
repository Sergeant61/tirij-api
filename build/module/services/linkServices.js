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
exports.Link = exports.LinkService = void 0;
const axios = require('axios');
class LinkService {
    constructor(options) {
        this.token = '';
        this.BASE_URL = '';
        this.BASE_URL = 'https://link.recepozen.com/' || (options === null || options === void 0 ? void 0 : options.BASE_URL);
    }
    http(method, path, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}${path}`;
            return yield axios({
                method: method,
                url: url,
                data: data,
                headers: headers
            });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                email: email,
                password: password
            };
            const response = yield this.http('POST', 'api/methods/auth.signin', body);
            this.token = response.data.token;
            return this;
        });
    }
    create(slug, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.token === '') {
                throw new Error('Must be login');
            }
            const body = {
                slug: slug,
                link: data
            };
            return yield this.http('POST', 'api/methods/app.links.create', body, { Authorization: `Bearer ${this.token}` });
        });
    }
}
exports.LinkService = LinkService;
exports.Link = {
    BASE_URL: 'https://link.recepozen.com/',
    http(method, path, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}${path}`;
            return yield axios({
                method: method,
                url: url,
                data: data,
                headers: headers
            });
        });
    },
    create(longUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                link: {
                    longUrl: longUrl
                }
            };
            return yield this.http('POST', 'api/methods/app.links.createFree', body);
        });
    }
};
