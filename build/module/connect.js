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
exports.SoapConnect = void 0;
const soap_1 = require("soap");
class SoapConnect {
    // eslint-disable-next-line no-useless-constructor
    constructor(appKey, appSecret, url, options = {}) {
        this.appKey = appKey;
        this.appSecret = appSecret;
        this.url = url;
        this.options = options;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = yield (0, soap_1.createClientAsync)(this.url, this.options);
            return this;
        });
    }
    getAuth() {
        const auth = {
            appKey: this.appKey,
            appSecret: this.appSecret
        };
        return auth;
    }
}
exports.SoapConnect = SoapConnect;
exports.default = SoapConnect;
