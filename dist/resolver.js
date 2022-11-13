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
const express_1 = __importDefault(require("express"));
const exm_1 = require("./exm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    res.setHeader('content-type', 'application/json');
    const label = (_c = (_b = (_a = req.headers.host) === null || _a === void 0 ? void 0 : _a.split(".")) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : false;
    if (label) {
        const response = yield (0, exm_1.resolveLabel)(label);
        res.send(response);
        return;
    }
    res.send({ error: 'follow me on twitter! @bobchah' });
    return;
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`⚡️ [1notif]: Server is running at: ${port}`);
}));
