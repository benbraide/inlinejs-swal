import { GetGlobal, WaitForGlobal } from '@benbraide/inlinejs';
import { SwalAlert } from './swal';
export function InlineJSSwal() {
    WaitForGlobal().then(() => {
        var _a;
        (_a = GetGlobal().GetConcept('alert')) === null || _a === void 0 ? void 0 : _a.SetName('swal');
        GetGlobal().SetConcept('swal', new SwalAlert);
    });
}
