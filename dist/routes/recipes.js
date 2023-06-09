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
exports.recipesRouter = void 0;
const express_1 = __importDefault(require("express"));
const recipe_service_1 = require("../recipes/recipe.service");
const country_service_1 = require("../recipes/country.service");
exports.recipesRouter = express_1.default.Router();
/* GET recipes endpoint. */
exports.recipesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let country = req.query.country;
    if (!country) {
        country = yield (0, country_service_1.getCountry)();
    }
    try {
        let recipes = yield (0, recipe_service_1.getRecipes)(country);
        res.send({ data: recipes });
    }
    catch (error) {
        res.status(500).send('We goof\'d');
    }
}));
//# sourceMappingURL=recipes.js.map