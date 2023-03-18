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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountry = void 0;
const axios_1 = __importDefault(require("axios"));
const conn = axios_1.default.create({
    baseURL: 'https://restcountries.com',
});
const getCountry = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield conn.get('/v3.1/all')
        .then(response => {
        return response.data;
    })
        .catch(() => {
        return ['thailand', 'mexico'];
    });
    return getRandomCountry(response);
});
exports.getCountry = getCountry;
const getRandomCountry = (countryList) => countryList[Math.floor(Math.random() * countryList.length)];
//# sourceMappingURL=country.service.js.map