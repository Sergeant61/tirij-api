"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const city_service_1 = require("./module/services/city-service");
Object.defineProperty(exports, "CityService", { enumerable: true, get: function () { return city_service_1.CityService; } });
require('dotenv').config();
const n11Api = { CityService: city_service_1.CityService };
exports.default = n11Api;
module.exports = n11Api;
