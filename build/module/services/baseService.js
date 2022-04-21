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
exports.BaseService = void 0;
const axios = require('axios');
class BaseService {
    constructor(options, auth) {
        this.BASE_URL = '';
        this.Authorization = '';
        this.setOptions(options);
        if (auth) {
            this.auth(auth.username, auth.password);
        }
    }
    auth(username, password) {
        this.Authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    }
    setOptions(options) {
        this.BASE_URL = 'https://tirij.xyz/' || (options === null || options === void 0 ? void 0 : options.BASE_URL);
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
}
exports.BaseService = BaseService;
