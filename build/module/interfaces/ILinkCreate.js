"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELinkType = exports.EExpireType = void 0;
var EExpireType;
(function (EExpireType) {
    EExpireType["NEVER"] = "never";
    EExpireType["DATE"] = "date";
    EExpireType["COUNT"] = "count";
})(EExpireType || (EExpireType = {}));
exports.EExpireType = EExpireType;
var ELinkType;
(function (ELinkType) {
    ELinkType["SHORT"] = "short";
    ELinkType["LONG"] = "long";
})(ELinkType || (ELinkType = {}));
exports.ELinkType = ELinkType;
var ELinkQrType;
(function (ELinkQrType) {
    ELinkQrType["PNG"] = "png";
    ELinkQrType["JPEG"] = "jpeg";
    ELinkQrType["WEBP"] = "webp";
    ELinkQrType["SVG"] = "svg";
})(ELinkQrType || (ELinkQrType = {}));
