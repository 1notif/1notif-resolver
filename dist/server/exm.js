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
exports.resolveLabel = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
function exmRead(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const state = yield axios_1.default.get(`https://api.exm.dev/read/${id}`);
            return state === null || state === void 0 ? void 0 : state.data;
        }
        catch (err) {
            return {};
        }
    });
}
function resolveLabel(label) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const oneNotifState = yield exmRead(constants_1.ONE_NOTIF_FUNCTION);
            const targetFunction = oneNotifState === null || oneNotifState === void 0 ? void 0 : oneNotifState.registrar[label];
            const targetState = yield exmRead(targetFunction);
            return targetState;
        }
        catch (e) {
            return {};
        }
    });
}
exports.resolveLabel = resolveLabel;
