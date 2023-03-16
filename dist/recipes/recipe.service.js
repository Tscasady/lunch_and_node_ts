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
exports.getRecipes = void 0;
const axios_1 = __importDefault(require("axios"));
const conn = axios_1.default.create({
    baseURL: 'https://api.edamam.com',
    params: {
        type: 'public',
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_APP_KEY,
    },
});
function getRecipes(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield conn.get('/api/recipes/v2', {
            params: {
                q: country,
            },
        });
        return buildRecipes(response, country);
    });
}
exports.getRecipes = getRecipes;
function buildRecipes(response, country) {
    return response.data.hits.map((recipeData) => {
        return recipe_interface_1.Recipe;
        {
            title: recipeData.recipe.label,
                url;
            recipeData.recipe.uri,
                country;
            country,
                image;
            recipeData.recipe.image;
        }
    });
}
//# sourceMappingURL=recipe.service.js.map