"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EExpireType = exports.LinkService = void 0;
const ILinkCreate_1 = require("./module/interfaces/ILinkCreate");
Object.defineProperty(exports, "EExpireType", { enumerable: true, get: function () { return ILinkCreate_1.EExpireType; } });
const linkServices_1 = require("./module/services/linkServices");
Object.defineProperty(exports, "LinkService", { enumerable: true, get: function () { return linkServices_1.LinkService; } });
require('dotenv').config();
const linkApi = { LinkService: linkServices_1.LinkService, EExpireType: ILinkCreate_1.EExpireType };
exports.default = linkApi;
module.exports = linkApi;
// new LinkService().login('recep@bordo.io', '123123').then(linkService => {
//   linkService.create('store', {
//     longUrl: 'https://recepozen.com',
//     expireType: EExpireType.NEVER
//   })
// })
