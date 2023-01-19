"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineJSSwal = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const swal_1 = require("./swal");
function InlineJSSwal() {
    (0, inlinejs_1.WaitForGlobal)().then(() => {
        var _a;
        (_a = (0, inlinejs_1.GetGlobal)().GetConcept('alert')) === null || _a === void 0 ? void 0 : _a.SetName('swal');
        (0, inlinejs_1.GetGlobal)().SetConcept('swal', new swal_1.SwalAlert);
    });
}
exports.InlineJSSwal = InlineJSSwal;
