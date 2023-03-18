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
exports.getLearningResources = void 0;
const axios_1 = __importDefault(require("axios"));
function getLearningResources(country) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            id: null,
            type: 'learning_resource',
            attributes: {
                country: country,
                video: yield getVideo(country),
                images: yield getImages(country)
            }
        };
    });
}
exports.getLearningResources = getLearningResources;
function getVideo(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = axios_1.default.create({
            baseURL: 'https://youtube.googleapis.com',
            params: {
                channelId: 'UCluQ5yInbeAkkeCndNnUhpw',
                key: process.env.GOOGLE_API_KEY,
                type: 'video',
                part: 'snippet'
            },
        });
        const response = yield conn.get('/youtube/v3/search', {
            params: {
                q: country,
            },
        });
        let data = response.data.items.shift();
        return {
            title: data.snippet.title,
            youtube_video_id: data.id.videoId
        };
    });
}
function getImages(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = axios_1.default.create({
            baseURL: 'https://api.unsplash.com/',
            params: {
                client_id: process.env.UNSPLASH_ACCESS_KEY,
            },
        });
        const response = yield conn.get('/search/photos', {
            params: {
                query: country,
            },
        });
        let data = response.data.results;
        return data.map(image => ({ alt_tag: image.description, url: image.urls.raw }));
    });
}
//# sourceMappingURL=learning_resources.service.js.map