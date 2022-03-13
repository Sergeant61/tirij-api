"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EExpireType = exports.Link = exports.LinkService = void 0;
const ILinkCreate_1 = require("./module/interfaces/ILinkCreate");
Object.defineProperty(exports, "EExpireType", { enumerable: true, get: function () { return ILinkCreate_1.EExpireType; } });
const linkServices_1 = require("./module/services/linkServices");
Object.defineProperty(exports, "LinkService", { enumerable: true, get: function () { return linkServices_1.LinkService; } });
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return linkServices_1.Link; } });
require('dotenv').config();
const linkApi = { LinkService: linkServices_1.LinkService, Link: linkServices_1.Link, EExpireType: ILinkCreate_1.EExpireType };
exports.default = linkApi;
module.exports = linkApi;
// new LinkService().login('recep@bordo.io', '123123').then(linkService => {
//   linkService.create('store', {
//     longUrl: 'https://recepozen.com',
//     expireType: EExpireType.NEVER
//   })
// })
// Link.BASE_URL = 'http://localhost:3050/'
// Link.create('https://recepozen.com').then(data => {
//   console.log(data)
// })
