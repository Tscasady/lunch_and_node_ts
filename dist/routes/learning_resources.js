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
exports.learningResourcesRouter = void 0;
const express_1 = __importDefault(require("express"));
const learning_resources_service_1 = require("../learning_resources/learning_resources.service");
exports.learningResourcesRouter = express_1.default.Router();
/* GET LR endpoint. */
exports.learningResourcesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let country = req.query.country.toString();
    try {
        let lr = yield (0, learning_resources_service_1.getLearningResources)(country);
        res.send({ data: lr });
    }
    catch (error) {
        res.status(500).send('We goof\'d');
    }
}));
//# sourceMappingURL=learning_resources.js.map